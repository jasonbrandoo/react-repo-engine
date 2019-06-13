import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
