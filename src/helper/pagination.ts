import { ParsedQs } from "qs";

const pageInit = 1;

export const pagination = (page: ParsedQs[string], limit = 20) => {
  const pageNumber = Number(page);

  const offset = limit * ((pageNumber > 0 ? pageNumber : pageInit) - 1);

  return {
    offset,
    limit,
  };
};
