import { Layout } from 'antd';
import { Component } from 'react';

const { Footer } = Layout;

export default class Rodape extends Component{

    render() {
        return(
            <Footer style={{ textAlign: 'center' }}>
                eVaccine - Fullstack Week
            </Footer>
        );
    }

}