'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  pink: "#e88a9f",
  text: "#f5f5f5",
  muted: "#8a8a9a",
};

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');

    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: colors.darker,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{ color: colors.muted }}>Loading...</p>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Services', path: '/admin/services' },
    { name: 'Gallery', path: '/admin/gallery' },
    { name: 'Messages', path: '/admin/messages' },
    { name: 'Reviews', path: '/admin/reviews' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: colors.darker }}>
      {/* Top Navbar */}
      <nav style={{
        background: colors.dark,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <Link href="/admin/dashboard" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '24px',
          color: colors.gold,
          textDecoration: 'none',
        }}>
          FEmmE Admin
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                fontSize: '13px',
                color: colors.muted,
                textDecoration: 'none',
              }}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            style={{
              fontSize: '13px',
              color: colors.pink,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '32px' }}>
        {children}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>
    </div>
  );
}