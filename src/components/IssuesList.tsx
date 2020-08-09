import React from 'react';
import axios from 'axios'
import IssueItem from './IssueItem'
import './IssuesList.scss';
import GLOBAL from '../global';

type IssuesListState = {
  issuesList: Array<any>,
  currentPage: number,
  maxPage: number
};

class IssuesList extends React.Component<any, IssuesListState> {
  constructor(props: any) {
    super(props);
    this.state = { 
      issuesList: [],
      currentPage: 1,
      maxPage: 4
    };
  }

  componentDidMount() {
    this.getIssuesList(this.state.currentPage);
  }

  async getIssuesList(page: number) {
    if(page > 0 && page <= this.state.maxPage) {
      const fullUrl = `${GLOBAL.issuesAPI}?page=${page}`;
  
      const res = await axios.get(fullUrl);
      const data: Array<any> = await res.data;
  
      this.setState({ 
        issuesList: data,
        currentPage: page
      })
    }
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
              url={issue.html_url}
            />;
          })}
        </div>
        <p className="Issues-pagination">
          <span
            className={this.state.currentPage === 1 ? 'disabled' : ''}
            onClick={async () => {await this.getIssuesList(this.state.currentPage - 1);} }
          >Previous </span>
          —
          <span
            className={this.state.currentPage === this.state.maxPage ? 'disabled' : ''}
            onClick={async () => {await this.getIssuesList(this.state.currentPage + 1);} }
          > Next</span>
        </p>
      </div>
    );
  }
}

export default IssuesList;
