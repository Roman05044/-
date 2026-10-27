export interface LoyaltyOptions {
  isBirthday?: boolean;
}

export function calcLoyaltyDiscount(years: number, options: LoyaltyOptions = {}): number {
  throw new Error('INVALID_YEARS');
}