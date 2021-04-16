import React from 'react';
import {Layout, Empty} from 'antd';

const Dashboard = () => {
  return (
    <Layout style={{height: '100vh', display:'flex', alignItems: 'center', justifyContent:'center'}}>
      <Empty description={false} image={Empty.PRESENTED_IMAGE_DEFAULT} />
    </Layout>
  )
}

export default Dashboard;