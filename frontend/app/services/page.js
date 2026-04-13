import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

async function getServices() {
  try { const res = await fetch('http://localhost:5000/api/services', { cache: 'no-store' }); return res.ok ? await res.json() : []; } 
  catch { return []; }
}

export const metadata = { title: 'Services - FEmmE | Beauty & Wellness Services' };

const categories = [
  { id: 'skin', name: 'Skin & Face', icon: '✨', services: ['Herbal Facial', 'Skin Treatments', 'Anti-Aging', 'Hydrafacial'] },
  { id: 'hair', name: 'Hair', icon: '💇', services: ['Haircut & Styling', 'Hair Treatment', 'Rebonding', 'Hair Coloring'] },
  { id: 'makeup', name: 'Makeup', icon: '💄', services: ['Everyday Makeup', 'Bridal Makeup', 'Party Makeup', 'HD Makeup'] },
  { id: 'body', name: 'Body & Wellness', icon: '🧖', services: ['Spa & Massage', 'Manicure', 'Pedicure', 'Body Wraps'] },
  { id: 'yoga', name: 'Yoga Studio', icon: '🧘', services: ['Yoga Classes', 'Meditation', 'Prenatal Yoga', 'Private Sessions'] },
  { id: 'other', name: 'Other Services', icon: '💅', services: ['Piercing', 'Nail Art', 'Threading', 'Bleaching'] },
];

export default async function Services() {
  const services = await getServices();
  const displayServices = services.length > 0 ? services : [];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-blush to-ivory">
          <div className="container text-center">
            <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-4">Indulge in Expert Care</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-dark">Our Services</h1>
          </div>
        </section>

        {/* Services */}
        <section className="section bg-white">
          <div className="container">
            {categories.map((cat, i) => (
              <div key={cat.id} className="mb-12 last:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{cat.icon}</span>
                  <h2 className="font-serif text-3xl text-text-dark">{cat.name}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cat.services.map((service, j) => (
                    <div key={j} className="card p-6 hover:border-l-4 hover:border-burgundy transition-all">
                      <h3 className="font-serif text-lg text-text-dark mb-2">{service}</h3>
                      <p className="text-text-muted text-sm mb-4">Premium quality service</p>
                      <Link href="/contact" className="text-burgundy text-sm font-medium hover:underline">Enquire →</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-cream">
          <div className="container text-center">
            <h2 className="font-serif text-4xl text-text-dark mb-6">Ready to Book?</h2>
            <p className="text-text-muted mb-8">Schedule your appointment today</p>
            <Link href="/contact" className="btn-primary">Book Appointment</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}