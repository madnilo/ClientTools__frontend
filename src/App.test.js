import React from 'react';
import { render } from 'react-testing-library'
import App from './App'

it('renders without crashing', () => {
  const utils = render(<App />)

  const element = utils.getAllByText('ClientTools')

  expect(element).toBeDefined()
});
