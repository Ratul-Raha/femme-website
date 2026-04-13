'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const colors = {
  dark: "#1a1a2e",
  darker: "#0f0f1a",
  purple: "#16213e",
  gold: "#e8b87d",
  goldLight: "#f0d4a8",
  pink: "#e88a9f",
  pinkLight: "#f5b8c4",
  pinkMuted: "#c97a8a",
  text: "#f5f5f5",
  muted: "#8a8a9a",
  white: "#ffffff",
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, message: form.message }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch {}
    setSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <main style={{ background: colors.darker, color: colors.text }}>
        {/* Hero */}
        <section style={{
          minHeight: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '120px 60px 80px',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at 50% 0%, ${colors.purple} 0%, ${colors.darker} 70%)`,
          }} />
          
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.pink}10 0%, transparent 60%)`,
            filter: 'blur(60px)',
          }} />

          <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <span style={{
              fontSize: '11px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: colors.pink,
              marginBottom: '20px',
              display: 'block',
            }}>
              Get in Touch
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 400,
              color: colors.text,
            }}>
              Contact <span style={{ color: colors.pink, fontStyle: 'italic' }}>Us</span>
            </h1>
          </div>
        </section>

        {/* Contact Content */}
        <section style={{ padding: '100px 60px', background: colors.dark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              {/* Form */}
              <div style={{ background: colors.purple, padding: '40px', borderRadius: '20px' }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  color: colors.text,
                  marginBottom: '8px',
                }}>
                  Book an <span style={{ color: colors.gold }}>Appointment</span>
                </h2>
                <p style={{ fontSize: '14px', color: colors.muted, marginBottom: '32px' }}>
                  Fill in the form and we'll get back to you
                </p>
                
                {success && (
                  <div style={{ background: colors.pink, color: colors.darker, padding: '16px', borderRadius: '12px', marginBottom: '24px', fontWeight: 500 }}>
                    Thank you! We'll contact you soon.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>Name *</label>
                      <input 
                        type="text" 
                        value={form.name} 
                        onChange={e => setForm({...form, name: e.target.value})} 
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '10px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: colors.darker,
                          color: colors.text,
                          fontSize: '14px',
                          outline: 'none',
                        }} 
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>Phone *</label>
                      <input 
                        type="tel" 
                        value={form.phone} 
                        onChange={e => setForm({...form, phone: e.target.value})} 
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '10px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: colors.darker,
                          color: colors.text,
                          fontSize: '14px',
                          outline: 'none',
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>Email</label>
                    <input 
                      type="email" 
                      value={form.email} 
                      onChange={e => setForm({...form, email: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: colors.darker,
                        color: colors.text,
                        fontSize: '14px',
                        outline: 'none',
                      }} 
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>Service Interested In</label>
                    <select 
                      value={form.service} 
                      onChange={e => setForm({...form, service: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: colors.darker,
                        color: colors.text,
                        fontSize: '14px',
                        outline: 'none',
                      }}>
                      <option value="" style={{ color: colors.muted }}>Select a service</option>
                      <option value="skin">Skin & Face</option>
                      <option value="hair">Hair</option>
                      <option value="makeup">Makeup</option>
                      <option value="body">Body & Wellness</option>
                      <option value="yoga">Yoga Studio</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', color: colors.muted, marginBottom: '8px', display: 'block' }}>Message *</label>
                    <textarea 
                      value={form.message} 
                      onChange={e => setForm({...form, message: e.target.value})} 
                      required 
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: colors.darker,
                        color: colors.text,
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                      }} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    style={{
                      background: colors.pink,
                      color: colors.darker,
                      padding: '16px 32px',
                      borderRadius: '30px',
                      fontSize: '15px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ background: colors.purple, padding: '32px', borderRadius: '20px' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    color: colors.text,
                    marginBottom: '28px',
                  }}>
                    Contact <span style={{ color: colors.gold }}>Information</span>
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>📍</span>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 500, color: colors.text }}>Address</p>
                        <p style={{ fontSize: '14px', color: colors.muted }}>Sylhet, Bangladesh</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>📞</span>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 500, color: colors.text }}>Phone</p>
                        <p style={{ fontSize: '14px', color: colors.muted }}>+880 XXX XXXXXX</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>✉️</span>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 500, color: colors.text }}>Email</p>
                        <p style={{ fontSize: '14px', color: colors.muted }}>hello@femme.com.bd</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>🕐</span>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 500, color: colors.text }}>Working Hours</p>
                        <p style={{ fontSize: '14px', color: colors.muted }}>Sat - Thu: 9:00 AM - 5:00 PM</p>
                        <p style={{ fontSize: '14px', color: colors.muted }}>Friday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ background: colors.purple, padding: '32px', borderRadius: '20px' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    color: colors.text,
                    marginBottom: '20px',
                  }}>
                    Location
                  </h3>
                  <div style={{ 
                    background: colors.darker, 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    height: '200px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                  }}>
                    <p style={{ fontSize: '14px', color: colors.muted }}>Google Maps Embed - Sylhet</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href="#" style={{
                    width: '48px',
                    height: '48px',
                    background: colors.pink,
                    color: colors.darker,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}>FB</a>
                  <a href="#" style={{
                    width: '48px',
                    height: '48px',
                    background: colors.pink,
                    color: colors.darker,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}>IG</a>
                  <a href="#" style={{
                    width: '48px',
                    height: '48px',
                    background: colors.pink,
                    color: colors.darker,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}>WA</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        input:focus, textarea:focus, select:focus {
          border-color: ${colors.pink} !important;
          outline: none;
        }
      `}</style>
    </>
  );
}