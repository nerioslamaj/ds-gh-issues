import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <p>
            <code>
              {JSON.stringify(this.state.issuesList)}
            </code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
