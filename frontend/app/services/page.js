'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  pink: "#e88a9f",
  text: "#f5f5f5",
  muted: "#8a8a9a",
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

  return (
    <>
      <Navbar />
      <main style={{ background: colors.darker, color: colors.text }}>
        {/* Services Section */}
        <section style={{ padding: '160px 60px 80px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: colors.pink, marginBottom: '8px', display: 'block' }}>
                What We Offer
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 36px)', color: colors.text }}>
                Price List
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
                  color: colors.text,
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
                    <span style={{ fontSize: '12px', color: colors.text }}>{service.name}</span>
                    <span style={{ fontSize: '12px', color: service.price ? colors.gold : colors.muted, textAlign: 'right' }}>
                      {service.price ? `৳ ${service.price}` : '—'}
                    </span>
                  </div>
                ))}
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