export const spliceOverview = (value) => {
  if (value.length > 0) {
    return value.slice(0, 100);
  } else return;
};
