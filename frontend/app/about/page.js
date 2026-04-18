'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const colors = {
  dark: "#111111",
  deepRose: "#C2185B",
  royalPink: "#E91E63",
  richGold: "#D4AF37",
  softCream: "#FFF8F2",
  warmIvory: "#F8EFE7",
  white: "#ffffff",
  text: "#111111",
  muted: "#6D6D6D",
};

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    { icon: "✧", title: "Safety", desc: "100% herbal & paraben-free" },
    { icon: "❋", title: "Quality", desc: "Premium services, fair prices" },
    { icon: "⟡", title: "Authenticity", desc: "Real products, real results" },
    { icon: "☾", title: "Empowerment", desc: "Women supporting women" },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: colors.softCream, color: colors.text }}>
        {/* Hero Section - Dark */}
        <section ref={sectionRef} style={{
          minHeight: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: colors.dark,
          paddingTop: '90px',
        }}>
          {/* Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/images/bride_photo_1.png) center/cover no-repeat',
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
          }} />
          
          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            fontSize: '120px',
            color: colors.richGold,
            opacity: 0.08,
          }}>❋</div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            fontSize: '80px',
            color: colors.deepRose,
            opacity: 0.1,
          }}>✧</div>

          <div style={{
            maxWidth: '900px',
            width: '100%',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '60px 40px',
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: colors.deepRose,
              marginBottom: '24px',
              padding: '8px 16px',
              border: `1px solid ${colors.richGold}40`,
              borderRadius: '30px',
            }}>
              Our Story
            </span>
            
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(42px, 6vw, 64px)',
              fontWeight: 400,
              color: colors.white,
              marginBottom: '24px',
              lineHeight: 1.2,
            }}>
              About <span style={{ color: colors.richGold, fontStyle: 'italic' }}>FEmmE</span>
            </h1>
            
            <p style={{
              fontSize: '16px',
              color: '#aaaaaa',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              Pioneering beauty and wellness in Sylhet with a commitment to excellence since 2016
            </p>
          </div>
        </section>

        {/* Story Section - Two Column */}
        <section style={{ padding: '100px 40px', background: colors.softCream }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '60px', 
            alignItems: 'center' 
          }}>
            {/* Left - Images Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              {[
                { src: "/images/bride_photo_1.png", rotate: '-4deg', marginTop: '30px' },
                { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '3deg', marginTop: '0' },
                { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-2deg', marginTop: '20px' },
                { src: "/images/2a45382ff49b2d7afd925c17839187c2.jpg", rotate: '4deg', marginTop: '-10px' },
              ].map((img, i) => (
                <div key={i} style={{
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginTop: img.marginTop,
                  transform: `rotate(${img.rotate})`,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                }}>
                  <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Right - Content */}
            <div>
              <span style={{
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: colors.deepRose,
                marginBottom: '12px',
                display: 'block',
                fontWeight: 600,
              }}>
                Who We Are
              </span>
              
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(32px, 4vw, 44px)',
                color: colors.text,
                marginBottom: '24px',
                lineHeight: 1.2,
              }}>
                Crafting <span style={{ color: colors.richGold }}>Beauty</span> in Sylhet
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
                Beyond beauty, we provide a holistic approach to wellness for women in our community.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '32px', marginTop: '32px' }}>
                {[
                  { number: "9+", label: "Years" },
                  { number: "500+", label: "Clients" },
                  { number: "100%", label: "Natural" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ 
                      fontSize: '28px', 
                      fontFamily: "'Playfair Display', serif",
                      color: colors.richGold,
                      fontWeight: 600,
                    }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '12px', color: colors.muted, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <section style={{ 
          padding: '60px 40px', 
          background: colors.dark,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <style>{`
            @keyframes floatElement {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(194,37,91,0.08) 0%, transparent 70%)',
          }} />
          
          {/* Floating Icons */}
          <div style={{
            position: 'absolute',
            left: '15%',
            top: '30%',
            fontSize: '24px',
            color: colors.richGold,
            opacity: 0.3,
            animation: 'floatElement 3s ease-in-out infinite',
          }}>✦</div>
          <div style={{
            position: 'absolute',
            right: '20%',
            bottom: '25%',
            fontSize: '28px',
            color: colors.deepRose,
            opacity: 0.3,
            animation: 'floatElement 3s ease-in-out infinite',
            animationDelay: '0.5s',
          }}>❋</div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            position: 'relative',
            zIndex: 2,
          }}>
            <div style={{
              width: '80px',
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${colors.richGold})`,
            }} />
            
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '14px',
              letterSpacing: '4px',
              color: colors.white,
              textTransform: 'uppercase',
            }}>
              Elegance in Every Detail
            </span>
            
            <div style={{
              width: '80px',
              height: '1px',
              background: `linear-gradient(90deg, ${colors.richGold}, transparent)`,
            }} />
          </div>
        </section>

        {/* Values Section - Dark */}
        <section style={{ padding: '100px 40px', background: colors.dark, position: 'relative' }}>
          <style>{`
            @keyframes cardFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            .value-card {
              transition: all 0.4s ease;
            }
            .value-card:hover {
              transform: translateY(-8px);
              border-color: rgba(212,175,55,0.5);
            }
          `}</style>
          
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: colors.deepRose,
                marginBottom: '12px',
                display: 'block',
              }}>
                What We Stand For
              </span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(32px, 4vw, 44px)',
                color: colors.white,
              }}>
                Our <span style={{ color: colors.richGold }}>Values</span>
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {values.map((v, i) => (
                <div key={i} className="value-card" style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '32px 20px',
                  textAlign: 'center',
                  border: '1px solid rgba(212,175,55,0.15)',
                }}>
                  <span style={{ 
                    fontSize: '36px', 
                    marginBottom: '16px', 
                    display: 'block', 
                    color: colors.richGold 
                  }}>{v.icon}</span>
                  <h3 style={{ 
                    fontSize: '18px', 
                    color: colors.white, 
                    marginBottom: '8px',
                    fontWeight: 600,
                  }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', color: '#888888' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Dark */}
        <section style={{ 
          padding: '100px 40px', 
          background: colors.dark, 
          textAlign: 'center', 
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          }} />
          
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
            <span style={{
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: colors.deepRose,
              marginBottom: '16px',
              display: 'block',
            }}>
              Join Us
            </span>
            
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: colors.white,
              marginBottom: '16px',
            }}>
              Experience the <span style={{ color: colors.richGold }}>FEmmE</span> Difference
            </h2>
            
            <p style={{ fontSize: '15px', color: '#888888', marginBottom: '32px', lineHeight: 1.8 }}>
              Join hundreds of satisfied clients who trust us with their beauty and wellness.
            </p>
            
            <Link href="/contact" style={{
              background: colors.deepRose,
              color: colors.white,
              padding: '16px 40px',
              borderRadius: '40px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 20px rgba(194,37,91,0.4)',
            }}>
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Footer />
    </>
  );
}