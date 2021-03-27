import axios from 'axios';

const API_URL = 'http://localhost:8080/';

/**
 * Faz a chamada no back-end para executar os servicos da entidade Pessoa
 * 
 * @class GrupoPessoasDataService
 */
 class GrupoPessoasDataService {

    retriveAllGrupos() {
        return axios.get(`${API_URL}grupos`);
    }

    updateGrupo(codigo, grupo) {
        return axios.put(`${API_URL}grupos/${codigo}`, grupo);
    }

}   // class GrupoPessoasDataService

export default new GrupoPessoasDataService();