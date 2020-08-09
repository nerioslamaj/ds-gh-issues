import React from 'react';
import IssueItem from './IssueItem';
import TestRenderer from 'react-test-renderer';

it('renders correctly', () => {

  const issue = {
    number: 1,
    title: 'Item Title',
    created_at: '2020-08-09T21:38:06Z',
    labels: ['label 1', 'label 2'],
    html_url: 'https://example.url',
    user: {
      login: 'NeriosLamaj'
    }
  }

  const tree = TestRenderer
    .create(<IssueItem 
      key={issue.number}
      title={issue.title}
      author={issue.user.login}
      number={issue.number}
      createdAt={issue.created_at}
      labels={issue.labels}
      url={issue.html_url}></IssueItem>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
