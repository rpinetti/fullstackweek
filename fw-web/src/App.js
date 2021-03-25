import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import ListaPessoas from './components/ListaPessoas';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Pessoas</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className='site-layout-content'>
            <ListaPessoas>

            </ListaPessoas>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          eVaccine - Fullstack Week
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
