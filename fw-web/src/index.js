import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import App from './App';
import Pessoas from './pages/ListaPessoas';
import Grupos from './pages/ListaGruposPessoas';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return(
    <Router>
      <Cabecalho />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/pessoas" component={Pessoas} />
          <Route path="/grupos" component={Grupos} />
        </Switch>
      <Rodape />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
