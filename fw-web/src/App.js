import { Layout, Menu, Breadcrumb } from 'antd';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import 'antd/dist/antd.css';

const { Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Content style={{ padding: '0 50px' }}>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
