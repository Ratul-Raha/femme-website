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

const categories = ['facial', 'haircut', 'spa', 'massage'];

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [form, setForm] = useState({ code: '', name: '', category: 'facial', price: '', isActive: true });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('http://localhost:6000/api/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem('adminToken');
      const method = editingService ? 'PUT' : 'POST';
      const url = editingService
        ? `http://localhost:6000/api/services/${editingService._id}`
        : 'http://localhost:6000/api/services';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          price: form.price ? parseFloat(form.price) : null,
        }),
      });

      if (res.ok) {
        fetchServices();
        closeModal();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`http://localhost:6000/api/services/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchServices();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const openModal = (service = null) => {
    if (service) {
      setEditingService(service);
      setForm({
        code: service.code,
        name: service.name,
        category: service.category,
        price: service.price || '',
        isActive: service.isActive,
      });
    } else {
      setEditingService(null);
      setForm({ code: '', name: '', category: 'facial', price: '', isActive: true });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingService(null);
    setForm({ code: '', name: '', category: 'facial', price: '', isActive: true });
  };

  const groupedServices = categories.reduce((acc, cat) => {
    acc[cat] = services.filter(s => s.category === cat);
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
              Services
            </h1>
            <p style={{ fontSize: '14px', color: colors.muted }}>
              Manage beauty services
            </p>
          </div>
          <button
            onClick={() => openModal()}
            style={{
              background: colors.pink,
              color: colors.darker,
              padding: '14px 28px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            + Add Service
          </button>
        </div>

        {loading ? (
          <p style={{ color: colors.muted }}>Loading...</p>
        ) : (
          categories.map((cat) => (
            groupedServices[cat]?.length > 0 && (
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
                  {cat}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {groupedServices[cat].map((service) => (
                    <div
                      key={service._id}
                      style={{
                        background: colors.purple,
                        padding: '20px',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div>
                        <p style={{ fontSize: '12px', color: colors.pink, marginBottom: '4px' }}>
                          {service.code}
                        </p>
                        <p style={{ fontSize: '15px', color: colors.text, marginBottom: '8px' }}>
                          {service.name}
                        </p>
                        <p style={{ fontSize: '14px', color: colors.gold }}>
                          ৳{service.price || 'N/A'}
                        </p>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => openModal(service)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: colors.muted,
                            cursor: 'pointer',
                            fontSize: '12px',
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(service._id)}
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

        {/* Modal */}
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              background: colors.purple,
              padding: '32px',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '480px',
              margin: '20px',
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '24px',
                color: colors.text,
                marginBottom: '24px',
              }}>
                {editingService ? 'Edit Service' : 'Add Service'}
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>
                    Code
                  </label>
                  <input
                    type="text"
                    value={form.code}
                    onChange={(e) => setForm({ ...form, code: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: colors.darker,
                      color: colors.text,
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: colors.darker,
                      color: colors.text,
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: colors.darker,
                      color: colors.text,
                      fontSize: '14px',
                    }}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>
                    Price (BDT)
                  </label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: colors.darker,
                      color: colors.text,
                      fontSize: '14px',
                    }}
                  />
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  />
                  <span style={{ fontSize: '14px', color: colors.muted }}>Active</span>
                </label>

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button
                    type="button"
                    onClick={closeModal}
                    style={{
                      flex: 1,
                      background: colors.dark,
                      color: colors.text,
                      padding: '14px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    style={{
                      flex: 1,
                      background: colors.pink,
                      color: colors.darker,
                      padding: '14px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: saving ? 'not-allowed' : 'pointer',
                      opacity: saving ? 0.7 : 1,
                    }}
                  >
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}