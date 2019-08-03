import { HashRouter as Router, Switch, Route, } from 'react-router-dom'
import { TransitionGroup, CSSTransition, } from 'react-transition-group'
import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Header from '../components/Header'
import QuienSoy from '../components/QuienSoy'
import EducacionYExperiencia from '../components/EducacionYExperiencia'
import RedesSociales from '../components/RedesSociales'
import jsonExperiencia from '../../public/docs/experiencia'
import jsonEducacion from '../../public/docs/educacion'
import jsonCertificaciones from '../../public/docs/certificaciones'
import jsonOtrasActividades from '../../public/docs/otrasActividades'


const App = () => (
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
                        jsonEducacion={jsonEducacion}
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
)


export default App
