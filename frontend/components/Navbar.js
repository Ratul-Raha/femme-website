'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

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
      background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(10,10,15,0.9) 35%, rgba(5,5,10,0.88) 50%, rgba(15,15,20,0.85) 65%, rgba(0,0,0,0.8) 100%)',
      backgroundSize: '300% 100%',
      animation: 'aquariumWave 6s ease-in-out infinite',
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
          color: '#D4AF37',
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
                  color: isActive ? '#C2185B' : '#FFF8F2',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  borderBottom: isActive ? '2px solid #C2185B' : '2px solid transparent',
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
          background: '#D4AF37',
          color: '#111',
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

      <style>{`
        @keyframes aquariumWave {
          0% { background-position: 0% 0%; }
          25% { background-position: 30% 10%; }
          50% { background-position: 60% 5%; }
          75% { background-position: 30% 15%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </nav>
  );
}