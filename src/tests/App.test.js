import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


jest.mock('../components/TodoList', () => () => <div>Mocked TodoList</div>);

test('renders the App component correctly', () => {
  render(<App />);

  
  expect(screen.getByText('Todo App')).toBeInTheDocument();

  
  expect(screen.getByText('Mocked TodoList')).toBeInTheDocument();
});