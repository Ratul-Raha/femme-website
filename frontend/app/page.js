'use client';
import { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState("facial");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <>
      <Navbar />
<style>{`
            @keyframes waterFlow {
              0% { background-position: 0% 50%; }
              25% { background-position: 100% 25%; }
              50% { background-position: 100% 75%; }
              75% { background-position: 0% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes waveMove {
              0% { background-position: 0% 50%; }
              25% { background-position: 100% 25%; }
              50% { background-position: 100% 75%; }
              75% { background-position: 0% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        <main style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #ffffff 0%, #fefefe 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(166,39,174,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(166,39,174,0.06) 0%, transparent 50%)', backgroundSize: '200% 200%', animation: 'waterFlow 10s ease-in-out infinite' }} />
        
        {/* Hero Section - Full Screen Image */}
        <section style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'url(/images/01.jpg) center/cover no-repeat',
          paddingTop: '90px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.88) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(166,39,174,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(166,39,174,0.04) 0%, transparent 50%)', backgroundSize: '200% 200%', animation: 'waveMove 10s ease-in-out infinite' }} />
          
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            padding: '120px 0',
          }}>
            <div>
<div style={{
                fontSize: '12px',
                letterSpacing: '3px',
                color: "#666",
                marginBottom: '24px',
              }}>
                beauty . lifestyle . care
              </div>
               
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(42px, 6vw, 64px)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: '#1a1a1a',
                marginBottom: '24px',
              }}>
                Where Beauty <span style={{ color: '#D4AF37' }}>Meets</span>
                <br /><span style={{ color: "#A627AE", fontStyle: 'italic' }}>Royal Care</span>
              </h1>
               
              <p style={{
                fontSize: '16px',
                color: '#555',
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
                    background: '#A627AE',
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
                    color: '#1a1a1a',
                    border: '1px solid #A627AE',
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
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
              {/* Sticky Notes Grid */}
              <div style={{
                width: '420px',
                height: '420px',
                background: 'rgba(166,39,174,0.04)',
                borderRadius: '20px',
                padding: '15px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '10px',
                border: '1px solid #A627AE30',
                backdropFilter: 'blur(10px)',
              }}>
                {[
                  { src: "/images/01.jpg", rotate: '-3deg', top: '-5px' },
                  { src: "/images/02.jpg", rotate: '2deg', top: '3px' },
                  { src: "/images/03.jpg", rotate: '-1deg', top: '-8px' },
                  { src: "/images/04.jpg", rotate: '4deg', top: '2px' },
                  { src: "/images/05.jpg", rotate: '-2deg', top: '-3px' },
                  { src: "/images/06.jpg", rotate: '1deg', top: '5px' },
                  { src: "/images/07.jpg", rotate: '-4deg', top: '-2px' },
                  { src: "/images/08.jpg", rotate: '3deg', top: '4px' },
                  null,
                ].map((img, i) => img === null ? (
                    <div key={i} style={{
                      background: 'rgba(166,39,174,0.1)',
                      borderRadius: '8px',
                      border: '2px dashed #A627AE30',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: '24px', color: '#A627AE60' }}>+</span>
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
        <section id="services" style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
          <style>{`
            .service-row:hover { background: rgba(194,45,204,0.08); }
            @keyframes waveMove {
              0% { background-position: 0% 50%; }
              25% { background-position: 100% 25%; }
              50% { background-position: 100% 75%; }
              75% { background-position: 0% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f8f8f8 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%, rgba(194,45,204,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(194,45,204,0.08) 0%, transparent 40%)', backgroundSize: '200% 200%', animation: 'waveMove 10s ease-in-out infinite' }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
background: 'rgba(255,255,255,0.9)',
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
                  { src: "/images/01.jpg", rotate: '-3deg', top: '-4px' },
                  { src: "/images/02.jpg", rotate: '2deg', top: '2px' },
                  { src: "/images/03.jpg", rotate: '-1deg', top: '-6px' },
                  { src: "/images/04.jpg", rotate: '3deg', top: '1px' },
                  { src: "/images/05.jpg", rotate: '-2deg', top: '-2px' },
                  { src: "/images/06.jpg", rotate: '1deg', top: '3px' },
                  { src: "/images/07.jpg", rotate: '-4deg', top: '-1px' },
                  { src: "/images/08.jpg", rotate: '2deg', top: '3px' },
                  { src: "/images/09.jpg", rotate: '-1deg', top: '-5px' },
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
              <div style={{ padding: '20px', minHeight: '400px' }}>
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
              fontSize: '20px',
              color: colors.richGold,
              opacity: 0.4,
              animation: `floatGlow 4s ease-in-out infinite`,
              animationDelay: item.delay,
            }}>
              {item.icon}
            </div>
          ))}
          
          {/* Center Content */}
          <div style={{ 
            position: 'relative', 
            zIndex: 2, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '16px' 
          }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#fff', letterSpacing: '4px' }}>Beauty . Lifestyle . Care</span>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {["✦", "✧", "✦"].map((s, i) => (
                  <span key={i} style={{ color: colors.richGold, fontSize: '10px', letterSpacing: '2px' }}>{s}</span>
                ))}
              </div>
              <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
            </div>
          </div>
        </section>
        
        {/* Gallery Section - Split Screen */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '60vh', background: colors.white }}>
          {/* Left: Before/After Slider */}
          <div style={{ position: 'relative', background: '#000', height: '100%', width: '100%' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const pos = Math.max(0, Math.min(100, x));
            const slider = document.getElementById('slider-pos');
            const afterImg = document.getElementById('after-img');
            if (slider && afterImg) {
              slider.style.left = pos + '%';
              afterImg.style.clipPath = `inset(0 0 0 ${pos}%)`;
            }
          }}>
            <img src="/images/before.jpg" alt="Before" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
            <img src="/images/after.jpg" alt="After" id="after-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', clipPath: 'inset(0 0 0 50%)', pointerEvents: 'none' }} />
            <div id="slider-pos" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 4, background: '#fff', transform: 'translateX(-50%)', zIndex: 10, cursor: 'ew-resize' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 48, height: 48, background: 'linear-gradient(135deg, #C22DCC, #C22DCC)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                <span style={{ color: '#fff', fontSize: 18 }}>↔</span>
              </div>
            </div>
            <span style={{ position: 'absolute', bottom: 20, left: 20, padding: '6px 14px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: 12, fontWeight: 600, borderRadius: 20 }}>BEFORE</span>
            <span style={{ position: 'absolute', bottom: 20, right: 20, padding: '6px 14px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: 12, fontWeight: 600, borderRadius: 20 }}>AFTER</span>
          </div>

          {/* Right: Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 2, overflow: 'hidden' }}>
            {[
              "/images/01.jpg", "/images/02.jpg", "/images/03.jpg", "/images/04.jpg",
              "/images/05.jpg", "/images/06.jpg", "/images/07.jpg", "/images/08.jpg",
              "/images/09.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg",
            ].map((src, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', minHeight: '120px' }}>
                <img src={src} alt={`${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                >
                  <span style={{ color: '#fff', fontSize: 24, marginBottom: 8 }}>👁</span>
                  <span style={{ color: '#fff', fontSize: 12, letterSpacing: '1px' }}>VIEW</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Royal Section Separator */}
        <section style={{ position: 'relative', padding: '60px 40px', background: '#070507', overflow: 'hidden' }}>
          <style>{`
            @keyframes floatGlow {
              0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
              50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
            }
          `}</style>
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            <div style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <div style={{ fontSize: '28px', color: '#D4AF37', animation: 'floatGlow 3s ease-in-out infinite' }}>✦</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', letterSpacing: '6px', color: '#fff', textTransform: 'uppercase' }}>Elegance in Every Moment</span>
            <div style={{ fontSize: '28px', color: '#D4AF37', animation: 'floatGlow 3s ease-in-out infinite', animationDelay: '0.5s' }}>✦</div>
            <div style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>
        </section>

        {/* Testimonials - White with Wave Animation */}
        <section style={{ padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
          <style>{`
            @keyframes waveMove {
              0% { background-position: 0% 50%; }
              25% { background-position: 100% 25%; }
              50% { background-position: 100% 75%; }
              75% { background-position: 0% 50%; }
              100% { background-position: 0% 50%; }
            }
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
              top: 35%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 280px;
              font-family: 'Playfair Display', serif;
              color: rgba(194,45,204,0.06);
              pointer-events: none;
              z-index: 0;
            }
          `}</style>
          
          <div className="quote-fade">"</div>
          
          {/* Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f8f8f8 100%)',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(194,45,204,0.08) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(194,45,204,0.06) 0%, transparent 40%)',
            backgroundSize: '200% 200%',
            animation: 'waveMove 10s ease-in-out infinite',
          }} />
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: "#C2185B", marginBottom: '12px', display: 'block' }}>
                Testimonials
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 4vw, 32px)', color: '#111' }}>
                What Our <span style={{ color: '#C22DCC' }}>Clients</span> Say
              </h2>
            </div>

            {/* Horizontal Scrolling Carousel */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: -320, behavior: 'smooth' })}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: '1px solid rgba(194,45,204,0.2)',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  fontSize: '18px',
                  color: '#C22DCC',
                }}
              >‹</button>
              <button 
                onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: 320, behavior: 'smooth' })}
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#fff',
                  border: '1px solid rgba(194,45,204,0.2)',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  fontSize: '18px',
                  color: '#C22DCC',
                }}
              >›</button>
              <div id="testimonial-scroll" style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '12px 24px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
background: '#fff',
                  padding: '24px',
                  borderRadius: '16px',
                  minWidth: '300px',
                  maxWidth: '300px',
                  border: '1px solid rgba(194,45,204,0.15)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  position: 'relative',
                }}>
                  {/* Quote Icon */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    right: '24px', 
                    fontSize: '48px', 
                    color: '#C22DCC',
                    opacity: 0.2,
                    fontFamily: 'serif',
                  }}>"</div>
                  
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} style={{ color: '#C22DCC', fontSize: '16px' }}>★</span>
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
                  
<p style={{ fontSize: '14px', color: '#444', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #C22DCC, #C22DCC)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', color: '#111', fontWeight: 600 }}>{review.name}</p>
                  </div>
                </div>
                </div>
              ))}
            </div>
            </div>
            
            {/* Navigation Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === 0 ? '#C22DCC' : 'rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                }} />
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
            @keyframes floatGlow {
              0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
              50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
            }
          `}</style>
          
          <div style={{ 
            position: 'relative', 
            zIndex: 2, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '16px' 
          }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#fff', letterSpacing: '4px' }}>Beauty . Lifestyle . Care</span>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {["✦", "✧", "✦"].map((s, i) => (
                  <span key={i} style={{ color: colors.richGold, fontSize: '10px', letterSpacing: '2px' }}>{s}</span>
                ))}
              </div>
              <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} />
            </div>
          </div>
        </section>

        {/* Contact Section - With Gradient Animation */}
        <section style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
          <style>{`
            @keyframes waveMove {
              0% { background-position: 0% 50%; }
              25% { background-position: 100% 25%; }
              50% { background-position: 100% 75%; }
              75% { background-position: 0% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f8f8f8 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%, rgba(166,39,174,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(166,39,174,0.08) 0%, transparent 40%)', backgroundSize: '200% 200%', animation: 'waveMove 10s ease-in-out infinite' }} />
          
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: "#A627AE", marginBottom: '12px', display: 'block', fontWeight: 600 }}>
                Get In Touch
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 44px)', color: '#1a1a1a' }}>
                Start Your <span style={{ color: '#A627AE' }}>Journey</span> Today
              </h2>
              <p style={{ fontSize: '15px', color: '#666', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                Book your appointment or reach out for any inquiries. We're here to help you look and feel your best.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px', alignItems: 'start' }}>
              {/* Contact Info */}
              <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(166,39,174,0.2)' }}>
                <h3 style={{ fontSize: '18px', color: '#1a1a1a', marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(166,39,174,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '18px' }}>📍</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#A627AE', fontWeight: 600, marginBottom: '2px' }}>Location</p>
                      <p style={{ fontSize: '14px', color: '#333' }}>Sylhet, Bangladesh</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(166,39,174,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '18px' }}>📧</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#A627AE', fontWeight: 600, marginBottom: '2px' }}>Email</p>
                      <p style={{ fontSize: '14px', color: '#333' }}>hello@femmebd.com</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(166,39,174,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '18px' }}>📞</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#A627AE', fontWeight: 600, marginBottom: '2px' }}>Phone</p>
                      <p style={{ fontSize: '14px', color: '#333' }}>+880 XXX XXXXXX</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(166,39,174,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '18px' }}>🕘</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#A627AE', fontWeight: 600, marginBottom: '2px' }}>Hours</p>
                      <p style={{ fontSize: '14px', color: '#333' }}>Daily: 9AM - 8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div style={{ background: '#fff', padding: '32px', borderRadius: '20px', borderTop: '3px solid #A627AE' }}>
                <h3 style={{ fontSize: '18px', color: '#1a1a1a', marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>Send a Message</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'stretch' }}>
                  <input type="text" placeholder="Your Name" style={{ 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(166,39,174,0.3)',
                    background: '#fafafa',
                    color: '#333',
                    fontSize: '14px',
                    outline: 'none',
                  }} />
                  <input type="tel" placeholder="Phone Number" style={{ 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(166,39,174,0.3)',
                    background: '#fafafa',
                    color: '#333',
                    fontSize: '14px',
                  }} />
                  <textarea placeholder="Your Message" rows={4} style={{ 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(166,39,174,0.3)',
                    background: '#fafafa',
                    color: '#333',
                    fontSize: '14px',
                    resize: 'none',
                    outline: 'none',
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                  <button style={{
                    background: '#A627AE',
                    color: '#fff',
                    padding: '12px 28px',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                  }}>
                    Send Message
                  </button>
                </div>
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