import { createContext } from 'react';
import type { Product, ProductSize } from '@/types/product';

export interface CartLine {
  productId: string;
  size: ProductSize;
  quantity: number;
}

export interface EnrichedCartLine extends CartLine {
  product: Product;
  unitPrice: number;
  lineTotal: number;
}

export interface CartContextValue {
  items: CartLine[];
  enrichedItems: EnrichedCartLine[];
  totalCount: number;
  total: number;
  isCartOpen: boolean;
  addItem: (product: Product, size?: ProductSize, quantity?: number) => void;
  removeItem: (productId: string, size: ProductSize) => void;
  updateQuantity: (productId: string, size: ProductSize, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
