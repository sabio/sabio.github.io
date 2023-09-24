import { IntlProvider } from "react-intl";
import useLanguage from './state/language.js';
import Routes from './routes'
import './App.scss'

import messages_en from "./translations/en.json";
import messages_es from "./translations/es.json";


const messages = {
    'en': messages_en,
    'es': messages_es
};


function App() {

    const { language } = useLanguage(); 

    return (
        <IntlProvider locale={language} messages={messages[language]}>
            <Routes />
        </IntlProvider>
    );
}

export default App
