import { CURRENCY } from "../constants/currency";

export const EXCHANGE_RATES = {
  BYN: 2.4,
  EUR: 0.93,
};

export const usdTo = (currency, valueUsd) => {
  switch (currency) {
    case CURRENCY.BYN:
      return valueUsd * EXCHANGE_RATES.BYN;
    case CURRENCY.EUR:
      return valueUsd * EXCHANGE_RATES.EUR;
    default:
      throw Error(`Unsupported currency. ${currency}`);
  }
};
