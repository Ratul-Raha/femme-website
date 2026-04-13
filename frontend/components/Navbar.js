'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const colors = {
  dark: "#1a1a2e",
  purple: "#16213e",
  gold: "#e8b87d",
  goldLight: "#f0d4a8",
  pink: "#e88a9f",
  pinkLight: "#f5b8c4",
  cream: "#faf3e8",
  pink: "#f5d0de",
  rose: "#d4a5a5",
  text: "#2d2d2d",
  muted: "#8a8a9a",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '0 60px',
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: scrolled ? 'rgba(26,26,46,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '32px',
          color: colors.gold,
          textDecoration: 'none',
          letterSpacing: '2px',
        }}>
          FEmmE
        </Link>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {navItems.map(item => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name}
                href={item.path}
                style={{
                  fontSize: '13px',
                  color: isActive ? colors.pink : colors.cream,
                  textDecoration: 'none',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  borderBottom: isActive ? `2px solid ${colors.pink}` : '2px solid transparent',
                  paddingBottom: '4px',
                  transition: 'all 0.3s ease',
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" style={{
          background: colors.gold,
          color: colors.dark,
          padding: '12px 28px',
          borderRadius: '30px',
          fontSize: '13px',
          fontWeight: 600,
          textDecoration: 'none',
          letterSpacing: '1px',
        }}>
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}