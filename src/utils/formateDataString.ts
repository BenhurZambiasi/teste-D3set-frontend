export const formateDate = (date: string): string => {
  const dt = new Date(date);
  const dateFormatted = dt.toLocaleDateString("pt-BR");
  return dateFormatted;
};
