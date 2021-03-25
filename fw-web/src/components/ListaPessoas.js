import React, {Component} from 'react';
import { Table, Tag, Button, message } from 'antd';
import PessoaDataService from '../services/PessoaDataService';

const {Column} = Table;

export default class ListaPessoas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pessoas: [],
            message: null
        };
    }

    componentDidMount() {
        this.refreshPessoas();
    }

    refreshPessoas() {
        PessoaDataService.retriveAllPessoas()
            .then(
                response => {
                    console.log(response);
                    this.setState({ pessoas: response.data });
                }
            )
        ;
    }

    alterarStatusVacina(record) {
        if (record.isVacinada) {
            record.isVacinada = false;
        } else {
            record.isVacinada = true;
        }
        PessoaDataService.updatePessoa(record, record.codigo);
        message.success('Status Alterado com sucesso');
    }

    render() {
        return(
            <div className="container">
                <h2>Pessoas Cadastradas</h2>
                <div className="container">
                    <Table dataSource={this.state.pessoas}>
                        <Column title="NOME" dataIndex="nome" key="nome" />
                        <Column title="CPF" dataIndex="cpf" key="cpf" />
                        <Column title="TELEFONE" dataIndex="telefone" key="telefone" />
                        <Column title="E-MAIL" dataIndex="email" key="email" />
                        <Column title="VACINADA" dataIndex="isVacinada" key="isVacinada"
                            render={(text, record) => (
                                <Tag color={ record.isVacinada ? 'Green' : 'Red' } >{ record.isVacinada ? 'Sim' : 'Não' }</Tag>
                            )}
                        />
                        <Column title="ATUALIZAR" key="atualizar"
                            render={(text, record) => (
                                <Button type="primary" onClick={(event) => this.alterarStatusVacina(record)} >Alterar Status</Button>
                            )}
                        />
                    </Table>
                </div>
            </div>
        );
    }

}   // class ListaPessoas