'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const colors = {
  dark: "#111111",
  deepRose: "#C2185B",
  royalPink: "#E91E63",
  richGold: "#D4AF37",
  softCream: "#FFF8F2",
  warmIvory: "#F8EFE7",
  champagne: "#F2E3C6",
  mutedBrown: "#6D4C41",
  emerald: "#2E7D32",
  bridalRed: "#B71C1C",
  white: "#ffffff",
  text: "#111111",
  muted: "#6D6D6D",
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
    { code: "155", name: "FEmmE Normal Facial (30 min.)", price: 450 },
    { code: "166", name: "FEmmE Special Facial (90 min.)", price: 2250 },
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
    { code: "558", name: "Paraffin Wax with Mani/Pedi", price: 700 },
    { code: "559", name: "Milk Spa with Aroma", price: 500 },
    { code: "560", name: "Manicure Spa", price: 800 },
    { code: "561", name: "Pedicure Spa", price: 800 },
    { code: "562", name: "French Mani/Pedi", price: 200 },
    { code: "564", name: "Foot Spa", price: 600 },
    { code: "566", name: "Full Body Wax", price: 3000 },
  ],
  massage: [
    { code: "888", name: "Normal Body Massage (60 min.)", price: 2000 },
    { code: "887", name: "Thai Body Massage (90 min.)", price: 3500 },
    { code: "886", name: "Full Body Spa (90 min.)", price: 4000 },
    { code: "883", name: "Thai Foot Massage", price: 800 },
    { code: "885", name: "Hand Massage", price: 300 },
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

const trustBadges = [
  { icon: "✦", title: "100% Natural", desc: "Herbal & paraben-free" },
  { icon: "❋", title: "Expert Team", desc: "Professional stylists" },
  { icon: "⟡", title: "Premium Care", desc: "Safe & hygienic" },
  { icon: "☾", title: "Local Trusted", desc: "Since 2015" },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("facial");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: colors.softCream, color: colors.text }}>
        
        {/* Hero Section - Dark */}
        <section style={{
          minHeight: '100vh',
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
            background: 'rgba(0,0,0,0.75)',
          }} />
          
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            padding: '120px 60px',
          }}>
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
                color: "#C2185B",
                marginBottom: '24px',
                padding: '8px 16px',
                border: `1px solid ${colors.richGold}40`,
                borderRadius: '30px',
              }}>
                Sylhet's Premium Beauty Destination
              </span>
              
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(42px, 6vw, 64px)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: '24px',
              }}>
                Where Beauty <span style={{ color: '#D4AF37' }}>Meets</span>
                <br /><span style={{ color: "#C2185B", fontStyle: 'italic' }}>Royal Care</span>
              </h1>
              
              <p style={{
                fontSize: '16px',
                color: '#aaa',
                lineHeight: 1.8,
                maxWidth: '440px',
                marginBottom: '40px',
              }}>
                Experience the finest beauty treatments in Sylhet. Your transformation begins at Sylhet's most trusted premium beauty parlour.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link 
                  href="/contact" 
                  style={{
                    background: '#C2185B',
                    color: colors.white,
                    padding: '16px 36px',
                    borderRadius: '40px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    letterSpacing: '1px',
                    display: 'inline-block',
                  }}>
                  Book Appointment
                </Link>
                <Link 
                  href="#services"
                  style={{
                    background: 'transparent',
                    color: '#fff',
                    border: '1px solid #D4AF37',
                    padding: '16px 36px',
                    borderRadius: '40px',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}>
                  Our Services
                </Link>
              </div>
            </div>

<div style={{
              position: 'relative',
              height: '480px',
              width: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Sticky Notes Grid */}
              <div style={{
                width: '380px',
                height: '380px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '15px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
              }}>
                {[
                  { src: "/images/bride_photo_1.png", rotate: '-3deg', top: '-5px' },
                  { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '2deg', top: '3px' },
                  { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-1deg', top: '-8px' },
                  { src: "/images/2a45382ff49b2d7afd925c17839187c2.jpg", rotate: '4deg', top: '2px' },
                  { src: "/images/2fa14c4153aa017985532c54a0200041.jpg", rotate: '-2deg', top: '-3px' },
                  { src: "/images/premium_photo-1703483854398-93409ce5a9d9.avif", rotate: '1deg', top: '5px' },
                  { src: "/images/bride_photo_1.png", rotate: '-4deg', top: '-2px' },
                  { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '3deg', top: '4px' },
                  null, // Empty space like puzzle
                ].map((img, i) => img === null ? (
                    <div key={i} style={{
                      background: 'rgba(194,37,91,0.15)',
                      borderRadius: '8px',
                      border: '2px dashed rgba(194,37,91,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: '24px', color: 'rgba(194,37,91,0.5)' }}>+</span>
                    </div>
                  ) : (
                    <div key={i} style={{
                      position: 'relative',
                      top: img.top,
                      transform: `rotate(${img.rotate})`,
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(0deg) scale(1.05)`}
                    onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${img.rotate}) scale(1)`}
                    >
                      <img 
                        src={img.src} 
                        alt={`Work ${i+1}`} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    </div>
                  ))}
              </div>
              
              {/* Floating Badges */}
              {[
                { text: "500+", label: "Clients", top: "-10px", right: "-10px" },
                { text: "100%", label: "Natural", top: "5%", left: "-15px" },
                { text: "4.9", label: "Rating", bottom: "-5px", right: "30px" },
              ].map((item, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  ...item,
                  background: '#111',
                  border: '1px solid #D4AF37',
                  borderRadius: '12px',
                  padding: '12px 16px',
                }}>
                  <div style={{ fontSize: '20px', fontWeight: 600, color: '#D4AF37' }}>{item.text}</div>
                  <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Royal Section Separator */}
        <section style={{ 
          position: 'relative', 
          padding: '60px 40px', 
          background: colors.dark,
          overflow: 'hidden',
        }}>
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            @keyframes floatGlow {
              0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
              50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
            }
          `}</style>
          
          {/* Background Decor */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(194,37,91,0.03) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 4s ease-in-out infinite',
          }} />
          
          {/* Floating Ornaments */}
          {[
            { icon: '✦', left: '10%', top: '30%', delay: '0s' },
            { icon: '❋', left: '20%', top: '60%', delay: '0.5s' },
            { icon: '⟡', right: '15%', top: '25%', delay: '1s' },
            { icon: '☾', right: '25%', top: '65%', delay: '1.5s' },
            { icon: '✧', left: '50%', top: '20%', delay: '0.8s' },
          ].map((item, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: item.left,
              right: item.right,
              top: item.top,
              fontSize: '24px',
              color: colors.richGold,
              opacity: 0.4,
              animation: `floatGlow 3s ease-in-out infinite`,
              animationDelay: item.delay,
            }}>
              {item.icon}
            </div>
          ))}
          
          {/* Centered Decorative Line with Crown */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}>
            {/* Left Line */}
            <div style={{
              width: '100px',
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${colors.richGold})`,
            }} />
            
            {/* Crown Icon */}
            <div style={{
              fontSize: '28px',
              color: colors.richGold,
              animation: 'floatGlow 3s ease-in-out infinite',
            }}>♛</div>
            
            {/* Decorative Text */}
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '13px',
              letterSpacing: '6px',
              color: colors.white,
              textTransform: 'uppercase',
            }}>
              Elegance in Every Moment
            </span>
            
            {/* Crown Icon */}
            <div style={{
              fontSize: '28px',
              color: colors.richGold,
              animation: 'floatGlow 3s ease-in-out infinite',
              animationDelay: '0.5s',
            }}>♛</div>
            
            {/* Right Line */}
            <div style={{
              width: '100px',
              height: '1px',
              background: `linear-gradient(90deg, ${colors.richGold}, transparent)`,
            }} />
          </div>
        </section>

        {/* Services Section - Gallery + Two Column List */}
        <section id="services" style={{ padding: '100px 40px', background: colors.softCream }}>
          <style>{`
            .service-row:hover { background: rgba(194,37,91,0.08); }
          `}</style>
          
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: "#C2185B", marginBottom: '12px', display: 'block', fontWeight: 600 }}>
                What We Offer
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 44px)', color: colors.text }}>
                Signature Services
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
              {/* Left - Image Gallery (Hero Style) */}
              <div style={{
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '20px',
                padding: '15px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '8px',
                border: '1px solid rgba(194,37,91,0.2)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}>
                {[
                  { src: "/images/bride_photo_1.png", rotate: '-3deg', top: '-4px' },
                  { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '2deg', top: '2px' },
                  { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-1deg', top: '-6px' },
                  { src: "/images/2a45382ff49b2d7afd925c17839187c2.jpg", rotate: '3deg', top: '1px' },
                  { src: "/images/2fa14c4153aa017985532c54a0200041.jpg", rotate: '-2deg', top: '-2px' },
                  { src: "/images/premium_photo-1703483854398-93409ce5a9d9.avif", rotate: '1deg', top: '3px' },
                  { src: "/images/bride_photo_1.png", rotate: '-4deg', top: '-1px' },
                  { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '2deg', top: '3px' },
                  { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-1deg', top: '-5px' },
                ].map((img, i) => (
                  <div key={i} style={{
                    position: 'relative',
                    top: img.top,
                    transform: `rotate(${img.rotate})`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    aspectRatio: '1/1',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${img.rotate}) scale(1)`}
                  >
                    <img 
                      src={img.src} 
                      alt={`Service ${i+1}`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Right - Two Column Services List with Filters */}
              <div>
                {/* Filters */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '20px',
                          border: activeCategory === cat.id ? '1px solid #C2185B' : '1px solid #ddd',
                          background: activeCategory === cat.id ? "#C2185B" : 'transparent',
                          color: activeCategory === cat.id ? colors.white : colors.text,
                          fontSize: '11px',
                          fontWeight: 500,
                          cursor: 'pointer',
                        }}
                      >
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '16px',
                        border: '1px solid #ddd',
                        background: colors.white,
                        fontSize: '11px',
                        width: '100px',
                        outline: 'none',
                      }}
                    />
                    <select
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '16px',
                        border: '1px solid #ddd',
                        background: colors.white,
                        fontSize: '11px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="all">All</option>
                      <option value="0-500">&lt;৳500</option>
                      <option value="500-1000">৳500+</option>
                      <option value="1000-2000">৳1000+</option>
                      <option value="2000+">৳2000+</option>
                    </select>
                  </div>
                </div>

                {/* Two Column Services List */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '8px',
                  maxHeight: '340px',
                  overflowY: 'auto',
                }}>
                  {servicesData[activeCategory]
                    ?.filter(s => {
                      const matchesSearch = searchQuery === "" || s.name.toLowerCase().includes(searchQuery.toLowerCase());
                      const matchesPrice = priceFilter === "all" || (priceFilter === "0-500" && s.price < 500) ||
                        (priceFilter === "500-1000" && s.price >= 500 && s.price < 1000) ||
                        (priceFilter === "1000-2000" && s.price >= 1000 && s.price < 2000) ||
                        (priceFilter === "2000+" && s.price >= 2000);
                      return matchesSearch && matchesPrice;
                    })
                    .map((service) => (
                      <div key={service.code} className="service-row" style={{
                        padding: '10px 12px',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'background 0.2s ease',
                      }}>
                        <div>
                          <span style={{ fontSize: '10px', color: "#C2185B", fontWeight: 600 }}>{service.code}</span>
                          <span style={{ fontSize: '12px', color: colors.text, display: 'block' }}>{service.name}</span>
                        </div>
                        <span style={{ fontSize: '13px', color: colors.richGold, fontWeight: 700 }}>
                          {service.price ? `৳${service.price}` : '—'}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Results Count */}
                <div style={{ marginTop: '16px', fontSize: '12px', color: colors.muted }}>
                  {servicesData[activeCategory]?.filter(s => {
                    const matchesSearch = searchQuery === "" || s.name.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesPrice = priceFilter === "all" || (priceFilter === "0-500" && s.price < 500) ||
                      (priceFilter === "500-1000" && s.price >= 500 && s.price < 1000) ||
                      (priceFilter === "1000-2000" && s.price >= 1000 && s.price < 2000) ||
                      (priceFilter === "2000+" && s.price >= 2000);
                    return matchesSearch && matchesPrice;
                  }).length} services found
                </div>

                <div style={{ marginTop: '16px' }}>
                  <Link href="/services" style={{
                    color: "#C2185B",
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    borderBottom: '1px solid #C2185B',
                  }}>
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section - Legacy Banner */}
        <section style={{ 
          padding: '100px 40px', 
          background: `linear-gradient(135deg, ${colors.dark} 0%, #1a1a1a 100%)`, 
          position: 'relative', 
          overflow: 'hidden' 
        }}>
          <style>{`
            @keyframes badgeFloat {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(2deg); }
            }
            @keyframes shine {
              0% { left: -100%; }
              100% { left: 100%; }
            }
            .legacy-card {
              transition: all 0.4s ease;
            }
            .legacy-card:hover {
              transform: translateY(-5px);
            }
            .shine-effect {
              animation: shine 3s ease-in-out infinite;
            }
          `}</style>
          
          {/* Floating Decorative Elements */}
          {[
            { icon: '✦', left: '5%', top: '10%', size: '32px', delay: '0s' },
            { icon: '❋', right: '8%', top: '15%', size: '28px', delay: '0.5s' },
            { icon: '⟡', left: '12%', bottom: '20%', size: '24px', delay: '1s' },
            { icon: '✧', right: '15%', bottom: '10%', size: '36px', delay: '1.5s' },
          ].map((item, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: item.left,
              right: item.right,
              top: item.top,
              bottom: item.bottom,
              fontSize: item.size,
              color: colors.richGold,
              opacity: 0.15,
              animation: `badgeFloat 4s ease-in-out infinite`,
              animationDelay: item.delay,
            }}>
              {item.icon}
            </div>
          ))}
          
          {/* Main Banner */}
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            {/* Top Crown Decorations */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '36px', color: colors.richGold, margin: '0 8px' }}>♛</span>
              <span style={{ fontSize: '36px', color: colors.richGold, margin: '0 8px' }}>♛</span>
            </div>
            
            {/* Main Headline */}
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: 'clamp(32px, 5vw, 52px)', 
              color: colors.white,
              textAlign: 'center',
              marginBottom: '16px',
              lineHeight: 1.3,
            }}>
              9 Years of <span style={{ color: colors.richGold }}>Trust</span> in Sylhet
            </h2>
            
            {/* Subtitle */}
            <p style={{ 
              fontSize: '15px', 
              color: colors.muted, 
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}>
              Since 2016, we've built our reputation on one principle — complete customer satisfaction. Every smile, every transformation, is our legacy.
            </p>

            {/* Three Pillars */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px',
              marginBottom: '40px',
            }}>
              {[
                { 
                  title: "500+", 
                  subtitle: "Happy Clients", 
                  desc: "Who trusted us with their beauty",
                  icon: "✓"
                },
                { 
                  title: "100%", 
                  subtitle: "Satisfaction", 
                  desc: "Our only acceptable outcome",
                  icon: "✓"
                },
                { 
                  title: "9+", 
                  subtitle: "Years Strong", 
                  desc: "Sylhet's beauty journey with you",
                  icon: "✓"
                },
              ].map((item, i) => (
                <div key={i} className="legacy-card" style={{
                  textAlign: 'center',
                  padding: '28px 20px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(212,175,55,0.2)`,
                }}>
                  <div style={{ 
                    fontSize: '36px', 
                    fontFamily: "'Playfair Display', serif",
                    color: colors.richGold,
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '15px', color: colors.white, fontWeight: 600, marginBottom: '4px' }}>
                    {item.subtitle}
                  </div>
                  <div style={{ fontSize: '12px', color: colors.muted }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Declaration */}
            <div style={{ 
              textAlign: 'center',
              padding: '24px',
              borderTop: `1px solid ${colors.richGold}30`,
              borderBottom: `1px solid ${colors.richGold}30`,
            }}>
              <p style={{ fontSize: '14px', color: colors.muted, letterSpacing: '2px' }}>
                <span style={{ color: colors.richGold, marginRight: '8px' }}>❋</span>
                BECAUSE YOUR TRUST IS OUR CROWN
                <span style={{ color: colors.richGold, marginLeft: '8px' }}>❋</span>
              </p>
            </div>
            
            {/* Bottom Crown Decorations */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <span style={{ fontSize: '24px', color: colors.richGold, margin: '0 8px', opacity: 0.6 }}>♛</span>
            </div>
          </div>
        </section>

        {/* Gallery Section - Floating Polaroid Wall */}
        <section style={{ padding: '120px 40px', background: colors.white, position: 'relative', overflow: 'hidden', minHeight: '800px' }}>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(var(--rotate)); }
              50% { transform: translateY(-20px) rotate(var(--rotate)); }
            }
            @keyframes shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            .polaroid {
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
            }
            .polaroid:hover {
              transform: rotate(0deg) scale(1.15) translateY(-10px) !important;
              box-shadow: 0 30px 60px rgba(0,0,0,0.3) !important;
              z-index: 100 !important;
            }
            .polaroid::before {
              content: '';
              position: absolute;
              top: -15px;
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
              height: 20px;
              background: rgba(200, 200, 200, 0.7);
              border-radius: 2px;
              z-index: 10;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .polaroid img {
              transition: transform 0.4s ease;
            }
            .polaroid:hover img {
              transform: scale(1.05);
            }
            .gallery-glow {
              animation: shimmer 3s linear infinite;
              background: linear-gradient(90deg, transparent, rgba(194,37,91,0.1), transparent);
              background-size: 200% 100%;
            }
          `}</style>
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: "#C2185B", marginBottom: '16px', display: 'block' }}>
                Our Work
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 48px)', color: colors.text }}>
                Moments of Magic
              </h2>
            </div>

            {/* Floating Polaroid Wall */}
            <div style={{ position: 'relative', height: '600px' }}>
              {[
                { src: "/images/bride_photo_1.png", rotate: '-12deg', top: '5%', left: '3%', width: '180px', delay: '0s' },
                { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '8deg', top: '8%', left: '18%', width: '200px', delay: '0.2s' },
                { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-5deg', top: '3%', left: '38%', width: '160px', delay: '0.4s' },
                { src: "/images/2a45382ff49b2d7afd925c17839187c2.jpg", rotate: '10deg', top: '12%', left: '55%', width: '190px', delay: '0.1s' },
                { src: "/images/2fa14c4153aa017985532c54a0200041.jpg", rotate: '-7deg', top: '5%', left: '75%', width: '175px', delay: '0.3s' },
                { src: "/images/premium_photo-1703483854398-93409ce5a9d9.avif", rotate: '3deg', top: '15%', left: '88%', width: '140px', delay: '0.5s' },
                { src: "/images/bride_photo_1.png", rotate: '-9deg', top: '35%', left: '5%', width: '170px', delay: '0.6s' },
                { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '6deg', top: '40%', left: '22%', width: '185px', delay: '0.15s' },
                { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-3deg', top: '38%', left: '42%', width: '155px', delay: '0.35s' },
                { src: "/images/2a45382ff49b2d7afd925c17839187c2.jpg", rotate: '12deg', top: '45%', left: '60%', width: '195px', delay: '0.25s' },
                { src: "/images/2fa14c4153aa017985532c54a0200041.jpg", rotate: '-6deg', top: '35%', left: '80%', width: '150px', delay: '0.45s' },
                { src: "/images/premium_photo-1703483854398-93409ce5a9d9.avif", rotate: '4deg', top: '55%', left: '2%', width: '165px', delay: '0.55s' },
                { src: "/images/bride_photo_1.png", rotate: '-11deg', top: '65%', left: '18%', width: '180px', delay: '0.7s' },
                { src: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp", rotate: '7deg', top: '70%', left: '38%', width: '170px', delay: '0.2s' },
                { src: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg", rotate: '-4deg', top: '60%', left: '58%', width: '145px', delay: '0.4s' },
                { src: "/images/2a45382ff49b2d7afd925c17839187c2.jpg", rotate: '9deg', top: '75%', left: '78%', width: '185px', delay: '0.1s' },
                { src: "/images/2fa14c4153aa017985532c54a0200041.jpg", rotate: '-8deg', top: '55%', left: '85%', width: '130px', delay: '0.3s' },
                { src: "/images/premium_photo-1703483854398-93409ce5a9d9.avif", rotate: '5deg', top: '80%', left: '8%', width: '155px', delay: '0.5s' },
              ].map((img, i) => (
                <div 
                  key={i} 
                  className="polaroid"
                  style={{
                    position: 'absolute',
                    top: img.top,
                    left: img.left,
                    width: img.width,
                    padding: '12px 12px 35px 12px',
                    background: '#fff',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    transform: `rotate(${img.rotate})`,
                    '--rotate': img.rotate,
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: img.delay,
                  }}
                >
                  <div style={{ 
                    width: '100%', 
                    aspectRatio: '1/1', 
                    overflow: 'hidden',
                    borderRadius: '2px',
                  }}>
                    <img 
                      src={img.src} 
                      alt={`Work ${i+1}`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(194,37,91,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Link href="/gallery" style={{
                background: '#C2185B',
                color: colors.white,
                padding: '14px 32px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(194,37,91,0.3)',
              }}>
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials - Dark with Quote Cards */}
        <section style={{ padding: '100px 40px', background: colors.dark, position: 'relative', overflow: 'hidden' }}>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .testimonial-card {
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .testimonial-card:hover {
              transform: translateY(-10px) scale(1.02);
            }
            .quote-fade {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 400px;
              font-family: 'Playfair Display', serif;
              color: rgba(194,37,91,0.08);
              pointer-events: none;
              z-index: 0;
            }
          `}</style>
          
          <div className="quote-fade">"</div>
          
          <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: "#C2185B", marginBottom: '12px', display: 'block' }}>
                Testimonials
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 44px)', color: colors.white }}>
                What Our <span style={{ color: colors.richGold }}>Clients</span> Say
              </h2>
            </div>

            {/* Horizontal Scrolling Carousel */}
            <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', padding: '20px 0', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                div[style*="overflow-x: auto"]::-webkit-scrollbar { display: none; }
              `}</style>
              {[
                { name: "Sarah Ahmed", text: "Amazing experience! The bridal makeup was flawless. Made me look like a princess on my big day. Highly recommend!", rating: 5, service: "Bridal Makeup" },
                { name: "Fatima Khan", text: "Best beauty salon in Sylhet. Professional staff and excellent services. The spa treatment was divine!", rating: 5, service: "Full Body Spa" },
                { name: "Ayesha Rahman", text: "Love the ambiance and the staff. My facial treatment was relaxing and the results are amazing. Will come again!", rating: 5, service: "Facial" },
                { name: "Nusrat Jahan", text: "Their expertise is unmatched. Got the perfect haircut and styling for my wedding. Thank you FEmmE!", rating: 5, service: "Hair Styling" },
                { name: "Mariam Akter", text: "Excellent service! The staff is very caring and professional. My skin has never looked better.", rating: 5, service: "Skin Care" },
                { name: "Rashida Begum", text: "The best investment for self-care. Thai massage was heavenly. Total relaxation experience!", rating: 5, service: "Thai Massage" },
              ].map((review, i) => (
                <div key={i} className="testimonial-card" style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '32px',
                  borderRadius: '20px',
                  minWidth: '340px',
                  maxWidth: '340px',
                  border: '1px solid rgba(212,175,55,0.2)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                }}>
                  {/* Quote Icon */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    right: '24px', 
                    fontSize: '48px', 
                    color: colors.richGold,
                    opacity: 0.3,
                    fontFamily: 'serif',
                  }}>"</div>
                  
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} style={{ color: colors.richGold, fontSize: '16px' }}>★</span>
                    ))}
                  </div>
                  
                  {/* Service Tag */}
                  <div style={{ 
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(194,37,91,0.2)',
                    color: '#E91E63',
                    fontSize: '11px',
                    fontWeight: 600,
                    marginBottom: '16px',
                    letterSpacing: '1px',
                  }}>
                    {review.service}
                  </div>
                  
                  <p style={{ fontSize: '15px', color: '#cccccc', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                    "{review.text}"
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '44px', 
                      height: '44px', 
                      borderRadius: '50%', 
                      background: `linear-gradient(135deg, ${colors.deepRose}, ${colors.royalPink})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.white,
                      fontSize: '16px',
                      fontWeight: 600,
                    }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <p style={{ fontSize: '15px', color: colors.white, fontWeight: 600 }}>{review.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === 0 ? colors.richGold : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Dark */}
        <section style={{ padding: '100px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: "#C2185B", marginBottom: '12px', display: 'block' }}>
                Get In Touch
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 44px)', color: colors.white }}>
                Start Your <span style={{ color: colors.richGold }}>Journey</span> Today
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
              <div style={{ background: colors.white, padding: '32px', borderRadius: '20px', borderTop: `3px solid ${colors.richGold}` }}>
                <h3 style={{ fontSize: '18px', color: colors.text, marginBottom: '20px' }}>Send a Message</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input type="text" placeholder="Your Name" style={{ 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: `1px solid ${colors.champagne}`,
                    background: colors.softCream,
                    color: colors.text,
                    fontSize: '14px',
                  }} />
                  <input type="tel" placeholder="Phone Number" style={{ 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: `1px solid ${colors.champagne}`,
                    background: colors.softCream,
                    color: colors.text,
                    fontSize: '14px',
                  }} />
                  <textarea placeholder="Your Message" rows={4} style={{ 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: `1px solid ${colors.champagne}`,
                    background: colors.softCream,
                    color: colors.text,
                    fontSize: '14px',
                    resize: 'none',
                  }} />
                  <button style={{
                    background: '#C2185B',
                    color: colors.white,
                    padding: '14px 24px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                  }}>
                    Send Message
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {[
                    { icon: "📍", label: "Location", value: "Sylhet, Bangladesh" },
                    { icon: "📧", label: "Email", value: "hello@femmebd.com" },
                    { icon: "📞", label: "Phone", value: "+880 XXX XXXXXX" },
                    { icon: "🕘", label: "Hours", value: "9AM - 5PM" },
                  ].map((item, i) => (
                    <div key={i} style={{ background: colors.white, padding: '16px', borderRadius: '12px' }}>
                      <p style={{ fontSize: '12px', color: "#C2185B", marginBottom: '4px' }}>{item.icon} {item.label}</p>
                      <p style={{ fontSize: '14px', color: colors.text }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: `1px solid ${colors.richGold}30` }}>
                  <p style={{ fontSize: '14px', color: "#C2185B", marginBottom: '8px' }}>Cancellation Policy</p>
                  <p style={{ fontSize: '13px', color: '#aaaaaa', lineHeight: 1.6 }}>
                    Cancellations accepted up to 24 hours before your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
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
            <img src={lightboxImg} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} />
          </div>
        )}

      </main>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        :target { scroll-margin-top: 70px; }
      `}</style>
      
      <Footer />
    </>
  );
}