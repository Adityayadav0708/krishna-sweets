import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { products } from '@/data/products';
import type { Product, ProductSize } from '@/types/product';
import { CartContext, type CartLine } from './CartContext';

const STORAGE_KEY = 'krishna-sweets-cart';
const defaultSize: ProductSize = '500g';

const isCartLine = (value: unknown): value is CartLine => {
  if (!value || typeof value !== 'object') return false;

  const line = value as Partial<CartLine>;
  return (
    typeof line.productId === 'string' &&
    (line.size === '250g' || line.size === '500g' || line.size === '1kg') &&
    typeof line.quantity === 'number' &&
    Number.isFinite(line.quantity) &&
    line.quantity > 0
  );
};

const readStoredCart = (): CartLine[] => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.filter(isCartLine) : [];
  } catch {
    return [];
  }
};

const getUnitPrice = (product: Product, size: ProductSize) =>
  product.sizes.find((option) => option.label === size)?.price ?? product.price;

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartLine[]>(readStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const enrichedItems = useMemo(() => (
    items
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        if (!product) return null;

        const unitPrice = getUnitPrice(product, item.size);
        return {
          ...item,
          product,
          unitPrice,
          lineTotal: unitPrice * item.quantity,
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
  ), [items]);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = enrichedItems.reduce((sum, item) => sum + item.lineTotal, 0);

  const addItem = useCallback((product: Product, size: ProductSize = defaultSize, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id && item.size === size);
      if (!existing) {
        return [...current, { productId: product.id, size, quantity }];
      }

      return current.map((item) => (
        item.productId === product.id && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    });
  }, []);

  const removeItem = useCallback((productId: string, size: ProductSize) => {
    setItems((current) => current.filter((item) => item.productId !== productId || item.size !== size));
  }, []);

  const updateQuantity = useCallback((productId: string, size: ProductSize, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.productId !== productId || item.size !== size));
      return;
    }

    setItems((current) => current.map((item) => (
      item.productId === productId && item.size === size
        ? { ...item, quantity }
        : item
    )));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const value = useMemo(() => ({
    items,
    enrichedItems,
    totalCount,
    total,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  }), [
    addItem,
    clearCart,
    closeCart,
    enrichedItems,
    isCartOpen,
    items,
    openCart,
    removeItem,
    total,
    totalCount,
    updateQuantity,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
