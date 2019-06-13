import React from 'react';
import Page from '../components/Page';
import RepoDescription from '../components/Repository/RepoDescription';

const Description = ({ match }) => (
  <Page>
    <RepoDescription url={match.url} />
  </Page>
);

export default Description;
