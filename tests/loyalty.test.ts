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
});