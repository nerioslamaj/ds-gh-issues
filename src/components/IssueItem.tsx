import React from 'react';
import './IssueItem.scss';

type IssueItemProp = {
  title: String,
  author: String,
  createdAt: String,
  number: Number,
  labels: Array<any>
};

class App extends React.Component< IssueItemProp > {
  constructor(props: IssueItemProp){
      super(props);
      this.state = {};
  }

  render() {
    return (
      <div className="List-item-wrapper">
        { this.props.title }
        { this.props.author }
        { this.props.createdAt }
        { this.props.title }
      </div>
    );
  }
}

export default App;
