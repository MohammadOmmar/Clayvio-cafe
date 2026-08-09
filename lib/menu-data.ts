export interface MenuPrice {
  variantName: string | null;
  price: number;
}

export interface MenuItem {
  name: string;
  prices: MenuPrice[];
}

export interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
  columns?: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Large Chai (Kulhad)',
    items: [
      { name: 'Classic Tea', prices: [{ variantName: null, price: 50 }] },
      { name: 'Adrak Tea', prices: [{ variantName: null, price: 55 }] },
      { name: 'Rose Tea', prices: [{ variantName: null, price: 60 }] },
      { name: 'Kesar Chai', prices: [{ variantName: null, price: 60 }] },
      { name: 'Vanilla Tea', prices: [{ variantName: null, price: 60 }] },
      { name: 'Elaichi Tea', prices: [{ variantName: null, price: 60 }] },
      { name: 'Chocolate Tea', prices: [{ variantName: null, price: 60 }] },
    ],
  },
  {
    name: 'Chai',
    note: 'Kulhad Cup | Simple Cup',
    columns: ['Item', 'Kulhad Cup', 'Simple Cup'],
    items: [
      {
        name: 'Classic Tea',
        prices: [
          { variantName: 'Kulhad Cup', price: 30 },
          { variantName: 'Simple Cup', price: 25 },
        ],
      },
      {
        name: 'Adrak Tea',
        prices: [
          { variantName: 'Kulhad Cup', price: 35 },
          { variantName: 'Simple Cup', price: 30 },
        ],
      },
      {
        name: 'Rose Tea',
        prices: [
          { variantName: 'Kulhad Cup', price: 40 },
          { variantName: 'Simple Cup', price: 35 },
        ],
      },
      {
        name: 'Kesar Chai',
        prices: [
          { variantName: 'Kulhad Cup', price: 40 },
          { variantName: 'Simple Cup', price: 35 },
        ],
      },
      {
        name: 'Vanilla Tea',
        prices: [
          { variantName: 'Kulhad Cup', price: 40 },
          { variantName: 'Simple Cup', price: 35 },
        ],
      },
      {
        name: 'Elaichi Tea',
        prices: [
          { variantName: 'Kulhad Cup', price: 40 },
          { variantName: 'Simple Cup', price: 35 },
        ],
      },
      {
        name: 'Chocolate Tea',
        prices: [
          { variantName: 'Kulhad Cup', price: 40 },
          { variantName: 'Simple Cup', price: 35 },
        ],
      },
    ],
  },
  {
    name: 'Coffee',
    items: [
      { name: 'Classic Foamy Coffee', prices: [{ variantName: null, price: 59 }] },
      { name: 'Hot Coffee', prices: [{ variantName: null, price: 49 }] },
      { name: 'Cold Coffee', prices: [{ variantName: null, price: 89 }] },
      { name: 'Cold Coffee with Ice Cream', prices: [{ variantName: null, price: 99 }] },
      { name: 'Black Coffee', prices: [{ variantName: null, price: 40 }] },
    ],
  },
  {
    name: 'Sandwiches',
    items: [
      { name: 'Veggie Mayo Sandwich', prices: [{ variantName: null, price: 59 }] },
      { name: 'Corn Masala Sandwich', prices: [{ variantName: null, price: 69 }] },
      { name: 'Corn Cheese Sandwich', prices: [{ variantName: null, price: 79 }] },
      { name: 'Chicken Grill Sandwich', prices: [{ variantName: null, price: 99 }] },
      { name: 'Clayvio Special Sandwich', prices: [{ variantName: null, price: 119 }] },
    ],
  },
  {
    name: 'Pizza',
    items: [
      { name: 'Margherita', prices: [{ variantName: null, price: 129 }] },
      { name: 'Veg Pizza', prices: [{ variantName: null, price: 149 }] },
      { name: 'Corn Pizza', prices: [{ variantName: null, price: 139 }] },
      { name: 'Chicken Blast', prices: [{ variantName: null, price: 169 }] },
      { name: 'Clayvio Special Pizza', prices: [{ variantName: null, price: 189 }] },
    ],
  },
  {
    name: 'Bites',
    items: [
      { name: 'Bread Butter Toast', prices: [{ variantName: null, price: 40 }] },
      { name: 'Bun Muska', prices: [{ variantName: null, price: 40 }] },
      { name: 'Maggie', prices: [{ variantName: null, price: 40 }] },
      { name: 'Veg Masala Maggie', prices: [{ variantName: null, price: 70 }] },
      { name: 'Corn Maggie', prices: [{ variantName: null, price: 50 }] },
      { name: 'Corn Cheese Maggie', prices: [{ variantName: null, price: 60 }] },
      { name: 'Chicken Patties', prices: [{ variantName: null, price: 50 }] },
      { name: 'Samosa', prices: [{ variantName: null, price: 20 }] },
    ],
  },
  {
    name: 'Mojitos',
    items: [
      { name: 'Virgin Mojito', prices: [{ variantName: null, price: 99 }] },
      { name: 'Green Apple Mojito', prices: [{ variantName: null, price: 99 }] },
      { name: 'Watermelon Mojito', prices: [{ variantName: null, price: 99 }] },
      { name: 'Ice Blue Mojito', prices: [{ variantName: null, price: 99 }] },
    ],
  },
  {
    name: 'Shakes',
    note: 'Without Ice Cream | With Ice Cream',
    columns: ['Item', 'Without Ice Cream', 'With Ice Cream'],
    items: [
      {
        name: 'Mango Shake',
        prices: [
          { variantName: 'Without Ice Cream', price: 89 },
          { variantName: 'With Ice Cream', price: 99 },
        ],
      },
      {
        name: 'Strawberry Shake',
        prices: [
          { variantName: 'Without Ice Cream', price: 89 },
          { variantName: 'With Ice Cream', price: 99 },
        ],
      },
      {
        name: 'Banana Shake',
        prices: [
          { variantName: 'Without Ice Cream', price: 89 },
          { variantName: 'With Ice Cream', price: 99 },
        ],
      },
      {
        name: 'Oreo Shake',
        prices: [
          { variantName: 'Without Ice Cream', price: 89 },
          { variantName: 'With Ice Cream', price: 99 },
        ],
      },
      {
        name: 'Chocolate Shake',
        prices: [
          { variantName: 'Without Ice Cream', price: 89 },
          { variantName: 'With Ice Cream', price: 99 },
        ],
      },
      {
        name: 'Black Currant Shake',
        prices: [
          { variantName: 'Without Ice Cream', price: 89 },
          { variantName: 'With Ice Cream', price: 99 },
        ],
      },
    ],
  },
];