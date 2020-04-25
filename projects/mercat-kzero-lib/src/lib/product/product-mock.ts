import { Product, ProductType } from './product.interface';

export const productsMock: Product[] = [
  {
    id: '1',
    name: 'Carrot',
    price: 1.69,
    measurementUnit: 'Kg',
    availableStock: 63,
    image: 'assets/img/zanahorias.png',
    productType: ProductType.TUBERCLES
  },
  {
    id: '2',
    name: 'Banana',
    price: 0.5,
    measurementUnit: 'Kg',
    availableStock: 44,
    image: 'assets/img/platano.png',
    productType: ProductType.FRUITS
  },
  {
    id: '3',
    name: 'Apple',
    price: 1.5,
    measurementUnit: 'Kg',
    availableStock: 24,
    image: 'assets/img/apple.png',
    productType: ProductType.FRUITS
  },
  {
    id: '4',
    name: 'Sweet Potato',
    price: 0.75,
    measurementUnit: 'Kg',
    availableStock: 56,
    image: 'assets/img/sweetpotato.png',
    productType: ProductType.TUBERCLES
  },
  {
    id: '5',
    name: 'Potato',
    price: 0.6,
    measurementUnit: 'Kg',
    availableStock: 35,
    image: 'assets/img/potato.png',
    productType: ProductType.TUBERCLES
  },
  {
    id: '6',
    name: 'Lettuce',
    price: 1.0,
    measurementUnit: 'Kg',
    availableStock: 45,
    image: 'assets/img/lettuce.png',
    productType: ProductType.VEGETABLES
  },
  {
    id: '7',
    name: 'Tangerine',
    price: 1.95,
    measurementUnit: 'Kg',
    availableStock: 12,
    image: 'assets/img/tangerine.png',
    productType: ProductType.FRUITS
  },
  {
    id: '8',
    name: 'Pear',
    price: 2.0,
    measurementUnit: 'Kg',
    availableStock: 50,
    image: 'assets/img/pear.png',
    productType: ProductType.FRUITS
  },
  {
    id: '9',
    name: 'Strawberry',
    price: 0.5,
    measurementUnit: 'Kg',
    availableStock: 20,
    image: 'assets/img/strawberry.png',
    productType: ProductType.FRUITS
  },
  {
    id: '10',
    name: 'Cantaloupe',
    price: 3.6,
    measurementUnit: 'Kg',
    availableStock: 39,
    image: 'assets/img/cantaloupe.png',
    productType: ProductType.FRUITS
  },
  {
    id: '11',
    name: 'Pepper',
    price: 1.8,
    measurementUnit: 'Kg',
    availableStock: 39,
    image: 'assets/img/pepper.png',
    productType: ProductType.VEGETABLES
  },
  {
    id: '12',
    name: 'Broccoli',
    price: 3.6,
    measurementUnit: 'Kg',
    availableStock: 39,
    image: 'assets/img/broccoli.png',
    productType: ProductType.VEGETABLES
  },
  {
    id: '13',
    name: 'Cauliflower',
    price: 3.6,
    measurementUnit: 'Kg',
    availableStock: 39,
    image: 'assets/img/cauliflower.png',
    productType: ProductType.VEGETABLES
  },

  {
    id: '14',
    name: 'Turnip',
    price: 3.6,
    measurementUnit: 'Kg',
    availableStock: 39,
    image: 'assets/img/turnip.png',
    productType: ProductType.TUBERCLES
  }
];
