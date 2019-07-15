import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useGithub = query => {
  const [url, setUrl] = useState(query);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repository, setRepository] = useState([]);
  console.log(repository);

  const findRepos = useCallback(async () => {
    // console.log(`Sending http request to ${url}`);
    setLoading(true);
    try {
      const response = await axios(url);
      setRepository(response.data.items);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    // console.log('Component did mount');
    let cancel = false;

    if (!cancel) {
      // console.log('Component did update');
      findRepos();
    }

    return () => {
      // console.log('Component will unmount');
      cancel = true;
    };
  }, [findRepos]);

  return [repository, setUrl, error, loading];
};

export default useGithub;
