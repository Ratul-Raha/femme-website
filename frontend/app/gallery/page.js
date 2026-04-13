'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, cat: 'makeup', label: 'Bridal look', color: '#e8b4c8' },
    { id: 2, cat: 'skin', label: 'Herbal facial', color: '#f5d0de' },
    { id: 3, cat: 'hair', label: 'Hair colour', color: '#d4908a' },
    { id: 4, cat: 'interior', label: 'Studio interior', color: '#fbeaf0' },
    { id: 5, cat: 'yoga', label: 'Yoga class', color: '#fdf6f8' },
    { id: 6, cat: 'makeup', label: 'Party makeup', color: '#c9718e' },
    { id: 7, cat: 'skin', label: 'Skin treatment', color: '#fbeaf0' },
    { id: 8, cat: 'hair', label: 'Before & after', color: '#7a2d4a' },
  ];

  const filtered = filter === 'all' ? images : images.filter(img => img.cat === filter);

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <p className="text-xs font-medium mb-2" style={{color: 'var(--pink-accent)', letterSpacing: '3px'}}>OUR WORK</p>
            <h2 className="font-serif text-4xl mb-4" style={{color: 'var(--text-dark)'}}>Gallery</h2>
            <p className="text-sm mb-8" style={{color: 'var(--text-light)', maxWidth: '500px'}}>Browse our transformations across makeup, hair, skin, yoga & interiors.</p>
            
            <div className="flex gap-3 flex-wrap mb-8">
              {['All', 'Makeup', 'Hair', 'Skin', 'Yoga', 'Interior'].map(f => (
                <button key={f} onClick={() => setFilter(f.toLowerCase())}
                  className="px-5 py-2 rounded-full text-xs font-medium border transition-colors"
                  style={{
                    background: filter === f.toLowerCase() ? '#7a2d4a' : 'transparent',
                    color: filter === f.toLowerCase() ? 'white' : '#7a2d4a',
                    borderColor: '#e8d5dc'
                  }}>
                  {f}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {filtered.map((img, i) => (
                <div key={img.id} 
                  className={`rounded-xl overflow-hidden cursor-pointer relative group ${i === 0 ? 'row-span-2' : ''} ${i === 3 || i === 7 ? 'col-span-2' : ''}`}
                  style={{background: img.color, minHeight: '160px'}}>
                  <div className="absolute inset-0 flex items-center justify-center"
                    style={{background: 'rgba(74,26,46,0.55)', opacity: 0, groupOpacity: 1}}>
                    <span className="text-white text-xs uppercase font-medium tracking-widest">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}