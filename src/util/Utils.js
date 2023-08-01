export const spliceTitle = (value) => {
  if (value.length > 20) {
    return value.slice(0, 25) + "...";
  } else return value;
};

export const spliceOverview = (value) => {
  if (value.length > 0) {
    return value.slice(0, 100) + "...";
  } else return;
};
