import moment from "moment";
export const formateDate = (date: string): string => {
  const dateFormatted = moment(date.split("T")[0]).format("DD/MM/YYYY");
  return dateFormatted;
};
