import { describe, it, expect } from 'vitest';
import { calcLoyaltyDiscount } from '../src/loyalty';

describe('calcLoyaltyDiscount', () => {
  it.each([-1, -0.5])('відхиляє від’ємний стаж %s', (years) => {
    expect(() => calcLoyaltyDiscount(years)).toThrow('INVALID_YEARS');
  });

  it.each([0, 0.99])('стаж до 1 року дає 0%: %s років', (years) => {
    expect(calcLoyaltyDiscount(years)).toBe(0);
  });

  it.each([1, 2.99])('стаж від 1 до 3 років дає 5%: %s років', (years) => {
    expect(calcLoyaltyDiscount(years)).toBe(5);
  });

  it.each([3, 4.99])('стаж від 3 до 5 років дає 10%: %s років', (years) => {
    expect(calcLoyaltyDiscount(years)).toBe(10);
  });

  it.each([5, 10.5])('стаж понад 5 років дає 15%: %s років', (years) => {
    expect(calcLoyaltyDiscount(years)).toBe(15);
  });

  it.each([
    { years: 0.5, expected: 0 },
    { years: 2, expected: 10 },
    { years: 4, expected: 20 },
    { years: 6, expected: 30 },
  ])('в день народження знижка подвоюється: стаж $years -> $expected%', ({ years, expected }) => {
    expect(calcLoyaltyDiscount(years, { isBirthday: true })).toBe(expected);
  });
});