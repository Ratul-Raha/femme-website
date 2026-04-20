'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 48px',
        height: scrolled ? '70px' : '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img 
              src="/images/logo.jpg" 
              alt="FEmmE" 
              style={{ 
                height: scrolled ? '42px' : '48px',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
              }} 
            />
          </Link>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navItems.map(item => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.name}
                  href={item.path}
                  style={{
                    fontSize: '12px',
                    color: isActive ? '#C2185B' : scrolled ? 'rgba(26,26,26,0.7)' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Link 
            href="/contact"
            style={{
              padding: '10px 26px',
              borderRadius: '30px',
              background: scrolled ? 'linear-gradient(135deg, #C2185B 0%, #E91E63 100%)' : 'rgba(255,255,255,0.15)',
              border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
          >
            Book Now
          </Link>
        </div>
      </nav>

      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          position: 'fixed',
          top: '20px',
          right: '24px',
          flexDirection: 'column',
          gap: '5px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          zIndex: 1001,
        }}
      >
        <span style={{ width: '24px', height: '2px', background: scrolled ? '#1a1a1a' : '#fff' }} />
        <span style={{ width: '24px', height: '2px', background: scrolled ? '#1a1a1a' : '#fff' }} />
        <span style={{ width: '24px', height: '2px', background: scrolled ? '#1a1a1a' : '#fff' }} />
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: '#fff',
          padding: '24px 32px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          zIndex: 999,
        }}>
          {navItems.map(item => (
            <Link 
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                fontSize: '13px',
                color: pathname === item.path ? '#C2185B' : '#1a1a1a',
                textDecoration: 'none',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav button { display: flex !important; }
        }
      `}</style>
    </>
  );
}