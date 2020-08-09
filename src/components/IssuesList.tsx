import React from 'react';
import axios from 'axios'
import IssueItem from './IssueItem'
import './IssuesList.scss';
import GLOBAL from '../global';

type IssuesListState = {
  issuesList: Array<any>
};

class IssuesList extends React.Component<any, IssuesListState> {
  constructor(props: any) {
    super(props);
    this.state = { issuesList: [] };
  }

  componentDidMount() {
    this.getIssuesList(GLOBAL.issuesAPI);
  }

  async getIssuesList(url: string) {

    const res = await axios.get(url);
    const data: Array<any> = await res.data;

    this.setState({ issuesList: data })
  }

  render() {
    return (
      <div className="Issues-list-wrapper">
        <div className="Issues-list">
          {this.state.issuesList.map(function (issue) {
            return <IssueItem
              key={issue.number}
              title={issue.title}
              author={issue.user.login}
              number={issue.number}
              createdAt={issue.created_at}
              labels={issue.labels}
            />;
          })}
        </div>
        <p className="Issues-pagination">
          <span>Previous</span> — <span>Next</span>
        </p>
      </div>
    );
  }
}

export default IssuesList;
