'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

async function getReviews() {
  try { const res = await fetch('http://localhost:5000/api/reviews', { cache: 'no-store' }); return res.ok ? await res.json() : []; } 
  catch { return []; }
}

const defaultReviews = [
  { name: 'Anushka', rating: 5, comment: 'FEmmE made my wedding day perfect! The team is incredibly talented and caring.', service: 'Bridal Makeup', createdAt: new Date() },
  { name: 'Priya', rating: 5, comment: 'Best beauty experience in Sylhet. The herbal products are amazing and my skin has never looked better!', service: 'Facial', createdAt: new Date() },
  { name: 'Riya', rating: 5, comment: 'Love the women-only space. So comfortable and professional! The yoga classes are wonderful.', service: 'Yoga', createdAt: new Date() },
  { name: 'Sarah', rating: 5, comment: 'My hair has never been healthier. Highly recommend the hair treatment!', service: 'Hair', createdAt: new Date() },
  { name: 'Mehazabien', rating: 5, comment: 'The bridal package was worth every penny. Looked absolutely stunning on my wedding day!', service: 'Bridal Package', createdAt: new Date() },
  { name: 'Tashfina', rating: 5, comment: 'Such a relaxing environment. The spa massage was heavenly!', service: 'Spa', createdAt: new Date() },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(defaultReviews);
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', rating: 5, comment: '' });
        const updated = await getReviews();
        if (updated.length > 0) setReviews(updated);
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
            <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-4">Testimonials</p>
            <h1 className="font-serif text-5xl md:text-6xl text-text-dark">What Our Clients Say</h1>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-burgundy text-white">
          <div className="container">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div><p className="font-serif text-4xl">500+</p><p className="text-white/70 text-sm">Happy Clients</p></div>
              <div><p className="font-serif text-4xl">4.9★</p><p className="text-white/70 text-sm">Average Rating</p></div>
              <div><p className="font-serif text-4xl">5+</p><p className="text-white/70 text-sm">Years of Excellence</p></div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="card p-6">
                  <div className="flex gap-1 mb-3">{[...Array(review.rating)].map((_, j) => <span key={j} className="text-gold">★</span>)}</div>
                  <p className="text-text-muted mb-4">"{review.comment}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-serif text-text-dark">— {review.name}</p>
                    <span className="text-xs text-burgundy bg-blush px-2 py-1 rounded-full">{review.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Review */}
        <section className="section bg-cream">
          <div className="container max-w-2xl">
            <div className="card p-8">
              <h2 className="font-serif text-3xl text-text-dark text-center mb-2">Share Your Experience</h2>
              <p className="text-text-muted text-center mb-8">We value your feedback</p>
              
              {success && <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">Thank you! Your review has been submitted.</div>}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label className="block text-sm text-text-muted mb-2">Your Name</label>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none" /></div>
                
                <div><label className="block text-sm text-text-muted mb-2">Rating</label>
                  <div className="flex gap-2">{[1,2,3,4,5].map(s => (
                    <button key={s} type="button" onClick={() => setForm({...form, rating: s})}
                      className={`text-2xl ${s <= form.rating ? 'text-gold' : 'text-gray-300'}`}>★</button>
                  ))}</div></div>
                
                <div><label className="block text-sm text-text-muted mb-2">Your Review</label>
                  <textarea value={form.comment} onChange={e => setForm({...form, comment: e.target.value})} required rows={4}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-burgundy focus:outline-none" /></div>
                
                <button type="submit" disabled={submitting} className="btn-primary w-full">
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}