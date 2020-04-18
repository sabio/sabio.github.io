import { HashRouter as Router, Switch, Route, } from 'react-router-dom'
import { TransitionGroup, CSSTransition, } from 'react-transition-group'
import { connect } from 'react-redux';
import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Header from '../components/Header'
import QuienSoy from '../components/QuienSoy'
import EducacionYExperiencia from '../components/EducacionYExperiencia'
import RedesSociales from '../components/RedesSociales'
import jsonExperiencia from '../../public/docs/experiencia'
import educacion_es from '../../public/docs/educacion_es'
import educacion_en from '../../public/docs/educacion_en'
import jsonCertificaciones from '../../public/docs/certificaciones'
import jsonOtrasActividades from '../../public/docs/otrasActividades'

import { IntlProvider, addLocaleData } from "react-intl";
import messages_en from "../translations/en.json";
import messages_es from "../translations/es.json";

const messages = {
  'en': messages_en,
  'es': messages_es
};


const jsons = {}
jsons['educacion_es'] = educacion_es
jsons['educacion_en'] = educacion_en


const App = ({language}) => {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Main>
        <Router>
          <Route render={({ location, }) => (
            <div>
              <Header />
              <div id="wrapper">
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    timeout={1000}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/quiensoy" component={QuienSoy} />
                      <Route
                        exact
                        path="/estYExp"
                        render={() => (
                          <EducacionYExperiencia
                            jsonExperiencia={jsonExperiencia}
                            jsonEducacion={getJson("educacion", language)}
                            jsonCertificaciones={jsonCertificaciones}
                            jsonOtrasActividades={jsonOtrasActividades}
                          />
                        )}
                      />
                      <Route exact path="/redesSociales" component={RedesSociales} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          )}
          />
        </Router>
      </Main>
    </IntlProvider>
  )
}

const getJson = (type, language) => {
  return jsons[type + '_' + language]
}


const mapStateToProps = state => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps, null)(App);
