import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems, loadItemsByName, loadItemsByNameAndDescription } from '../../../redux/reducers/items/actions';

import Items from '../Items/Items';
import s from './Home.module.css'

import { Layout, Avatar, Button, Input, Select } from 'antd';

import { Redirect } from 'react-router-dom';
import { RootState } from '../../../redux/reducers/store';

const { Option } = Select;

const { Search } = Input;
const { Header, Content, Footer } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const { isAuth, username, email } = useSelector((state: RootState) => state.auth);

  let [filter, setFilter] = useState<string>('Any');

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  if (!isAuth) {
    return <Redirect to="/login" />
  }

  const onHandleSearch = (v: string) => {
    let req = v.split(' ');
    if (req.length === 2) {
      dispatch(loadItemsByNameAndDescription(req[0], req[1]));
    }

    if (req.length === 1) {
      req[0]
        ? dispatch(loadItemsByName(req[0]))
        : dispatch(loadItems());
    }
    if (req.length === 2) {
      dispatch(loadItemsByNameAndDescription(req[0], req[1]));
    }
    if (req.length === 0) {

    }
    console.log(v);
  }

  function handleChange(o: any) {
    console.log("value:", o.value);
    setFilter(o.value);
  }

  return (
    <Layout>
      <Header style={{ background: "#fff" }}>
        <div className={s.block}>
          <div className={s.searchBlock}>
            <Search
              style={{
                width: '40vh'
              }}

              placeholder="input search text"
              allowClear
              onSearch={onHandleSearch} />
            <Select
              labelInValue
              defaultValue={'Any'}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="Any">Any</Option>
              <Option value="A">sector A</Option>
              <Option value="B">sector B</Option>
            </Select>
          </div>
          <div>
            <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              {
                (username || email.substring(0, 1)).toUpperCase()
              }
            </Avatar>
          </div>

        </div>

      </Header>
      <Content style={{ margin: '-20px 0 0 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

          <div>
            <Items />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  )
}

export default Home;