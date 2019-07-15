import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import Searchbar from '../Searchbar';

const fetchData = () => {
  return axios
    .get(
      'https://api.github.com/search/repositories?q=language:javascript&sort=star&order=desc',
    )
    .then(res => res.data);
};

jest.mock('axios');

test('should render label', () => {
  const { getByLabelText } = render(<Searchbar />);
  expect(getByLabelText('Search')).toBeInTheDocument();
});

test('should handle input', () => {
  const { getByLabelText } = render(<Searchbar />);
  fireEvent.change(getByLabelText('Search'), { target: { value: 'Repo' } });
  expect(getByLabelText('Search')).toHaveValue('Repo');
});

test('should handle submit', async () => {
  const fakeResponse = { items: [] };
  axios.get.mockResolvedValue(fakeResponse);
  const { getByText } = render(<Searchbar />);
  fireEvent.click(getByText('Find'));
  const data = await fetchData();
  console.log(data);
  expect(data).toEqual(fakeResponse);
});
