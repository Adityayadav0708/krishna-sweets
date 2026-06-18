import { Route, Routes } from 'react-router-dom';
import { CartProvider } from '@/cart/CartProvider';
import { CartDrawer } from '@/components/cart/CartDrawer/CartDrawer';
import { Footer } from '@/components/layout/Footer/Footer';
import { ScrollToTop } from '@/components/routing/ScrollToTop/ScrollToTop';
import { HomePage } from '@/pages/HomePage/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { AboutPage } from '@/pages/AboutPage/AboutPage';
import { ContactPage } from '@/pages/ContactPage/ContactPage';
import { FaqPage } from '@/pages/FaqPage/FaqPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage/ProductDetailPage';
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage';
import { ReviewsPage } from '@/pages/ReviewsPage/ReviewsPage';
export function App() {
    return (<CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:slug" element={<ProductDetailPage />}/>
        <Route path="/reviews" element={<ReviewsPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/faq" element={<FaqPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      <Footer />
      <CartDrawer />
    </CartProvider>);
}
