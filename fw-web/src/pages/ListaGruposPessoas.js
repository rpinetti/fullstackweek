import React, {Component} from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Button, message } from 'antd';
import GruposPessoasDataService from '../services/GruposPessoasDataService';

const {Column} = Table;

export default class ListaGruposPessoas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gruposPessoas: [],
            message: null
        };
    }

    componentDidMount() {
        this.refreshGruposPessoas();
    }   // componentDidMount()

    refreshGruposPessoas = () => {
        GruposPessoasDataService.retriveAllGrupos()
            .then(
                response => {
                    console.log(response);
                    this.setState({ gruposPessoas: response.data });
                }
            )
        ;
    }   // refreshGruposPessoas()

    btnIncluirGrupo = () => {

    }
    alterarGrupoPessoas = (record) => {

    }   // alterarGrupoPessoas()

    render() {
        return(
            <div className="container" style={{ padding: '0 50px' }}>
                <h2>Grupos das Pessoas</h2>
                <div className="container">
                    <Space style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={this.btnIncluirGrupo}>Novo Grupo</Button>
                    </Space>
                    <Table dataSource={this.state.gruposPessoas}>
                        <Column title="NOME" dataIndex="nome" key="nome" />
                        <Column title="DESCRICAO" dataIndex="descricao" key="descricao" />
                        <Column title="EDITAR" key="editar" 
                            render={(text, record) => (
                                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={(event) => this.alterarGrupoPessoas(record)} />
                            )}
                        />
                    </Table>
                </div>
            </div>
        );  // return
    }   // render()
}   // export default class ListaGruposPessoas