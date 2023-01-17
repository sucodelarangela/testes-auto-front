import { render, screen } from '@testing-library/react';
import Menu from '.';

test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial'); // retorna o texto
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole('link'); // link => tag <a>
  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar o link para extrato', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText('extrato'); // retorna 1 ou null
  expect(linkExtrato).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />);
  const linksComClasse = screen.getAllByRole('link');
  linksComClasse.forEach(link => expect(link).toHaveClass('link'));
  // tirando um snapshot do código
  expect(linksComClasse).toMatchSnapshot();
});

// também há o método findBy e findAllBy, que são métodos assíncronos

/*
Métodos assíncronos são utilizados para lidar com códigos assíncronos. Por exemplo, quando realizamos uma requisição a uma API, devemos esperar que ela resolva e nos devolva uma resposta. Os dados da resposta dessa requisição não chegam na mesma hora e por isso não são renderizados imediatamente. Por isso existem os métodos assíncronos que esperam que as promisses sejam resolvidas e aí sim fazem a consulta.

Os métodos findBy e findAllBy funcionam dessa maneira. Eles são uma mistura de outros dois métodos do testing library que são o getBy e o waitFor. Este último é exatamente o método que espera resolver todas as promisses para assim permitir a consulta com o getBy.
*/