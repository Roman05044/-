import { describe, it, expect } from 'vitest';
import { calcLoyaltyDiscount } from '../src/loyalty';

describe('calcLoyaltyDiscount', () => {
  it.each([-1, -0.5])('відхиляє від’ємний стаж %s', (years) => {
    expect(() => calcLoyaltyDiscount(years)).toThrow('INVALID_YEARS');
  });
});