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

const categories = [
  { id: "facial", name: "Facial", icon: "✧" },
  { id: "haircut", name: "Haircut", icon: "⟡" },
  { id: "spa", name: "Spa", icon: "☾" },
  { id: "massage", name: "Massage", icon: "❋" },
];

const servicesData = {
  facial: [
    { code: "101", name: "Acne Facial", price: 1200 },
    { code: "102", name: "Aloe Vera", price: 1200 },
    { code: "103", name: "Flower", price: 1500 },
    { code: "104", name: "Galvanic", price: 1200 },
    { code: "105", name: "Anti-Wrinkle / Dark Circle", price: 1500 },
    { code: "106", name: "Aroma", price: 1000 },
    { code: "144", name: "Bridal", price: 1500 },
    { code: "108", name: "Seaweed", price: 1200 },
    { code: "109", name: "Chocolate", price: 1200 },
    { code: "110", name: "Deep Cleansing", price: 1500 },
    { code: "111", name: "Deep Protein", price: 1500 },
    { code: "112", name: "Fruits (seasonal)", price: 1300 },
    { code: "113", name: "Anti-Pigmentation", price: 1000 },
    { code: "114", name: "Anti-Sunburn / Tanning", price: 1200 },
    { code: "115", name: "Gold / Diamond", price: 1500 },
    { code: "116", name: "Herbal Fair Polish", price: 1200 },
    { code: "117", name: "Lavender", price: 1200 },
    { code: "118", name: "Mint", price: 1000 },
    { code: "119", name: "Oxygen", price: 1200 },
    { code: "120", name: "Pearl", price: 1200 },
    { code: "121", name: "Sandalwood", price: 1500 },
    { code: "122", name: "Brightness / Glowness", price: 1200 },
    { code: "123", name: "Silver", price: 1200 },
    { code: "124", name: "Thermoherb", price: 1200 },
    { code: "125", name: "Vegetable", price: 800 },
    { code: "155", name: "FEmmE Normal Facial (30 min.)", price: 450 },
    { code: "166", name: "FEmmE Special Facial (90 min.)", price: 2250 },
    { code: "133", name: "Treatment Facial", price: 1000 },
    { code: "134", name: "Treatment Facial", price: 400 },
    { code: "140", name: "Skin Test", price: 200 },
    { code: "141", name: "Computerised Skin Test", price: 300 },
  ],
  haircut: [
    { code: "222", name: "Haircut with wash", price: 600 },
    { code: "223", name: "Haircut", price: 500 },
    { code: "224", name: "Haircut U", price: 150 },
    { code: "225", name: "Haircut Straight", price: 100 },
    { code: "226", name: "Haircut Bangs / V", price: 200 },
    { code: "227", name: "Haircut Baby", price: 200 },
  ],
  spa: [
    { code: "555", name: "Manicure", price: 500 },
    { code: "556", name: "Pedicure", price: 500 },
    { code: "557", name: "Paraffin Wax", price: 300 },
    { code: "558", name: "Paraffin Wax with Manicure / Pedicure", price: 700 },
    { code: "559", name: "Milk Spa with Aroma Fragrance", price: 500 },
    { code: "560", name: "Manicure Spa", price: 800 },
    { code: "561", name: "Pedicure Spa", price: 800 },
    { code: "562", name: "French Manicure / Pedicure", price: 200 },
    { code: "563", name: "Glow Hand / Foot", price: 800 },
    { code: "564", name: "Foot Spa", price: 600 },
    { code: "565", name: "Hand Spa", price: 500 },
    { code: "566", name: "Full Body Wax", price: 3000 },
    { code: "567", name: "Hand / Leg (half) Bleach or Wax", price: 600 },
    { code: "568", name: "Hand / Leg (full) Bleach or Wax", price: 1200 },
    { code: "569", name: "Other Wax", price: 300 },
    { code: "570", name: "Herbal Face Bleach", price: 700 },
    { code: "571", name: "Fair Polish or Face Bleach", price: null },
    { code: "572", name: "Other Bleach", price: null },
    { code: "573", name: "Upper Lip Wax / Bleach", price: 100 },
    { code: "574", name: "Under Arm Wax", price: 300 },
    { code: "575", name: "Full Face Wax", price: 1000 },
    { code: "576", name: "Half Face Wax", price: 500 },
  ],
  massage: [
    { code: "888", name: "Normal Body Massage (60 min.)", price: 2000 },
    { code: "887", name: "Thai Body Massage (90 min.)", price: 3500 },
    { code: "886", name: "Full Body Spa (90 min.)", price: 4000 },
    { code: "885", name: "Hand Massage", price: 300 },
    { code: "884", name: "Leg Massage", price: 400 },
    { code: "883", name: "Thai Foot Massage", price: 800 },
    { code: "882", name: "Thai Hand Massage", price: 500 },
    { code: "881", name: "Customized Body Massage", price: null },
  ],
};

const gallery = [
  { name: "Bridal", img: "/images/bride_photo_1.png" },
  { name: "Makeup", img: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp" },
  { name: "Bridal", img: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg" },
  { name: "Makeup", img: "/images/2a45382ff49b2d7afd925c17839187c2.jpg" },
  { name: "Bridal", img: "/images/2fa14c4153aa017985532c54a0200041.jpg" },
  { name: "Makeup", img: "/images/premium_photo-1703483854398-93409ce5a9d9.avif" },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("facial");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxImg, setLightboxImg] = useState(null);

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
          {/* Background Image */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/images/bride_photo_1.png) center/cover no-repeat',
          }} />
          
          {/* Black Transparent Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
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
        <section style={{ padding: '80px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: colors.pink, marginBottom: '8px', display: 'block' }}>
                What We Offer
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 36px)', color: colors.white }}>
                Our Services
              </h2>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '30px',
                    border: activeCategory === cat.id ? `1px solid ${colors.pink}` : `1px solid ${colors.gold}40`,
                    background: activeCategory === cat.id ? colors.pink : 'transparent',
                    color: activeCategory === cat.id ? colors.darker : colors.muted,
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div style={{ display: 'flex', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: `1px solid ${colors.purple}`,
                  background: colors.darker,
                  color: colors.white,
                  fontSize: '12px',
                  width: '140px',
                }}
              />
            </div>

            {/* Service Listing */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
              {servicesData[activeCategory]
                ?.filter(s => searchQuery === "" || s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((service, i) => (
                  <div key={service.code} style={{
                    display: 'grid',
                    gridTemplateColumns: '45px 1fr 70px',
                    gap: '6px',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    background: `${colors.purple}20`,
                  }}>
                    <span style={{ fontSize: '11px', color: colors.pink }}>{service.code}</span>
                    <span style={{ fontSize: '12px', color: colors.white }}>{service.name}</span>
                    <span style={{ fontSize: '12px', color: service.price ? colors.gold : colors.muted, textAlign: 'right' }}>
                      {service.price ? `৳ ${service.price}` : '—'}
                    </span>
                  </div>
                ))}
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
                FEmmE was born from a simple vision — to create a sanctuary where modern luxury meets timeless elegance. Every treatment is a journey, every visit an escape.
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
              <div 
                onClick={() => setLightboxImg('/images/bride_photo_1.png')}
                style={{ 
                height: '300px', 
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src="/images/bride_photo_1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div 
                onClick={() => setLightboxImg('/images/Traditional_Bengali_Bridal_Makeup_480x480.webp')}
                style={{ 
                height: '300px', 
                borderRadius: '24px',
                overflow: 'hidden',
                marginTop: '40px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src="/images/Traditional_Bengali_Bridal_Makeup_480x480.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                <div 
                  key={g.name + i} 
                  onClick={() => setLightboxImg(g.img)}
                  style={{
                    height: i % 3 === 0 ? '280px' : '200px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={g.img} 
                    alt={g.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
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
        
        {lightboxImg && (
          <div 
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
            }}
          >
            <img 
              src={lightboxImg} 
              alt=""
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
          </div>
        )}
      
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