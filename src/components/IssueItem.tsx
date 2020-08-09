import React from 'react';
import './IssueItem.scss';

type IssueItemProp = {
  title: string,
  author: string,
  createdAt: string,
  url: string,
  number: Number,
  labels: Array<any>
};

class IssueItem extends React.Component<IssueItemProp> {
  constructor(props: IssueItemProp) {
    super(props);
    this.state = {};
  }

  formatDate (date: string) {
    let d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    return [day, month, year].join('.')
  }

  render() {
    return (
      <div className="Issue-item-wrapper">
        <h3 className="Issue-item-header">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer" className="Issue-item-title">{this.props.title}</a>
          {this.props.labels.map(function (label) {
            return <a
              href={label.url}
              className="Issue-item-label"
              key={label.id}
              style={{ backgroundColor: '#' + label.color }}
            >{label.name}</a>;
          })}
        </h3>

        <p className="Issue-item-subtitle">
          <a href={"https://github.com/facebook/create-react-app/issues/" + this.props.number} target="_blank" rel="noopener noreferrer">#{this.props.number}</a> opened on {this.formatDate(this.props.createdAt)} by <a href={"https://github.com/" + this.props.author} target="_blank" rel="noopener noreferrer">{this.props.author}</a>
        </p>
      </div>
    );
  }
}

export default IssueItem;
