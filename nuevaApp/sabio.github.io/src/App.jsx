import Routes from './routes'
import './App.scss'
import { IntlProvider } from "react-intl";



function App() {
    return (
        <IntlProvider locale='es' messages={{
            "hola.mundo": "AAAAAAAAAAAAAAXXXXXXXXXXXXXXXXXXXXX"
        }}>
            <Routes />
        </IntlProvider>
    );

}

export default App
