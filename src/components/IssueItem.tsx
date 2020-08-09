import React from 'react';
import './IssueItem.scss';

type IssueItemProp = {
  title: String,
  author: String,
  createdAt: String,
  number: Number,
  labels: Array<any>
};

class IssueItem extends React.Component<IssueItemProp> {
  constructor(props: IssueItemProp) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Issue-item-wrapper">
        <h3 className="Issue-item-title">
          {this.props.title}
          {this.props.labels.map(function (label) {
            return <span
              className="Issue-item-label"
              key={label.id}
              style={{ backgroundColor: '#' + label.color }}
            >{label.name}</span>;
          })}
        </h3>

        <p className="Issue-item-subtitle">
          <a href={"https://github.com/facebook/create-react-app/issues/" + this.props.number} target="_blank" rel="noopener noreferrer">{this.props.number}</a> opened on {this.props.createdAt} by <a href={"https://github.com/" + this.props.author} target="_blank" rel="noopener noreferrer">{this.props.author}</a>
        </p>
      </div>
    );
  }
}

export default IssueItem;
