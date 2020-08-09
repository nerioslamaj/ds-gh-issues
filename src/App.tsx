import React from 'react';
import IssuesList from './components/IssuesList'
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App-wrapper">

        <header className="App-header">
          <h2 className="App-logo">ds-gh-issues</h2>

          <p className="App-intro">A simple app that pulls the latest issues from Create React App repo</p>
        </header>

        <section className="App-list">
          <IssuesList></IssuesList>
        </section>
      </div>
    );
  }
}

export default App;
