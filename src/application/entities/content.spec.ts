import { Content } from './content';

describe('Conteúdo da notificação', () => {
  test('Deve ser possível de se criar um novo conteúdo de notificação', () => {
    const content = new Content('Novo conteúdo criado');

    expect(content).toBeTruthy();
  });

  test('Não deve ser possível de se criar uma notificação com conteúdo de 5 caracteres', () => {
    expect(() => new Content('123')).toThrow();
  });

  test('Não deve ser possível de se criar uma notificação com conteúdo de 241 caracteres', () => {
    expect(() => new Content('z'.repeat(241))).toThrow();
  });
});
