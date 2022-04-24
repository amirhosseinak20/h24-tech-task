import { INTL_NUMBER_FORMAT_VALUES } from "constants/number";

const formatter = new Intl.NumberFormat(INTL_NUMBER_FORMAT_VALUES.country, {
  style: INTL_NUMBER_FORMAT_VALUES.style,
  currency: INTL_NUMBER_FORMAT_VALUES.currency,
});

export const priceFormatter = formatter.format;

// lodash
export { default as uniqueId } from "lodash/uniqueId";
export { default as debounce } from "lodash/debounce";
export { default as isEmpty } from "lodash/isEmpty";
export { default as isObject } from "lodash/isObject";
export { default as isEqual } from "lodash/isEqual";
export { default as isNil } from "lodash/isNil";
