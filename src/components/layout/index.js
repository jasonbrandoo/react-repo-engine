import React from 'react';
import useGithub from '../../hooks/useGithub';
import Searchbar from './Searchbar';
import Repos from '../repository/Repos';

const Content = () => {
  const { repository, setUrl } = useGithub();
  return (
    <React.Fragment>
      <Searchbar url={setUrl} />
      <Repos data={repository} />
    </React.Fragment>
  );
};

export default Content;
