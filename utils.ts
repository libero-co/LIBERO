export const formatMoney = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const calculatePercentage = (current: number, goal: number): number => {
  if (goal === 0) return 0;
  const percentage = (current / goal) * 100;
  return Math.min(percentage, 100); // Cap at 100 for bar width, though logic might use >100 for other things
};