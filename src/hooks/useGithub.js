import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useGithub = () => {
  const [url, setUrl] = useState('https://api.github.com/search/repositories?q=language:javascript&sort=star&order=desc');
  const [repository, setRepository] = useState([]);

  const findRepos = useCallback(
    async () => {
      try {
        const response = await axios(url);
        setRepository(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }, [url],
  );

  useEffect(() => {
    console.log('Component did mount');
    let cancel = false;

    if (!cancel) {
      console.log('Component did update');
      findRepos();
    }

    return () => {
      console.log('Component will unmount');
      cancel = true;
    };
  }, [findRepos]);

  return {
    repository,
    setUrl,
  };
};

export default useGithub;
