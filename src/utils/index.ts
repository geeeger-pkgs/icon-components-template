export const addUnit = (val: string | number, unit = 'px') => {
  if (typeof val === 'number') return `${val}${unit}`;
  return val;
};
