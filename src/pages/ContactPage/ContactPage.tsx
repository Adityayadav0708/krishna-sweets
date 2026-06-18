import { useMemo, useState } from 'react';
import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone, ShieldCheck } from 'lucide-react';
import { useCart } from '@/cart/useCart';
import { Header } from '@/components/layout/Header/Header';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { business } from '@/data/site';
import styles from './ContactPage.module.css';

const contactCards = [
  { icon: Phone, title: 'Call us', value: business.phoneDisplay, href: `tel:${business.whatsapp}` },
  { icon: MessageCircle, title: 'WhatsApp', value: 'Message for orders', href: `https://wa.me/${business.whatsapp}` },
  { icon: Mail, title: 'Email', value: business.email, href: `mailto:${business.email}` },
];

const serviceNotes = [
  'Daily sweets and fresh batch availability',
  'Festival gifting and bulk order planning',
  'Local delivery confirmation across Chhibramau',
];

export function ContactPage() {
  const { openCart, totalCount } = useCart();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const whatsappUrl = useMemo(() => {
    const lines = [
      `Hello ${business.name}, I have an inquiry.`,
      name.trim() ? `Name: ${name.trim()}` : '',
      message.trim() ? `Message: ${message.trim()}` : '',
    ].filter(Boolean);

    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [message, name]);

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapLabel)}`;

  return (
    <div id="top">
      <Header cartCount={totalCount} onCartOpen={openCart} />
      <main>
        <section className={styles.hero}>
          <Container className={styles.heroInner}>
            <SectionHeading
              eyebrow="Contact"
              title="Visit, call, or order on WhatsApp."
              body="For daily sweets, gifting, bulk orders and delivery questions, reach Krishna Sweets directly."
            />
            <div className={styles.locationCard}>
              <MapPin size={22} />
              <h2>{business.address}</h2>
              <p><Clock3 size={16} /> {business.hours}</p>
            </div>
          </Container>
        </section>

        <section className={styles.contactSection}>
          <Container className={styles.contactGrid}>
            <div className={styles.cards}>
              {contactCards.map(({ icon: Icon, title, value, href }) => (
                <a className={styles.contactCard} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} key={title}>
                  <span><Icon size={21} strokeWidth={1.6} /></span>
                  <div>
                    <strong>{title}</strong>
                    <p>{value}</p>
                  </div>
                </a>
              ))}
              <div className={styles.hoursCard}>
                <Clock3 size={21} strokeWidth={1.6} />
                <strong>Shop hours</strong>
                <p>{business.hours}</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
              <span>Quick inquiry</span>
              <h2>Send details on WhatsApp</h2>
              <label>
                Your name
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
              </label>
              <label>
                Message
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={5} placeholder="Tell us what you need" />
              </label>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Open WhatsApp
              </a>
              <small>No backend is connected. This form simply prepares your WhatsApp inquiry.</small>
            </form>
          </Container>
        </section>

        <section className={styles.mapSection}>
          <Container className={styles.mapGrid}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapPin}>
                <MapPin size={28} />
              </div>
              <span>Map preview</span>
              <h2>{business.mapLabel}</h2>
              <p>
                Replace this placeholder with an embedded Google Map iframe after the final shop
                pin is verified.
              </p>
              <a href={mapUrl} target="_blank" rel="noreferrer">
                <Navigation size={17} /> Open in Google Maps
              </a>
            </div>
            <aside className={styles.visitPanel}>
              <span><ShieldCheck size={16} /> Before you visit</span>
              <h2>Message ahead for fresh batch timing.</h2>
              <ul>
                {serviceNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </aside>
          </Container>
        </section>
      </main>
    </div>
  );
}
