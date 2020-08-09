import React from 'react';
import IssuesList from './IssuesList';
import TestRenderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<IssuesList></IssuesList>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
