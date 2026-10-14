/**
 * Перевіряє, чи є рік високосним.
 * @param year Рік для перевірки
 * @returns true, якщо рік високосний, інакше false
 * @throws Error, якщо рік є від'ємним або нецілим числом
 */
export function isLeapYear(year: number): boolean {
  if (year < 0) {
    throw new Error('Рік не може бути від’ємним');
  }
  
  if (!Number.isInteger(year)) {
    throw new Error('Рік має бути цілим числом');
  }

  if (year % 400 === 0) {
    return true;
  }
  
  if (year % 100 === 0) {
    return false;
  }
  
  return year % 4 === 0;
}