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
      padding: '0 40px',
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(7,7,7,0.9)',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{
          textDecoration: 'none',
        }}>
          <img src="/images/logo.jpg" alt="FEmmE" style={{ height: '40px', objectFit: 'contain' }} />
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
                  color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#fff' }}>
          <span>📞</span>
          <span style={{ letterSpacing: '1px' }}>01342366756</span>
        </div>
      </div>
    </nav>
  );
}