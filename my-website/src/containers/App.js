import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../components/Main'
import Header from '../components/Header'
import QuienSoy from '../components/QuienSoy'
import EstudiosYExperiencia from '../components/EstudiosYExperiencia'
import RedesSociales from '../components/RedesSociales'
import Footer from '../components/Footer'


class App extends React.Component{

  render(){
    return(
      <Main>
        <Header />
        <section>
          <QuienSoy />
          <EstudiosYExperiencia />
          <RedesSociales />
        </section>
        <Footer />
      </Main>
    )
  }
}
/*

*/

export default App
