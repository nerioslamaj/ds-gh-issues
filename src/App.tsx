import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.scss';
import GLOBAL from './global';

type AppState = { 
  issuesList: Array<Object>
};

class App extends React.Component< any, AppState > {
  constructor(props: any){
      super(props);
      this.state = { issuesList: [] };
  }

  componentDidMount() {
    this.getIssuesList(GLOBAL.issuesAPI);
  }

  async getIssuesList(url: string) {

    const res = await axios.get(url);
    const data : Array<Object> = await res.data;

    this.setState({ issuesList: data })
  }

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
          
        </section>
      </div>
    );
  }
}

export default App;
