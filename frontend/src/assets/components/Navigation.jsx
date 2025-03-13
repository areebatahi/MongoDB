import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;
const items = [{
    key:"/",
    label:"Home"
},{
    key:"/products",
    label:"Products"
},{
     key:"/contact",
    label:'Contact'
},
{
    key:"/about",
    label:'About'
},
{
    key:"/login",
    label:'Login'
},
{
  key:"/signup",
  label:'SignUp'
}]

const Navigation = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around",
          width: "100vw"

        }}
      >
        <Menu
        onClick={(data)=>navigate(data.key)}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};
export default Navigation;