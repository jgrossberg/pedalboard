import React from 'react';
import './App.css';
import Layout from './containers/Layout';
import PedalBuilder from './containers/PedalBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <PedalBuilder/>
      </Layout>
    </div>
  );
}

export default App;
