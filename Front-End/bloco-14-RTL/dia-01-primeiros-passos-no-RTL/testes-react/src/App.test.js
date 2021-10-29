import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se existe um campo de email', () => {
 render(<App />);
 const inputEmail = screen.getByLabelText('Email');
 expect(inputEmail).toBeInTheDocument();
 expect(inputEmail).toHaveProperty('type', 'email');
} )

test('Verifica se existem dois buttons', () => {
  render(<App />);
  const btns = screen.getAllByRole('button');
  expect(btns).toHaveLength(2);
})

test('Verificando se existe um button de enviar', () => {
  render(<App />)
  const buttonSend = screen.getByTestId('id-send');
  expect(buttonSend).toBeInTheDocument();
  expect(buttonSend).toHaveProperty('type', 'button');
  expect(buttonSend).toHaveValue('Enviar');
})

test('verifica se o botão e o campo email estão funcionando.', () => {
  render(<App />);
  const email = 'user@user.com';
  const buttonSend = screen.getByTestId('id-send');
  const textEmail = screen.getByTestId('id-email-user')
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, email);
  userEvent.click(buttonSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${email}`);
  

})