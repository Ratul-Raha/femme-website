'use client';
import { useState } from 'react';
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

const allImages = [
  { id: 1, cat: 'makeup', img: "/images/bride_photo_1.png" },
  { id: 2, cat: 'makeup', img: "/images/Traditional_Bengali_Bridal_Makeup_480x480.webp" },
  { id: 3, cat: 'makeup', img: "/images/2a45382ff49b2d7afd925c17839187c2.jpg" },
  { id: 4, cat: 'makeup', img: "/images/b1accacdf8af9c27cedc4dcb7578cf98.jpg" },
  { id: 5, cat: 'makeup', img: "/images/2fa14c4153aa017985532c54a0200041.jpg" },
  { id: 6, cat: 'makeup', img: "/images/premium_photo-1703483854398-93409ce5a9d9.avif" },
  { id: 7, cat: 'makeup', img: "/images/photo-1737515008725-8ce038ff5955.avif" },
  { id: 8, cat: 'makeup', img: "/images/bride_photo_1.png" },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'makeup', name: 'Makeup' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = filter === 'all' ? allImages : allImages.filter(img => img.cat === filter);

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
            background: `radial-gradient(circle, ${colors.gold}10 0%, transparent 60%)`,
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
              Our Work
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 400,
              color: colors.text,
              marginBottom: '20px',
            }}>
              <span style={{ color: colors.text }}>Our </span><span style={{ color: colors.pink, fontStyle: 'italic' }}>Gallery</span>
            </h1>
            <p style={{
              fontSize: '15px',
              color: colors.muted,
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Browse our transformations across makeup, hair, skin & more.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section style={{ padding: '40px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map(f => (
                <button 
                  key={f.id} 
                  onClick={() => setFilter(f.id)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '30px',
                    border: filter === f.id ? `1px solid ${colors.pink}` : `1px solid ${colors.gold}40`,
                    background: filter === f.id ? colors.pink : 'transparent',
                    color: filter === f.id ? colors.darker : colors.muted,
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: '60px 60px 100px', background: colors.dark }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {filtered.map((img, i) => (
                <div 
                  key={img.id}
                  onClick={() => setLightboxImg(img.img)}
                  style={{
                    height: i % 3 === 0 ? '320px' : '260px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={img.img} 
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
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
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>

      <Footer />
    </>
  );
}