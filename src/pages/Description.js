import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import RepoDescription from '../components/repository/RepoDescription';

const Description = ({ match }) => (
  <Page>
    <RepoDescription url={match.url} />
  </Page>
);

Description.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Description;
