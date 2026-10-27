export interface LoyaltyOptions {
  isBirthday?: boolean;
}

const RATES = {
  TIER_1: 0,
  TIER_2: 5,
  TIER_3: 10,
  TIER_4: 15,
};

function getBaseRate(years: number): number {
  if (years < 1) return RATES.TIER_1;
  if (years < 3) return RATES.TIER_2;
  if (years < 5) return RATES.TIER_3;
  return RATES.TIER_4;
}

export function calcLoyaltyDiscount(years: number, options: LoyaltyOptions = {}): number {
  if (years < 0) throw new Error('INVALID_YEARS');
  
  let rate = getBaseRate(years);
  
  if (options.isBirthday) {
    rate *= 2;
  }
  
  return rate;
}