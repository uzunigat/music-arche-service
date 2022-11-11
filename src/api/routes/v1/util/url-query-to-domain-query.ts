import { ParsedUrlQuery } from 'querystring';

type TransformedValue = number | string | string[];
type ParsedQuery = Record<string, TransformedValue>;

const parseQuery = (query: ParsedUrlQuery): ParsedQuery => {
  const entries = Object.entries(query ?? {});

  return entries.reduce<ParsedQuery>((acc, entry) => {
    const [key, value] = entry;
    let transformedValue: TransformedValue;

    if (Array.isArray(value)) {
      transformedValue = value as string[];
    } else if (['page', 'pageSize'].includes(key)) {
      transformedValue = parseInt(value as string, 10);
    } else if (['sort', 'sortBy'].includes(key)) {
      transformedValue = value as string;
    } else {
      transformedValue = (value as string).split(',');
    }

    return { ...acc, [key]: transformedValue };
  }, {});
};

const urlQueryToApiQuery = <DomainQuery>(
  urlQuery: ParsedUrlQuery
): DomainQuery => {
  return parseQuery(urlQuery) as unknown as DomainQuery;
};

export { urlQueryToApiQuery };
