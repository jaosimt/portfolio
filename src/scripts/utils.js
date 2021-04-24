export const Capitalize = str => str.toLowerCase().trim().replace(/(^\w| \w)/igm, x => x.toUpperCase());
export const SnakeCase = (str, delimeter = '-') => str.toLowerCase().trim().replace(/ /gm, delimeter);
