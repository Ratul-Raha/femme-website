'use client';
import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  pink: "#e88a9f",
  text: "#f5f5f5",
  muted: "#8a8a9a",
};

export default function Dashboard() {
  const [stats, setStats] = useState({ services: 0, gallery: 0, messages: 0, reviews: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      const [servicesRes, galleryRes, messagesRes, reviewsRes] = await Promise.all([
        fetch('http://localhost:6000/api/services'),
        fetch('http://localhost:6000/api/gallery'),
        fetch('http://localhost:6000/api/contact', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('http://localhost:6000/api/reviews'),
      ]);

      const [services, gallery, messages, reviews] = await Promise.all([
        servicesRes.json(),
        galleryRes.json(),
        messagesRes.json(),
        reviewsRes.json(),
      ]);

      setStats({
        services: services.length,
        gallery: gallery.length,
        messages: messages.length,
        reviews: reviews.length,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: 'Services', value: stats.services, icon: '✧', color: colors.gold },
    { label: 'Gallery Images', value: stats.gallery, icon: '📷', color: colors.pink },
    { label: 'Messages', value: stats.messages, icon: '💬', color: colors.gold },
    { label: 'Reviews', value: stats.reviews, icon: '★', color: colors.pink },
  ];

  return (
    <AdminLayout>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '32px',
          color: colors.text,
          marginBottom: '8px',
        }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '14px', color: colors.muted, marginBottom: '40px' }}>
          Welcome to FEmmE Admin Portal
        </p>

        {loading ? (
          <p style={{ color: colors.muted }}>Loading...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {statCards.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: colors.purple,
                  padding: '24px',
                  borderRadius: '16px',
                }}
              >
                <span style={{ fontSize: '32px', display: 'block', marginBottom: '16px' }}>{stat.icon}</span>
                <p style={{ fontSize: '36px', fontWeight: 600, color: stat.color, marginBottom: '4px' }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '14px', color: colors.muted }}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '48px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '24px',
            color: colors.text,
            marginBottom: '24px',
          }}>
            Quick Actions
          </h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="/admin/services"
              style={{
                background: colors.pink,
                color: colors.darker,
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Manage Services
            </a>
            <a
              href="/admin/gallery"
              style={{
                background: colors.purple,
                color: colors.text,
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                border: `1px solid ${colors.gold}`,
              }}
            >
              Manage Gallery
            </a>
            <a
              href="/admin/messages"
              style={{
                background: colors.purple,
                color: colors.text,
                padding: '14px 28px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                border: `1px solid ${colors.gold}`,
              }}
            >
              View Messages
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}