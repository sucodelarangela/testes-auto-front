import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

// usamos a palavra chave 'test' e definimos uma descrição para o teste, seguido de uma callback function
test('Deve renderizar o nome do usuário logado', () => {
  // renderizamos o cabeçalho
  render(<Cabecalho />);
  // consultamos o elemento Cabecalho para pegar um elemento HTML e ver o que está sendo renderizado ali
  // essa consulta (query) é feita através do screen.getByText
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});

// os testes rodam no JestDOM