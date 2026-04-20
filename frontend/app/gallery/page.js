'use client';
import { useState, useEffect } from 'react';
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

const allImages = [
  { id: 1, img: "/images/01.jpg" },
  { id: 2, img: "/images/02.jpg" },
  { id: 3, img: "/images/03.jpg" },
  { id: 4, img: "/images/04.jpg" },
  { id: 5, img: "/images/05.jpg" },
  { id: 6, img: "/images/01.jpg" },
  { id: 7, img: "/images/02.jpg" },
  { id: 8, img: "/images/03.jpg" },
  { id: 9, img: "/images/04.jpg" },
  { id: 10, img: "/images/05.jpg" },
  { id: 11, img: "/images/01.jpg" },
  { id: 12, img: "/images/02.jpg" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <Navbar />
      <main style={{ background: colors.softCream, color: colors.text }}>
        {/* Hero Section */}
        <section style={{
          minHeight: '50vh',
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
          
          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            fontSize: '100px',
            color: colors.richGold,
            opacity: 0.08,
          }}>✧</div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            fontSize: '80px',
            color: colors.deepRose,
            opacity: 0.1,
          }}>❋</div>

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
              marginBottom: '24px',
              padding: '8px 16px',
              border: `1px solid ${colors.richGold}40`,
              borderRadius: '30px',
            }}>
              Our Work
            </span>
            
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(42px, 6vw, 64px)',
              fontWeight: 400,
              color: colors.white,
              marginBottom: '20px',
              lineHeight: 1.2,
            }}>
              <span style={{ color: colors.white }}>Our </span>
              <span style={{ color: colors.richGold, fontStyle: 'italic' }}>Gallery</span>
            </h1>
            
            <p style={{
              fontSize: '15px',
              color: '#aaaaaa',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              Capturing beautiful moments and transformations
            </p>
</div>
        </section>

        {/* Masonry Gallery */}
        <section style={{ padding: '60px 40px 100px', background: colors.softCream }}>
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
          `}</style>
          
          {/* Section Separator */}
          <div style={{
            position: 'relative',
            padding: '40px 20px',
            marginBottom: '20px',
          }}>
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(194,37,91,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            
            <div style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}>
              <div style={{
                width: '60px',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${colors.richGold})`,
              }} />
              
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '13px',
                letterSpacing: '4px',
                color: colors.text,
                textTransform: 'uppercase',
              }}>
                ✧ Photo Gallery ✧
              </span>
              
              <div style={{
                width: '60px',
                height: '1px',
                background: `linear-gradient(90deg, ${colors.richGold}, transparent)`,
              }} />
            </div>
          </div>

          <div style={{ maxWidth: '935px', margin: '0 auto' }}>
            <style>{`
              .gallery-item {
                position: relative;
                overflow: hidden;
                border-radius: 4px;
                cursor: pointer;
              }
              .gallery-item::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
                opacity: 0;
                transition: opacity 0.4s ease;
              }
              .gallery-item:hover::after {
                opacity: 1;
              }
              .gallery-item img {
                transition: transform 0.6s ease;
              }
              .gallery-item:hover img {
                transform: scale(1.08);
              }
              .gallery-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 24px;
                z-index: 2;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.4s ease;
              }
              .gallery-item:hover .gallery-overlay {
                opacity: 1;
                transform: translateY(0);
              }
              .thumbnail-item {
                transition: all 0.3s ease;
                cursor: pointer;
                border-radius: 4px;
                overflow: hidden;
                opacity: 0.5;
              }
              .thumbnail-item:hover {
                opacity: 0.8;
              }
              .thumbnail-item.active {
                opacity: 1;
                box-shadow: 0 0 0 2px #C22DCC;
              }
            `}</style>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '4px',
              maxWidth: '935px',
              margin: '0 auto',
            }}>
            <style>{`
              .masonry-item {
                cursor: pointer;
                position: relative;
                overflow: hidden;
              }
              .masonry-item:hover .masonry-overlay {
                opacity: 1;
              }
              .masonry-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                opacity: 0;
                transition: opacity 0.3s ease;
              }
            `}</style>
              {[
                { img: "/images/01.jpg", height: '400px' },
                { img: "/images/02.jpg", height: '300px' },
                { img: "/images/03.jpg", height: '450px' },
                { img: "/images/04.jpg", height: '350px' },
                { img: "/images/05.jpg", height: '400px' },
                { img: "/images/01.jpg", height: '320px' },
                { img: "/images/02.jpg", height: '380px' },
                { img: "/images/03.jpg", height: '300px' },
                { img: "/images/04.jpg", height: '420px' },
                { img: "/images/05.jpg", height: '340px' },
                { img: "/images/01.jpg", height: '380px' },
                { img: "/images/02.jpg", height: '360px' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="masonry-item"
                  onClick={() => openLightbox(i)}
                  style={{ height: item.height }}
                >
                  <img 
                    src={item.img} 
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div className="masonry-overlay">
                    <span style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                      <span>♥</span> {Math.floor(Math.random() * 500 + 50)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Back Link */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/" style={{
                color: colors.deepRose,
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: `1px solid ${colors.deepRose}`,
              }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox with Navigation */}
        {lightboxOpen && (
          <div 
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.95)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              cursor: 'zoom-out',
            }}
          >
            {/* Close Button */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
              zIndex: 1001,
            }} onClick={closeLightbox}>✕</div>

            {/* Counter */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: '#aaa',
              fontSize: '14px',
            }}>
              {currentIndex + 1} / {allImages.length}
            </div>

            {/* Main Image with Arrows */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '20px',
              flex: 1,
              width: '100%',
              maxHeight: '70vh',
            }}>
              {/* Prev Arrow */}
              <button 
                onClick={goToPrev}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '24px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                ←
              </button>

              {/* Main Image */}
              <img 
                src={allImages[currentIndex].img} 
                alt=""
                style={{
                  maxWidth: '80%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next Arrow */}
              <button 
                onClick={goToNext}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '24px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                →
              </button>
            </div>

            {/* Thumbnails Strip */}
            <div style={{
              display: 'flex',
              gap: '8px',
              marginTop: '20px',
              padding: '10px',
              overflowX: 'auto',
              maxWidth: '90%',
            }}>
              {allImages.map((img, i) => (
                <div 
                  key={img.id}
                  className={`thumbnail-item ${i === currentIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                  }}
                  style={{
                    width: '60px',
                    height: '60px',
                    flexShrink: 0,
                  }}
                >
                  <img 
                    src={img.img} 
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              ))}
            </div>
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