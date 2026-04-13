'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  goldLight: "#f0d4a8",
  pink: "#e88a9f",
  pinkLight: "#f5b8c4",
  pinkMuted: "#c97a8a",
  cream: "#faf3e8",
  pink: "#f5d0de",
  rose: "#c9a87c",
  text: "#f5f5f5",
  muted: "#8a8a9a",
  white: "#ffffff",
};

const services = [
  { name: "Signature Facials", desc: "Rejuvenating treatments", icon: "✧" },
  { name: "Hair Artistry", desc: "Cut, color & style", icon: "⟡" },
  { name: "Bridal Couture", desc: "Complete bridal elegance", icon: "❋" },
  { name: "Spa Journey", desc: "Massage & relaxation", icon: "☾" },
];

const gallery = [
  { name: "Elegance", color: "#2a2a4a" },
  { name: "Radiance", color: "#3a3a5a" },
  { name: "Glamour", color: "#4a4a6a" },
  { name: "Serenity", color: "#5a5a7a" },
  { name: "Luxury", color: "#1a1a3a" },
  { name: "Beauty", color: "#2a2a4a" },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: colors.darker, color: colors.text }}>
        {/* Hero Section */}
        <section style={{
          minHeight: '55vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '120px 60px 80px',
        }}>
          {/* Animated background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at 50% 0%, ${colors.purple} 0%, ${colors.darker} 70%)`,
          }} />
          
          {/* Floating orbs */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.gold}15 0%, transparent 60%)`,
            filter: 'blur(60px)',
            animation: 'float 10s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.rose}20 0%, transparent 60%)`,
            filter: 'blur(50px)',
            animation: 'float 12s ease-in-out infinite reverse',
          }} />

          {/* Content */}
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            {/* Left - Text */}
            <div style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s ease',
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '11px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: colors.pink,
                marginBottom: '24px',
                padding: '8px 16px',
                border: `1px solid ${colors.gold}40`,
                borderRadius: '30px',
              }}>
                Premium Beauty Experience
              </span>
              
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: colors.white,
                marginBottom: '24px',
              }}>
                Creating <span style={{ color: colors.gold }}>your</span>
                <br />best <span style={{ color: colors.pink, fontStyle: 'italic' }}>look</span>
              </h1>
              
              <p style={{
                fontSize: '16px',
                color: colors.muted,
                lineHeight: 1.8,
                maxWidth: '440px',
                marginBottom: '40px',
              }}>
                Enter a world of refined elegance where every detail is crafted to reveal your innermost radiance. Your transformation begins here.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  background: colors.pink,
                  color: colors.darker,
                  padding: '16px 36px',
                  borderRadius: '40px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}>
                  Get In Touch
                </Link>
                <Link href="/services" style={{
                  background: 'transparent',
                  color: colors.white,
                  border: `1px solid ${colors.gold}60`,
                  padding: '16px 36px',
                  borderRadius: '40px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}>
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div style={{
              position: 'relative',
              height: '500px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s ease 0.2s',
            }}>
              {/* Main card */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '280px',
                height: '380px',
                background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.dark} 100%)`,
                borderRadius: '200px 200px 40px 40px',
                border: `1px solid ${colors.gold}30`,
                boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 100px ${colors.gold}10`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ 
                  fontSize: '100px', 
                  color: colors.pink,
                  opacity: 0.3,
                  fontFamily: "'Playfair Display', serif",
                }}>♛</span>
              </div>

              {/* Floating badges */}
              {[
                { text: "500+", label: "Clients", top: "10%", right: "0" },
                { text: "100%", label: "Natural", top: "30%", left: "-20px" },
                { text: "4.9", label: "Rating", bottom: "20%", right: "10px" },
              ].map((item, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  ...item,
                  background: `${colors.dark}`,
                  border: `1px solid ${colors.gold}40`,
                  borderRadius: '16px',
                  padding: '16px 20px',
                  boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
                }}>
                  <div style={{ fontSize: '24px', fontWeight: 600, color: colors.gold }}>{item.text}</div>
                  <div style={{ fontSize: '11px', color: colors.muted, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '120px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: colors.pink, marginBottom: '16px', display: 'block' }}>
                What We Offer
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 48px)', color: colors.white }}>
                Curated Experiences
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {services.map((s, i) => (
                <div key={s.name} style={{
                  background: `${colors.purple}50`,
                  border: `1px solid ${colors.purple}`,
                  borderRadius: '24px',
                  padding: '40px 24px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.gold}30 0%, ${colors.gold}10 100%)`,
                    border: `1px solid ${colors.gold}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '28px',
                    color: colors.pink,
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', color: colors.white, marginBottom: '8px', fontWeight: 500 }}>{s.name}</h3>
                  <p style={{ fontSize: '13px', color: colors.muted }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <Link href="/services" style={{
                display: 'inline-block',
                color: colors.pink,
                fontSize: '14px',
                textDecoration: 'none',
                borderBottom: `1px solid ${colors.gold}`,
                paddingBottom: '4px',
              }}>
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section style={{ padding: '120px 60px', background: colors.darker, position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, ${colors.gold}10 0%, transparent 60%)`,
            filter: 'blur(80px)',
          }} />
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: colors.pink, marginBottom: '16px', display: 'block' }}>
                Our Story
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 48px)', color: colors.white, marginBottom: '24px' }}>
                Crafting Beauty <br /><span style={{ color: colors.pink, fontStyle: 'italic' }}>Since Beginning</span>
              </h2>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9, marginBottom: '20px' }}>
                AURA was born from a simple vision — to create a sanctuary where modern luxury meets timeless elegance. Every treatment is a journey, every visit an escape.
              </p>
              <p style={{ fontSize: '15px', color: colors.muted, lineHeight: 1.9, marginBottom: '30px' }}>
                Our team of artisans combines ancient wisdom with contemporary techniques, ensuring each moment spent with us transforms not just your appearance, but your spirit.
              </p>
              <Link href="/about" style={{
                display: 'inline-block',
                background: colors.pink,
                color: colors.darker,
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                Discover More
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ 
                height: '300px', 
                background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.dark} 100%)`,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '60px', color: colors.pink, opacity: 0.3 }}>✦</span>
              </div>
              <div style={{ 
                height: '300px', 
                background: `linear-gradient(135deg, ${colors.gold}20 0%, ${colors.purple} 100%)`,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '40px',
              }}>
                <span style={{ fontSize: '60px', color: colors.pink, opacity: 0.3 }}>❋</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{ padding: '120px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: colors.pink, marginBottom: '16px', display: 'block' }}>
                Our Work
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 48px)', color: colors.white }}>
                Moments of Magic
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
              {gallery.map((g, i) => (
                <div key={g.name} style={{
                  height: i % 3 === 0 ? '280px' : '200px',
                  background: g.color,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <span style={{ 
                    fontSize: '12px', 
                    color: colors.pink, 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase' 
                  }}>
                    {g.name}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <Link href="/gallery" style={{
                background: colors.pink,
                color: colors.darker,
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '120px 60px', 
          background: colors.darker,
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: `radial-gradient(circle, ${colors.gold}20 0%, transparent 60%)`,
            filter: 'blur(60px)',
          }} />
          
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: 'clamp(36px, 5vw, 52px)', 
              color: colors.white,
              marginBottom: '20px',
            }}>
              Begin Your <span style={{ color: colors.gold }}>Transformation</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: colors.muted, 
              marginBottom: '40px',
              lineHeight: 1.8,
            }}>
              Your journey to radiance starts with a single step. Book your appointment today and let us craft your perfect moment.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: colors.pink,
              color: colors.darker,
              padding: '18px 48px',
              borderRadius: '40px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
            }}>
              Book Appointment
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: '120px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: colors.pink, marginBottom: '16px', display: 'block' }}>
                Get In Touch
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 48px)', color: colors.white }}>
                Reach Out to Us
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              <div>
                <h3 style={{ fontSize: '20px', color: colors.pink, marginBottom: '24px' }}>Send a Message</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input type="text" placeholder="Your Name" style={{ 
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    border: '1px solid #333',
                    background: colors.darker,
                    color: colors.white,
                    fontSize: '14px',
                  }} />
                  <input type="email" placeholder="Your Email" style={{ 
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    border: '1px solid #333',
                    background: colors.darker,
                    color: colors.white,
                    fontSize: '14px',
                  }} />
                  <textarea placeholder="Your Message" rows={4} style={{ 
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    border: '1px solid #333',
                    background: colors.darker,
                    color: colors.white,
                    fontSize: '14px',
                    resize: 'none',
                  }} />
                  <button style={{
                    background: colors.pink,
                    color: colors.darker,
                    padding: '16px 32px',
                    borderRadius: '30px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                  }}>
                    Send Message
                  </button>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', color: colors.pink, marginBottom: '24px' }}>Contact Info</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.muted, marginBottom: '4px' }}>Location</p>
                    <p style={{ fontSize: '15px', color: colors.white }}>Sylhet, Bangladesh</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.muted, marginBottom: '4px' }}>Email</p>
                    <p style={{ fontSize: '15px', color: colors.white }}>hello@aura.com.bd</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.muted, marginBottom: '4px' }}>Phone</p>
                    <p style={{ fontSize: '15px', color: colors.white }}>+880 XXX XXXXXX</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.muted, marginBottom: '4px' }}>Hours</p>
                    <p style={{ fontSize: '15px', color: colors.white }}>Daily: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>
      
      <Footer />
    </>
  );
}