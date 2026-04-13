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

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('http://localhost:6000/api/reviews');
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`http://localhost:6000/api/reviews/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchReviews();
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
              Reviews
            </h1>
            <p style={{ fontSize: '14px', color: colors.muted }}>
              Customer reviews
            </p>
          </div>
          <p style={{ fontSize: '14px', color: colors.muted }}>
            {reviews.length} review{reviews.length !== 1 ? 's' : ''}
          </p>
        </div>

        {loading ? (
          <p style={{ color: colors.muted }}>Loading...</p>
        ) : reviews.length === 0 ? (
          <div style={{
            background: colors.purple,
            padding: '60px',
            borderRadius: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '48px', marginBottom: '16px' }}>★</p>
            <p style={{ fontSize: '16px', color: colors.muted }}>No reviews yet</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {reviews.map((review) => (
              <div
                key={review._id}
                style={{
                  background: colors.purple,
                  padding: '24px',
                  borderRadius: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} style={{ color: colors.gold, fontSize: '16px' }}>★</span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleDelete(review._id)}
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
                <p style={{ fontSize: '14px', color: colors.muted, lineHeight: 1.6, marginBottom: '16px', fontStyle: 'italic' }}>
                  "{review.comment}"
                </p>
                <p style={{ fontSize: '14px', color: colors.text, fontWeight: 500 }}>
                  {review.name}
                </p>
                <p style={{ fontSize: '12px', color: colors.muted, marginTop: '4px' }}>
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}