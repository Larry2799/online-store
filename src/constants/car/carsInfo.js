import IMAGES from "./carImages";
import uuidv4 from "../../utils/udidv4";
import { TRANSMISSION_TYPE } from "./transmission";
import { CURRENCY } from "../currency";
import { ENGINE_TYPE } from "./engineType";

const { AUTOMATIC, MECHANICAL } = TRANSMISSION_TYPE;

const cars = [
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M5",
    generation: "F90",
    year: 2022,
    transmission: AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 4.4,
    },
    mileage: 15000,
    image: IMAGES.m5,
    price: {
      value: 200000,
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
      value: 165000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M3",
    generation: "G80",
    year: 2019,
    transmission: MECHANICAL,
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
    mileage: 57600,
    image: IMAGES.x5m,
    price: {
      value: 220000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M760",
    generation: "G12",
    year: 2018,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 6.0,
    },
    mileage: 133000,
    image: IMAGES.m760,
    price: {
      value: 90000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M340",
    generation: "G80",
    year: 2022,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 3.0,
    },
    mileage: 44560,
    image: IMAGES.m340,
    price: {
      value: 81000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "M240",
    generation: "G87",
    year: 2021,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 3.0,
    },
    mileage: 24420,
    image: IMAGES.m240,
    price: {
      value: 94600,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "Z4",
    generation: "E85",
    year: 2022,
    transmission: TRANSMISSION_TYPE.MECHANICAL,
    engine: {
      type: ENGINE_TYPE.GAS,
      volume: 3.0,
    },
    mileage: 12200,
    image: IMAGES.z4,
    price: {
      value: 74000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "530",
    generation: "G30",
    year: 2020,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.DIESEL,
      volume: 3.0,
    },
    mileage: 66030,
    image: IMAGES.g30,
    price: {
      value: 53000,
      currency: CURRENCY.USD,
    },
  },
  {
    id: uuidv4(),
    mark: "BMW",
    model: "I3",
    generation: "I01",
    year: 2019,
    transmission: TRANSMISSION_TYPE.AUTOMATIC,
    engine: {
      type: ENGINE_TYPE.HYBRID,
      volume: 1.0,
    },
    mileage: 49010,
    image: IMAGES.i3,
    price: {
      value: 44300,
      currency: CURRENCY.USD,
    },
  },
];

export default cars;
