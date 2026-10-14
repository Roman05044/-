import { describe, it, expect } from 'vitest';
import { isLeapYear } from '../src/leapYear';

describe('Функція isLeapYear', () => {
  // Тести на коректні дані (звичайні роки)
  it('повертає true для року, що ділиться на 4, але не на 100 (звичайний високосний)', () => {
    const year = 2024; // Arrange
    const result = isLeapYear(year); // Act
    expect(result).toBe(true); // Assert
  });

  it('повертає false для звичайного року, що не ділиться на 4', () => {
    const year = 2023;
    const result = isLeapYear(year);
    expect(result).toBe(false);
  });

  // Тести на межові значення (роки початку століть та нуль)
  it('повертає true для року, що ділиться на 400 (виняток для століть)', () => {
    const year = 2000;
    const result = isLeapYear(year);
    expect(result).toBe(true);
  });

  it('повертає false для року, що ділиться на 100, але не на 400', () => {
    const year = 1900;
    const result = isLeapYear(year);
    expect(result).toBe(false);
  });

  it('повертає true для нульового року (математичне межове значення)', () => {
    const year = 0;
    const result = isLeapYear(year);
    expect(result).toBe(true);
  });

  // Тести на некоректні дані з винятком (Exceptions)
  it('викидає виняток, якщо передано від’ємне значення', () => {
    const year = -5;
    expect(() => isLeapYear(year)).toThrow('Рік не може бути від’ємним');
  });

  it('викидає виняток, якщо передано неціле значення (дріб)', () => {
    const year = 2024.5;
    expect(() => isLeapYear(year)).toThrow('Рік має бути цілим числом');
  });
});