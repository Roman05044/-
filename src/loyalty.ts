export interface LoyaltyOptions {
  isBirthday?: boolean;
}

const RATES = {
  TIER_1: 0,
  TIER_2: 5,
  TIER_3: 10,
  TIER_4: 15,
};

export function calcLoyaltyDiscount(years: number, options: LoyaltyOptions = {}): number {
  if (years < 0) throw new Error('INVALID_YEARS');
  
  let rate = RATES.TIER_4;
  if (years < 1) rate = RATES.TIER_1;
  else if (years < 3) rate = RATES.TIER_2;
  else if (years < 5) rate = RATES.TIER_3;

  if (options.isBirthday) {
    rate *= 2;
  }
  
  return rate;
}