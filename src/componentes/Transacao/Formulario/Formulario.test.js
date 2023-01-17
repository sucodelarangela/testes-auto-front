import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // vem por padrão com CRA
import Formulario from '.';

// use describe para simplificar a escrita dos testes agrupando testes similares
describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('com type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  // O userEvent é usado para testar interações do usuário na tela
  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    // usuário digita o valor '50' no input
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de onsubmit ao clicar em realizar transação', () => {
  // simulando a função realizarTransacao (dublando o comportamento)
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1); // deve ser chamado pelo menos uma vez
});

test('Deve ser possível selecionar uma opção de transação', () => {
  render(<Formulario />);
  const seletor = screen.getByRole('combobox'); // select
  const option1 = screen.getByRole('option', { name: 'Depósito' });
  const option2 = screen.getByRole('option', { name: 'Selecione um tipo de transação' });
  userEvent.selectOptions(seletor, ['Depósito']);
  expect(option1.selected).toBe(true);
  expect(option2.selected).toBe(false);
});