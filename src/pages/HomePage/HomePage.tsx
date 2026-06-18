import { ArrowRight, Award, Clock3, Gift, Leaf, Quote, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/cart/useCart';
import { Header } from '@/components/layout/Header/Header';
import { Container } from '@/components/layout/Container/Container';
import { ProductCard } from '@/components/product/ProductCard/ProductCard';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { ROUTES } from '@/app/routes';
import { categories, heroImage, products } from '@/data/products';
import type { Product } from '@/types/product';
import styles from './HomePage.module.css';

const promises = [
  { icon: Leaf, title: 'Pure ingredients', copy: 'No shortcuts, ever' },
  { icon: Clock3, title: 'Made fresh daily', copy: 'Small morning batches' },
  { icon: ShieldCheck, title: 'Trusted since 1946', copy: 'Three generations of craft' },
  { icon: Truck, title: 'Thoughtful delivery', copy: 'Packed to arrive beautifully' },
];

const reviewPreview = {
  name: 'Neha Agarwal',
  occasion: 'Festival gifting customer',
  text: 'The boxes felt premium, the sweets were fresh, and every guest asked where we ordered from.',
};

export function HomePage() {
  const { addItem, items, openCart, totalCount } = useCart();

  const addToBag = (product: Product) => {
    addItem(product);
  };

  return (
    <div id="top">
      <Header cartCount={totalCount} onCartOpen={openCart} />
      <main>
        <section className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}><Sparkles size={15} /> Chhibramau's heritage mithai house</span>
              <h1>Tradition you can <em>taste.</em></h1>
              <p>
                Handcrafted sweets, slow-made with pure ingredients and the generous spirit of
                Indian celebration—just as they have been since 1946.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryCta} to={ROUTES.products}>Shop sweets <ArrowRight size={17} /></Link>
                <a className={styles.textCta} href="#heritage">Discover our story</a>
              </div>
              <div className={styles.trustRow}>
                <span className={styles.avatars} aria-hidden="true"><i>KS</i><i>80</i><i>★</i></span>
                <p><strong>4.9 out of 5</strong><br />Loved by generations of families</p>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImageWrap}>
                <img src={heroImage} alt="An abundant tray of colourful traditional Indian mithai" />
              </div>
              <div className={styles.freshCard}><Leaf size={18} /><span><strong>Made this morning</strong>Small batches, every day</span></div>
              <div className={styles.heritageSeal}><small>ESTD.</small><strong>1946</strong><span>KANNAUJ</span></div>
              <div className={styles.heroCaption}><span>Featured collection</span><strong>House Classics</strong></div>
            </div>
          </Container>
        </section>

        <section className={styles.promiseBar} aria-label="Our promises">
          <Container className={styles.promiseGrid}>
            {promises.map(({ icon: Icon, title, copy }) => (
              <div className={styles.promise} key={title}>
                <Icon size={21} strokeWidth={1.6} />
                <span><strong>{title}</strong><small>{copy}</small></span>
              </div>
            ))}
          </Container>
        </section>

        <section className={styles.categoriesSection} id="categories">
          <Container>
            <div className={styles.sectionTop}>
              <SectionHeading eyebrow="Find your favourite" title="A sweet for every kind of joy." body="From time-honoured classics to celebration-ready boxes, each collection is made with its own rhythm and ritual." />
              <Link to={ROUTES.products}>View every collection <ArrowRight size={16} /></Link>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((category, index) => (
                <Link className={styles.categoryCard} to={ROUTES.products} key={category.name}>
                  <img src={category.image} alt="" loading="lazy" />
                  <div className={styles.categoryShade} />
                  <span className={styles.categoryIndex}>0{index + 1}</span>
                  <div>
                    <small>{category.count} varieties</small>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <i><ArrowRight size={17} /></i>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.bestSection} id="best-sellers">
          <Container>
            <SectionHeading eyebrow="Most loved" title="The ones families return for." body="Four signatures, perfected over decades and made fresh for today." align="center" />
            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard product={product} added={items.some((item) => item.productId === product.id)} onAdd={addToBag} key={product.id} />
              ))}
            </div>
            <div className={styles.bagNote} aria-live="polite">
              {totalCount > 0 && <><Gift size={17} /> {totalCount} {totalCount === 1 ? 'sweet' : 'sweets'} saved to your order bag. Checkout on WhatsApp when you are ready.</>}
            </div>
          </Container>
        </section>

        <section className={styles.reviewPreviewSection} aria-label="Customer review preview">
          <Container className={styles.reviewPreviewGrid}>
            <div className={styles.reviewPreviewCopy}>
              <SectionHeading
                eyebrow="Customer love"
                title="Trusted for gifting, rituals and everyday mithai."
                body="Families choose Krishna Sweets for careful packing, fresh batches and the familiar taste of celebration."
              />
              <Link className={styles.reviewLink} to={ROUTES.reviews}>Read more reviews <ArrowRight size={16} /></Link>
            </div>
            <article className={styles.reviewPreviewCard}>
              <Quote size={30} strokeWidth={1.35} />
              <div className={styles.previewStars} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star size={16} fill="currentColor" key={index} />
                ))}
              </div>
              <p>"{reviewPreview.text}"</p>
              <footer>
                <strong>{reviewPreview.name}</strong>
                <span>{reviewPreview.occasion}</span>
              </footer>
            </article>
          </Container>
        </section>

        <section className={styles.heritageSection} id="heritage">
          <Container className={styles.heritageGrid}>
            <div className={styles.heritageImage}>
              <img src={heroImage} alt="An assortment of traditional Indian sweets ready to share" loading="lazy" />
              <span><Award size={20} /><strong>80 years</strong> of trusted craft</span>
            </div>
            <div className={styles.heritageCopy}>
              <span className={styles.eyebrow}>Our story, since 1946</span>
              <h2>Some recipes are written.<br /><em>Ours are remembered.</em></h2>
              <p>
                Krishna Sweets began with one karigar, a copper kadai and a promise to never
                compromise on purity. Today, that promise still guides every batch—from the first
                turn of the ladle to the final ribbon on the box.
              </p>
              <div className={styles.heritageStats}>
                <span><strong>3</strong> generations</span>
                <span><strong>40+</strong> daily creations</span>
                <span><strong>100%</strong> vegetarian</span>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
