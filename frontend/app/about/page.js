import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = { title: 'About Us - FEmmE | Sylhets Premier Beauty Clinic' };

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-blush to-ivory">
          <div className="container text-center">
            <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-dark">About FEmmE</h1>
          </div>
        </section>

        {/* Story */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80" alt="" className="rounded-2xl" />
                <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80" alt="" className="rounded-2xl mt-12" />
              </div>
              <div>
                <h2 className="font-serif text-4xl text-text-dark mb-6">Pioneering Beauty in Sylhet</h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  FEmmE is the first beauty clinic & parlour in Sylhet providing quality services in an exquisite 
                  atmosphere at a reasonable price. We believe every woman deserves access to premium beauty 
                  care in a safe, welcoming environment.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  Our commitment to safety sets us apart. We ensure no harmful or fake products are used. 
                  Our focus is on herbal, non-hazardous beauty care and we strictly avoid parabens in 
                  all our treatments.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Beyond beauty, we offer a dedicated women-only yoga studio with professional female 
                  instructors, providing a holistic approach to wellness for women in our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-3">What We Stand For</p>
              <h2 className="font-serif text-4xl text-text-dark">Our Values</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🛡️', title: 'Safety', desc: '100% herbal & paraben-free products' },
                { icon: '💎', title: 'Quality', desc: 'Premium services at reasonable prices' },
                { icon: '🌿', title: 'Authenticity', desc: 'Real products, real results' },
                { icon: '💪', title: 'Empowerment', desc: 'Women supporting women' },
              ].map((v, i) => (
                <div key={i} className="card p-8 text-center">
                  <span className="text-5xl mb-4 block">{v.icon}</span>
                  <h3 className="font-serif text-xl text-text-dark mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yoga Studio */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-3">Yoga Studio</p>
                <h2 className="font-serif text-4xl text-text-dark mb-6">Women-Only Yoga Space</h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  At FEmmE, we believe beauty is holistic. Our dedicated yoga studio offers a private, 
                  comfortable space exclusively for women to practice yoga and meditation.
                </p>
                <p className="text-text-muted leading-relaxed mb-8">
                  Led by professional female instructors, our yoga sessions help you find balance 
                  between mind, body, and spirit — the perfect complement to our beauty services.
                </p>
                <Link href="/contact" className="btn-primary inline-block">Book Yoga Session</Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80" alt="" className="rounded-2xl" />
                <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&q=80" alt="" className="rounded-2xl mt-12" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-blush">
          <div className="container text-center">
            <h2 className="font-serif text-4xl text-text-dark mb-6">Experience the FEmmE Difference</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">Join hundreds of satisfied clients who trust us with their beauty and wellness.</p>
            <Link href="/contact" className="btn-primary">Get Started</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}