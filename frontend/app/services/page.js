'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const colors = {
  dark: "#111111",
  deepRose: "#C22DCC",
  royalPink: "#C22DCC",
  richGold: "#D4AF37",
  softCream: "#FFF8F2",
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

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("facial");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  return (
    <>
      <Navbar />
      <main style={{ background: colors.softCream, color: colors.text }}>
        {/* Hero Section */}
        <section style={{
          minHeight: '40vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: colors.dark,
          paddingTop: '90px',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/images/01.jpg) center/cover no-repeat',
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
            maxWidth: '800px',
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
              marginBottom: '20px',
              padding: '8px 16px',
              border: `1px solid ${colors.richGold}40`,
              borderRadius: '30px',
            }}>
              Our Services
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(38px, 6vw, 56px)',
              fontWeight: 400,
              color: colors.white,
              marginBottom: '20px',
            }}>
              Signature <span style={{ color: colors.richGold, fontStyle: 'italic' }}>Treatments</span>
            </h1>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '60px 40px 100px', background: colors.softCream }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                      border: activeCategory === cat.id ? '1px solid #C22DCC' : '1px solid #ddd',
                      background: activeCategory === cat.id ? "#C22DCC" : 'transparent',
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
              <style>{`
                .service-row:hover { background: rgba(194,37,91,0.08); }
              `}</style>
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
                      <span style={{ fontSize: '10px', color: "#C22DCC", fontWeight: 600 }}>{service.code}</span>
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

            {/* View All Link */}
            <div style={{ marginTop: '16px' }}>
              <Link href="/" style={{
                color: "#C22DCC",
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: '1px solid #C22DCC',
              }}>
                ← Back to Home
              </Link>
            </div>
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