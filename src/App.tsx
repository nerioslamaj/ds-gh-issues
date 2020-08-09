import React from 'react';
import IssuesList from './components/IssuesList'
import './App.scss';

class App extends React.Component {
  
  render() {
    return (
      <div className="App-wrapper">

        <header className="App-header">
          <h2 className="App-logo">ds-gh-issues</h2>

          <div className="App-pagination">
            <span>Previous</span>
            <span> — </span>
            <span>Next</span>
          </div>
        </header>

        <section className="App-list">
          <IssuesList></IssuesList>
        </section>
      </div>
    );
  }
}

export default App;
