import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useGithub = () => {
  const [url, setUrl] = useState('https://api.github.com/search/repositories?q=language:javascript&sort=star&order=desc');
  const [repository, setRepository] = useState([]);

  // const initialRepo = () => {
  //   axios
  //     .get(`https://api.github.com/search/repositories?q=language:${query}&sort=star&order=desc`)
  //     .then(({ data }) => {
  //       setRepository(data.items);
  //       setTitle(`Top ${query} Repository`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const findRepos = useCallback(
    async () => {
      const response = await axios(url);
      setRepository(response.data.items);
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
