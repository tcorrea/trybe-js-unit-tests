const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    productDetails('Alcool gel', 'Máscara').map((item) => expect(typeof item).toBe('object'));    

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/
    const products = productDetails('Alcool gel', 'Máscara')
    expect(JSON.stringify(products[0]) !== JSON.stringify(products[1])).toBe(true);

    // Teste se os dois productIds terminam com 123.
    productDetails('Alcool gel', 'Máscara').map((item) => {
      expect(item.details.productId.endsWith('123')).toBe(true);
    });
    
  });
});
