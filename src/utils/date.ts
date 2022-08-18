export const getFormattedDate = (date: Date) => {
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;

  return `${date.getFullYear()}-${month}-${date.getDate()}`;
};

export const getToday = (): string => {
  const date = new Date();
  return getFormattedDate(date);
};
