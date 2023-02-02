import { usdTo } from "../../../utils/exchangeConverter";

export const stringifyDescription = ({ year, transmission, engine, mileage }) =>
  `${year}, ${transmission}, ${engine.volume} l, ${engine.type}, ${mileage} mi`;

export const buildSecondaryPrice = (priceValue, priceCurrency) =>
  `≈ ${usdTo(priceCurrency, priceValue)} ${priceCurrency}`;
