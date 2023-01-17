import { calculaNovoSaldo } from './';

describe('Quando eu realizo uma transação', () => {
  test('que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50
    };

    const novosaldo = calculaNovoSaldo(transacao, 100);
    expect(novosaldo).toBe(150);
  });

  test('que é uma transferência, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50
    };

    const novosaldo = calculaNovoSaldo(transacao, 100);
    expect(novosaldo).toBe(50);
  });
});

// mockando/simulando uma função inexistente com jest.fn()
test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  const calculaRendimento = jest.fn(saldo => saldo + saldo * 0.005);
  const saldo = 100;
  const novoSaldo = calculaRendimento(saldo);
  expect(novoSaldo).toBe(100.5); // testa se o resultado bate 
  expect(calculaRendimento).toBeCalled(); // testa se a função foi chamada
  expect(calculaRendimento).toBeCalledWith(saldo); // testa se foi passado parâmetro para a função
});
