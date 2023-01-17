import IMAGES from "./carImages";
import uuidv4 from "../utils/udidv4";

const TRANSMISSION_TYPE = {
  AUTOMATIC: "automatic",
  MECHANICAL: "mechanical",
};

const ENGINE_TYPE = {
  GAS: "gas",
  DIESEL: "diesel",
};

const CURRENCY = {
  USD: "$",
  EUR: "€",
};

const cars = [
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M5",
    generation: "F90",
    year: 2020,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 4.4,
    },
    mileage: 145000,
    image: IMAGES.m5,
    price: {
      value: 200000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M4",
    generation: "G82",
    year: 2022,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 3.0,
    },
    mileage: 30000,
    image: IMAGES.m4,
    price: {
      value: 220000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M3",
    generation: "G80",
    year: 2019,
    transmission: TRANSMISSION_TYPE.MECHANICAL,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 3.0,
    },
    mileage: 45000,
    image: IMAGES.m3,
    price: {
      value: 150000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M6",
    generation: "F13",
    year: 2020,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 4.4,
    },
    mileage: 84410,
    image: IMAGES.m6,
    price: {
      value: 140000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "X5M",
    generation: "F15",
    year: 2018,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 4.4,
    },
    mileage: 8000,
    image: IMAGES.x5m,
    price: {
      value: 220000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M2",
    generation: "G87",
    year: 2022,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 3.0,
    },
    mileage: 21000,
    image: IMAGES.m2,
    price: {
      value: 120000,
      currency: CURRENCY.USD,
    },
  },
];

export default cars;
