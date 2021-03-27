import { Layout, Menu } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header } = Layout;

export default class Cabecalho extends Component{

    render() {
        return(
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to='/pessoas'>Pessoas</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/grupos'>Grupos das Pessoas</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }

}