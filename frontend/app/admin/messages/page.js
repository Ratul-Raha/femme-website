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

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('http://localhost:6000/api/contact', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`http://localhost:6000/api/contact/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMessages();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AdminLayout>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '32px',
              color: colors.text,
              marginBottom: '4px',
            }}>
              Messages
            </h1>
            <p style={{ fontSize: '14px', color: colors.muted }}>
              Contact form submissions
            </p>
          </div>
          <p style={{ fontSize: '14px', color: colors.muted }}>
            {messages.length} message{messages.length !== 1 ? 's' : ''}
          </p>
        </div>

        {loading ? (
          <p style={{ color: colors.muted }}>Loading...</p>
        ) : messages.length === 0 ? (
          <div style={{
            background: colors.purple,
            padding: '60px',
            borderRadius: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '48px', marginBottom: '16px' }}>💬</p>
            <p style={{ fontSize: '16px', color: colors.muted }}>No messages yet</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((msg) => (
              <div
                key={msg._id}
                style={{
                  background: colors.purple,
                  padding: '24px',
                  borderRadius: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '16px', color: colors.text, fontWeight: 500, marginBottom: '4px' }}>
                      {msg.name}
                    </p>
                    <p style={{ fontSize: '13px', color: colors.pink }}>
                      {msg.phone}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <p style={{ fontSize: '12px', color: colors.muted }}>
                      {new Date(msg.createdAt).toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleDelete(msg._id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: colors.pink,
                        cursor: 'pointer',
                        fontSize: '12px',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: colors.muted, lineHeight: 1.6 }}>
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}