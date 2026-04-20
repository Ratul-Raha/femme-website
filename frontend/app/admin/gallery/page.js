'use client';
import { useEffect, useState, useRef } from 'react';
import AdminLayout from '../../../components/AdminLayout';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  pink: "#e88a9f",
  text: "#f5f5f5",
  muted: "#8a8a9a",
};

const categories = ['bridal', 'makeup', 'spa', 'hair', 'general'];

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [category, setCategory] = useState('bridal');
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('http://localhost:6000/api/gallery');
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('image', file);
      formData.append('category', category);

      const res = await fetch('http://localhost:6000/api/gallery', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (res.ok) {
        fetchImages();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`http://localhost:6000/api/gallery/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchImages();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const groupedImages = categories.reduce((acc, cat) => {
    acc[cat] = images.filter(img => img.category === cat);
    return acc;
  }, {});

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
              Gallery
            </h1>
            <p style={{ fontSize: '14px', color: colors.muted }}>
              Manage gallery images
            </p>
          </div>
        </div>

        {/* Upload Section */}
        <div style={{
          background: colors.purple,
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '40px',
        }}>
          <h3 style={{ fontSize: '16px', color: colors.text, marginBottom: '16px' }}>
            Upload New Image
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div>
              <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: colors.darker,
                  color: colors.text,
                  fontSize: '14px',
                  minWidth: '150px',
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>
                Image File
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/avif"
                onChange={handleUpload}
                disabled={uploading}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: colors.darker,
                  color: colors.text,
                  fontSize: '14px',
                }}
              />
            </div>
            {uploading && <p style={{ color: colors.muted }}>Uploading...</p>}
          </div>
        </div>

        {loading ? (
          <p style={{ color: colors.muted }}>Loading...</p>
        ) : (
          categories.map((cat) => (
            groupedImages[cat]?.length > 0 && (
              <div key={cat} style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '16px',
                  color: colors.gold,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: `1px solid rgba(255,255,255,0.1)`,
                }}>
                  {cat} ({groupedImages[cat].length})
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                  {groupedImages[cat].map((img) => (
                    <div
                      key={img._id}
                      style={{
                        background: colors.purple,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={`http://localhost:6000${img.imageUrl}`}
                        alt=""
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                        }}
                      />
                      <div style={{
                        padding: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <span style={{ fontSize: '12px', color: colors.muted }}>
                          {new Date(img.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleDelete(img._id)}
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
                  ))}
                </div>
              </div>
            )
          ))
        )}
      </div>
    </AdminLayout>
  );
}