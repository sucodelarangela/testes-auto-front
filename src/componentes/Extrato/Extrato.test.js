import { render, screen } from "@testing-library/react";
import Extrato from ".";

test('Deve renderizar uma lista de transações', () => {
  // criando a transação que será passada como prop no teste
  const transacoes = [{
    transacao: 'Depósito',
    valor: 100,
  }];
  // passando props na renderização
  render(<Extrato transacoes={transacoes} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});