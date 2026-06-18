import { Award, Gift, HeartHandshake, MessageCircle, Quote, ShieldCheck, Star } from 'lucide-react';
import { useCart } from '@/cart/useCart';
import { Header } from '@/components/layout/Header/Header';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { heroImage } from '@/data/products';
import styles from './ReviewsPage.module.css';

const reviews = [
  {
    name: 'Anjali Mishra',
    occasion: 'Diwali gifting',
    rating: 5,
    text: 'The kaju katli reached fresh, neat and beautifully packed. It tasted like the sweets my family remembers from childhood.',
  },
  {
    name: 'Rohit Gupta',
    occasion: 'Family function',
    rating: 5,
    text: 'The motichoor ladoo had the right ghee aroma and soft texture. Ordering on WhatsApp was simple and quick.',
  },
  {
    name: 'Pooja Tiwari',
    occasion: 'Weekend order',
    rating: 5,
    text: 'Fresh rasgulla, polite service and clear storage guidance. This is now our regular mithai shop in Chhibramau.',
  },
  {
    name: 'Sandeep Verma',
    occasion: 'Wedding trays',
    rating: 5,
    text: 'The gift boxes looked premium and every piece tasted fresh. The team helped us select sweets that travelled well.',
  },
];

const trustStats = [
  { value: '4.9/5', label: 'average customer rating' },
  { value: '80', label: 'years of trusted craft' },
  { value: '100%', label: 'vegetarian sweets' },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'Freshness checked before packing' },
  { icon: Gift, label: 'Premium boxes for gifting' },
  { icon: MessageCircle, label: 'Fast WhatsApp order support' },
];

export function ReviewsPage() {
  const { openCart, totalCount } = useCart();

  return (
    <div id="top">
      <Header cartCount={totalCount} onCartOpen={openCart} />
      <main>
        <section className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}><HeartHandshake size={15} /> Customer stories</span>
              <h1>Sweet words from families we serve.</h1>
              <p>
                Reviews from customers who trust Krishna Sweets for gifting, family rituals and
                everyday mithai from Chhibramau.
              </p>
            </div>
            <div className={styles.heroImage}>
              <img src={heroImage} alt="Traditional Indian sweets arranged for sharing" />
              <span><Award size={18} /> Loved across generations</span>
            </div>
          </Container>
        </section>

        <section className={styles.statsSection}>
          <Container className={styles.statsGrid}>
            {trustStats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Container>
        </section>

        <section className={styles.featuredSection}>
          <Container className={styles.featuredGrid}>
            <article className={styles.featuredCard}>
              <Quote size={34} strokeWidth={1.3} />
              <p>
                "For our Diwali family hampers, Krishna Sweets helped us choose a balanced mix
                of kaju katli, motichoor ladoo and Bengali sweets. The boxes felt special, the
                sweets were fresh, and every guest asked where we ordered from."
              </p>
              <footer>
                <strong>Neha Agarwal</strong>
                <span>Festival gifting customer</span>
              </footer>
            </article>
            <div className={styles.trustPanel}>
              <span className={styles.eyebrow}>Why customers trust us</span>
              <h2>Care you can feel before the first bite.</h2>
              <div className={styles.badgeList}>
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div key={label}>
                    <Icon size={19} strokeWidth={1.6} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.reviewsSection}>
          <Container>
            <SectionHeading
              eyebrow="What customers say"
              title="Freshness, packing and familiar taste."
              body="Simple feedback from families who order our sweets for celebrations and weekly cravings."
              align="center"
            />
            <div className={styles.reviewGrid}>
              {reviews.map((review) => (
                <article className={styles.reviewCard} key={review.name}>
                  <Quote size={28} strokeWidth={1.4} />
                  <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star size={16} fill="currentColor" key={index} />
                    ))}
                  </div>
                  <p>{review.text}</p>
                  <footer>
                    <strong>{review.name}</strong>
                    <span>{review.occasion}</span>
                  </footer>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
