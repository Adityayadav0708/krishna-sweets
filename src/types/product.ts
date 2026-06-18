export type ProductSize = '250g' | '500g' | '1kg';

export interface ProductSizeOption {
  label: ProductSize;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Signature' | 'Bengali' | 'Ladoo' | 'Festive';
  shortDescription: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  badge?: string;
  dietary: Array<'Vegetarian' | 'Gluten-conscious'>;
  ingredients: string[];
  shelfLife: string;
  storage: string;
  sizes: ProductSizeOption[];
  rating: number;
  reviewCount: number;
  popular: boolean;
  festivalTags: string[];
}

export interface Category {
  name: string;
  count: number;
  image: string;
  description: string;
}
