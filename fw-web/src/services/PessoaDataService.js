import axios from 'axios';

const API_URL = 'http://localhost:8080/';

/**
 * Faz a chamada no back-end para executar os servicos da entidade Pessoa
 * 
 * @class PessoaDataService
 */
class PessoaDataService {

    retriveAllPessoas() {
        return axios.get(`${API_URL}pessoas`);
    }

    updatePessoa(codigo, pessoa) {
        return axios.put(`${API_URL}pessoas/${codigo}`, pessoa);
    }

}   // class PessoaDataService

export default new PessoaDataService();