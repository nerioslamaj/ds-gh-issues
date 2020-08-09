import React from 'react';
import IssuesList from './components/IssuesList'
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App-wrapper">

        <header className="App-header">
          <a className="App-logo" href="https://github.com/nerioslamaj/ds-gh-issues" target="_blank" rel="noopener noreferrer">
            <h1>ds-gh-issues</h1>
          </a>

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
