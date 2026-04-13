'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-br from-blush to-ivory">
          <div className="container text-center">
            <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-dark">Contact Us</h1>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="card p-8">
                <h2 className="font-serif text-3xl text-text-dark mb-2">Book an Appointment</h2>
                <p className="text-text-muted mb-8">Fill in the form and we'll get back to you</p>
                
                {success && <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">Thank you! We'll contact you soon.</div>}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-sm text-text-muted mb-2">Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required
                        className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none" /></div>
                    <div><label className="block text-sm text-text-muted mb-2">Phone *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required
                        className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none" /></div>
                  </div>
                  
                  <div><label className="block text-sm text-text-muted mb-2">Email</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none" /></div>
                  
                  <div><label className="block text-sm text-text-muted mb-2">Service Interested In</label>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="skin">Skin & Face</option>
                      <option value="hair">Hair</option>
                      <option value="makeup">Makeup</option>
                      <option value="body">Body & Wellness</option>
                      <option value="yoga">Yoga Studio</option>
                      <option value="other">Other</option>
                    </select></div>
                  
                  <div><label className="block text-sm text-text-muted mb-2">Message *</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} required rows={4}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none" /></div>
                  
                  <button type="submit" disabled={submitting} className="btn-primary w-full">
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="font-serif text-2xl text-text-dark mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4"><span className="text-2xl">📍</span><div><p className="font-medium text-text-dark">Address</p><p className="text-text-muted">Sylhet, Bangladesh</p></div></div>
                    <div className="flex items-center gap-4"><span className="text-2xl">📞</span><div><p className="font-medium text-text-dark">Phone</p><p className="text-text-muted">+880 XXX XXXXXX</p></div></div>
                    <div className="flex items-center gap-4"><span className="text-2xl">✉️</span><div><p className="font-medium text-text-dark">Email</p><p className="text-text-muted">hello@femme.com</p></div></div>
                    <div className="flex items-center gap-4"><span className="text-2xl">🕐</span><div><p className="font-medium text-text-dark">Working Hours</p><p className="text-text-muted">Daily: 9:00 AM - 8:00 PM</p></div></div>
                  </div>
                </div>

                <div className="card p-8">
                  <h3 className="font-serif text-2xl text-text-dark mb-4">Location</h3>
                  <div className="bg-cream rounded-xl overflow-hidden h-48 flex items-center justify-center">
                    <p className="text-text-muted">Google Maps Embed - Sylhet</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-burgundy text-white rounded-full flex items-center justify-center hover:bg-burgundy-light">FB</a>
                  <a href="#" className="w-12 h-12 bg-burgundy text-white rounded-full flex items-center justify-center hover:bg-burgundy-light">IG</a>
                  <a href="#" className="w-12 h-12 bg-burgundy text-white rounded-full flex items-center justify-center hover:bg-burgundy-light">WA</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}