'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  goldLight: "#f0d4a8",
  pink: "#e88a9f",
  pinkLight: "#f5b8c4",
  pinkMuted: "#c97a8a",
  text: "#f5f5f5",
  muted: "#8a8a9a",
};

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const values = [
    { icon: "✧", title: "Safety", desc: "100% herbal & paraben-free products" },
    { icon: "❋", title: "Quality", desc: "Premium services at reasonable prices" },
    { icon: "⟡", title: "Authenticity", desc: "Real products, real results" },
    { icon: "☾", title: "Empowerment", desc: "Women supporting women" },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: colors.darker, color: colors.text }}>
        {/* Hero */}
        <section style={{
          minHeight: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '120px 60px 80px',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at 50% 0%, ${colors.purple} 0%, ${colors.darker} 70%)`,
          }} />
          
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.pink}10 0%, transparent 60%)`,
            filter: 'blur(60px)',
          }} />

          <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <span style={{
              fontSize: '11px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: colors.pink,
              marginBottom: '20px',
              display: 'block',
            }}>
              Our Story
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 400,
              color: colors.text,
              marginBottom: '20px',
            }}>
              About <span style={{ color: colors.pink, fontStyle: 'italic' }}>FEmmE</span>
            </h1>
            <p style={{
              fontSize: '16px',
              color: colors.muted,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              Pioneering beauty and wellness in Sylhet with a commitment to excellence
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding: '100px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{
                height: '320px',
                borderRadius: '24px',
                overflow: 'hidden',
                marginTop: '40px',
              }}>
                <img src="/images/bride_photo_1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{
                height: '320px',
                borderRadius: '24px',
                overflow: 'hidden',
              }}>
                <img src="/images/Traditional_Bengali_Bridal_Makeup_480x480.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: colors.text,
                marginBottom: '24px',
              }}>
                Crafting <span style={{ color: colors.gold }}>Beauty</span> in Sylhet
              </h2>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9, marginBottom: '20px' }}>
                FEmmE is the first beauty clinic & parlour in Sylhet providing quality services in an exquisite 
                atmosphere at a reasonable price. We believe every woman deserves access to premium beauty 
                care in a safe, welcoming environment.
              </p>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9, marginBottom: '20px' }}>
                Our commitment to safety sets us apart. We ensure no harmful or fake products are used. 
                Our focus is on herbal, non-hazardous beauty care and we strictly avoid parabens in 
                all our treatments.
              </p>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9 }}>
                Beyond beauty, we offer a dedicated women-only yoga studio with professional female 
                instructors, providing a holistic approach to wellness for women in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '100px 60px', background: colors.darker }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: colors.pink, marginBottom: '12px', display: 'block' }}>
                What We Stand For
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', color: colors.text }}>
                Our Values
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  background: `${colors.purple}30`,
                  borderRadius: '20px',
                  padding: '32px 20px',
                  textAlign: 'center',
                  border: `1px solid ${colors.purple}50`,
                }}>
                  <span style={{ fontSize: '36px', marginBottom: '16px', display: 'block', color: colors.pink }}>{v.icon}</span>
                  <h3 style={{ fontSize: '18px', color: colors.text, marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', color: colors.muted }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yoga Studio */}
        <section style={{ padding: '100px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: colors.pink, marginBottom: '12px', display: 'block' }}>
                Yoga Studio
              </span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: colors.text,
                marginBottom: '24px',
              }}>
                Women-Only <span style={{ color: colors.gold }}>Yoga</span> Space
              </h2>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9, marginBottom: '20px' }}>
                At FEmmE, we believe beauty is holistic. Our dedicated yoga studio offers a private, 
                comfortable space exclusively for women to practice yoga and meditation.
              </p>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9, marginBottom: '30px' }}>
                Led by professional female instructors, our yoga sessions help you find balance 
                between mind, body, and spirit — the perfect complement to our beauty services.
              </p>
              <Link href="/contact" style={{
                background: colors.pink,
                color: colors.darker,
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
              }}>
                Book Yoga Session
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                marginTop: '30px',
              }}>
                <img src="/images/2a45382ff49b2d7afd925c17839187c2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
              }}>
                <img src="/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '100px 60px', background: colors.darker, textAlign: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${colors.gold}15 0%, transparent 60%)`,
            filter: 'blur(60px)',
          }} />
          
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: colors.text,
              marginBottom: '16px',
            }}>
              Experience the <span style={{ color: colors.gold }}>FEmmE</span> Difference
            </h2>
            <p style={{ fontSize: '15px', color: colors.muted, marginBottom: '32px', lineHeight: 1.8 }}>
              Join hundreds of satisfied clients who trust us with their beauty and wellness.
            </p>
            <Link href="/contact" style={{
              background: colors.pink,
              color: colors.darker,
              padding: '16px 40px',
              borderRadius: '40px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>

      <Footer />
    </>
  );
}