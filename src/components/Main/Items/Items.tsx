import React, { useEffect, useState } from 'react';
import { IItems, IItemsReducer } from '../../../redux/reducers/items/items-reducer'
import Item from './Item/Item';
import s from './Items.module.css'
import { Divider, Row, Layout, Spin } from 'antd';
const { Header, Content, Footer } = Layout;

// TODO

export interface IItemsProps {
  items: IItems;
}

const Items = ({ items }: IItemsProps) => {
  let itemsElements: any;

  let [countSelected, setSelected] = useState<number[]>([]);

  let onSelectHandle = (id: number) => {
    if (countSelected.includes(id)) {
      setSelected(countSelected.filter((num) => num !== id));
      return;
    }
    setSelected([...countSelected, id]);
  }

  if (items) {
    itemsElements = items.map(item =>
    (<Item key={item.id}
      name={item.name}
      description={item.description}
      id={item.id}
      onSelect={onSelectHandle}
      position={item.position}
      sector={item.sector} />))
  }

  return (<div className={s.container}>
    <div>
      {
        countSelected.length ? <span>selected : {countSelected.length}</span> : null
      }
    </div>
    <Row gutter={[12, 10]} align="middle">
      {itemsElements.length ? itemsElements : (
        <Layout>
          <Content style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div>
              <Spin size="large" />
            </div>
          </Content>

        </Layout>
      )
      }
    </Row>
  </div>
  )
}

export default Items;