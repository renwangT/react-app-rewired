import React from 'react';
import logo from './logo.svg';
import './App.less';
import './i18';
import { useTranslation, Trans, Translation } from 'react-i18next'
import {Button } from 'antd';
function App() {
let { t ,i18n} = useTranslation()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{t('home')}</h1>
      <h2><Trans>home</Trans></h2>
      <Translation>{t => <h3>{t('home')}</h3>}</Translation>
        <Button 
        type="primary" 
        onClick={() => i18n.changeLanguage(i18n.language==='en'?'zh':'en')}
        >
          {i18n.language==='en'?'zh':'en'}
        </Button>
      </header>
    </div>
  );
}

export default App;
