import { render, screen } from "@testing-library/react";
import Transacoes from '.';
import estilos from '../Extrato.module.css';

test('Deve renderizar o mesmo componente com props atualizadas', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100
  };

  // rerender permite renderizar novamente o componente com outros dados
  const { rerender } = render(<Transacoes estilos={estilos} transacao={transacao} />);

  const tipoTransacao = screen.getByTestId('tipoTransacao'); // seleciona data-attributes definidos no componente `data-testid`
  const valorTransacao = screen.getByTestId('valorTransacao');
  expect(tipoTransacao).toHaveTextContent('Depósito');
  expect(valorTransacao).toHaveTextContent('R$ 100');

  const novaTransacao = {
    transacao: 'Transferência',
    valor: 50
  };

  // rerenderizando o componente
  rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);

  const novoTipoTransacao = screen.getByTestId('tipoTransacao'); // seleciona data-attributes definidos no componente `data-testid`
  const novoValorTransacao = screen.getByTestId('valorTransacao');
  expect(novoTipoTransacao).toHaveTextContent('Transferência');
  expect(novoValorTransacao).toHaveTextContent('R$ 50');
});