export interface LoyaltyOptions {
  isBirthday?: boolean;
}

export function calcLoyaltyDiscount(years: number, options: LoyaltyOptions = {}): number {
  if (years < 0) throw new Error('INVALID_YEARS');
  if (years < 1) return 0;
  return 5;
}