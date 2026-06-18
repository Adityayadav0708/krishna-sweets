import { Award, Clock3, Flame, HeartHandshake, Leaf, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '@/cart/useCart';
import { Header } from '@/components/layout/Header/Header';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { heroImage } from '@/data/products';
import { business } from '@/data/site';
import styles from './AboutPage.module.css';

const promises = [
  { icon: Leaf, title: 'Pure ingredients', copy: 'Vegetarian mithai made with careful sourcing and no needless shortcuts.' },
  { icon: Flame, title: 'Small-batch craft', copy: 'Recipes are prepared in measured batches so texture and aroma stay consistent.' },
  { icon: ShieldCheck, title: 'Trusted packing', copy: 'Orders are packed with shelf life, storage and travel in mind.' },
];

const craftNotes = [
  'Copper kadai-style slow cooking for depth of flavour',
  'Fresh batches planned around daily demand and gifting orders',
  'Taste, texture and packing checked before every order leaves',
];

const timeline = [
  { year: '1946', title: 'A sweet house begins', copy: 'Krishna Sweets starts serving handmade mithai in Chhibramau with recipes built around purity, patience and festive generosity.' },
  { year: '1970s', title: 'Family recipes grow', copy: 'Classic barfis, ladoos and syrup sweets become favourites for local celebrations across Kannauj district.' },
  { year: 'Today', title: 'Still family-first', copy: 'The same spirit guides daily batches, gifting orders and simple WhatsApp checkout for modern customers.' },
];

export function AboutPage() {
  const { openCart, totalCount } = useCart();

  return (
    <div id="top">
      <Header cartCount={totalCount} onCartOpen={openCart} />
      <main>
        <section className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroImage}>
              <img src={heroImage} alt="Assorted traditional Indian sweets prepared for sharing" />
              <span><MapPin size={18} /> {business.address}</span>
            </div>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}><Award size={15} /> Since {business.founded}</span>
              <h1>Rooted in Chhibramau, remembered by taste.</h1>
              <p>
                Krishna Sweets is a heritage mithai house from Kannauj district, built on the
                simple promise that every celebration deserves sweets made with care, patience
                and honest ingredients.
              </p>
              <div className={styles.statRow}>
                <span><strong>80</strong> years</span>
                <span><strong>3</strong> generations</span>
                <span><strong>100%</strong> vegetarian</span>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.storySection}>
          <Container className={styles.storyGrid}>
            <SectionHeading
              eyebrow="Our story"
              title="Some recipes are taught by hand."
              body="From the first batch to today's festive orders, the work has stayed personal: slow cooking, careful finishing and sweets packed for families to share."
            />
            <div className={styles.storyCard}>
              <Clock3 size={22} />
              <h2>Heritage craft, modern convenience.</h2>
              <p>
                We keep the ordering simple and the making thoughtful. Choose your sweets online,
                confirm on WhatsApp, and receive the same familiar care families have expected
                from Krishna Sweets for decades.
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.familySection}>
          <Container className={styles.familyGrid}>
            <div className={styles.familyCopy}>
              <span className={styles.eyebrow}><HeartHandshake size={15} /> Founder & family</span>
              <h2>Built like a family promise, not a factory routine.</h2>
              <p>
                This demo profile reserves space for the real founder name and family photograph
                at launch. The story is written to reflect a heritage mithai shop: recipes passed
                from senior karigars to the next generation, ingredients checked by hand, and
                every box finished with the care expected for a guest at home.
              </p>
              <div className={styles.craftList} aria-label="Craft standards">
                {craftNotes.map((note) => (
                  <span key={note}><Sparkles size={15} /> {note}</span>
                ))}
              </div>
            </div>
            <aside className={styles.founderCard} aria-label="Founder story placeholder">
              <div className={styles.founderSeal}>KS</div>
              <span>Founder story placeholder</span>
              <h3>Replace with the real family photograph and founder name before launch.</h3>
              <p>
                Add a short authentic note from the current owner here: what Krishna Sweets means
                to Chhibramau families, which recipes are most treasured, and how the shop keeps
                its 1946 promise alive today.
              </p>
            </aside>
          </Container>
        </section>

        <section className={styles.promiseSection}>
          <Container>
            <SectionHeading
              eyebrow="What guides us"
              title="Quiet standards, every day."
              align="center"
            />
            <div className={styles.promiseGrid}>
              {promises.map(({ icon: Icon, title, copy }) => (
                <article className={styles.promiseCard} key={title}>
                  <span><Icon size={22} strokeWidth={1.6} /></span>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.timelineSection}>
          <Container className={styles.timelineGrid}>
            {timeline.map((item) => (
              <article className={styles.timelineItem} key={item.year}>
                <strong>{item.year}</strong>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </Container>
        </section>
      </main>
    </div>
  );
}
