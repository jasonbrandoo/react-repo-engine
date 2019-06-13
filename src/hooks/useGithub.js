import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useGithub = (query) => {
  const [url, setUrl] = useState(query);
  const [repository, setRepository] = useState([]);
  console.log(repository);

  const findRepos = useCallback(async () => {
    console.log(`Sending http request to ${url}`);
    try {
      const response = await axios(url);
      setRepository(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [url]);
  console.log(repository);
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

  return [repository, setUrl];
};

export default useGithub;
