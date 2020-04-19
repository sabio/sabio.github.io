import React, { useState, } from 'react'
import { connect } from 'react-redux';
import { languageAction } from '../redux/actions/languageAction';
import mexico_flag from '../../public/images/mexico-flag-icon-32.png'
import usa_flag from '../../public/images/united-states-of-america-flag-icon-32.png'


const FlagLangs = ({setSpanishLanguage, setEnglishLanguage}) => {
  return (
    <div className="changeLanguageDiv">
      <img src={mexico_flag} title="Español por favor" onClick={setSpanishLanguage} />
      <img src={usa_flag} title="English please" onClick={setEnglishLanguage} />
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setSpanishLanguage: () => dispatch(languageAction('es')),
  setEnglishLanguage: () => dispatch(languageAction('en'))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlagLangs);
