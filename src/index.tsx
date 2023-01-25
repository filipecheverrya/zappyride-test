import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import 'react-dropdown/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import English from './lang/en.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <IntlProvider locale={navigator.language} messages={English}>
    <Router>
      <App />
    </Router>
  </IntlProvider>
);

reportWebVitals();
