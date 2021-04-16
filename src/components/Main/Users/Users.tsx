import React from 'react';
import { Empty, Layout } from 'antd';
const Users = () => {
  return (
    <Layout style={{height: '100vh', display:'flex', alignItems: 'center', justifyContent:'center'}}>
      <Empty description={false} image={Empty.PRESENTED_IMAGE_DEFAULT} />
    </Layout>
  )
}

export default Users;