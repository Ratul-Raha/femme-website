'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  Home, Info, Scissors, Images, Star, Phone, Grid3X3,
  Heart, MessageCircle, Send, Bookmark, MoreHorizontal,
  Search, MapPin, Mail, Menu
} from 'lucide-react';

const colors = {
  bg: "#FAFAFA",
  white: "#FFFFFF",
  border: "#DBDBDB",
  text: "#262626",
  muted: "#8E8E8E",
  blue: "#0095F6",
  rose: "#C22DCC",
  gold: "#D4AF37",
};

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Scissors },
  { name: "Gallery", href: "/gallery", icon: Images },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Contact", href: "/contact", icon: Phone },
];

const servicesData = [
  { code: "101", name: "Acne Facial", price: "৳1200" },
  { code: "102", name: "Aloe Vera Facial", price: "৳1200" },
  { code: "103", name: "Bridal Makeup", price: "৳1500" },
  { code: "222", name: "Haircut with Wash", price: "৳600" },
  { code: "555", name: "Manicure", price: "৳500" },
  { code: "556", name: "Pedicure", price: "৳500" },
  { code: "888", name: "Body Massage", price: "৳2000" },
  { code: "570", name: "Herbal Face Bleach", price: "৳700" },
];

const feedPosts = [
  { id: 1, img: "/images/01.jpg", likes: 234, caption: "Beautiful bridal makeup ✨", time: "2h ago" },
  { id: 2, img: "/images/02.jpg", likes: 189, caption: "Fresh glow with our facial 💅", time: "5h ago" },
  { id: 3, img: "/images/03.jpg", likes: 312, caption: "Transformation Tuesday! 📸", time: "8h ago" },
];

export default function Feed() {
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});

  return (
    <>
      <Navbar />
      <main style={{ background: colors.bg, minHeight: '100vh', paddingTop: '80px' }}>
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          * { box-sizing: border-box; }
          body {
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            color: ${colors.text};
          }
          .menu-item {
            display: flex;
            align-items: center;
            padding: 14px 16px;
            border-radius: 12px;
            margin-bottom: 4px;
            cursor: pointer;
            transition: background 0.2s;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
            color: ${colors.text};
          }
          .menu-item:hover { background: rgba(0,0,0,0.05); }
          .menu-item.active { background: #f0f0f0; font-weight: 600; }
          .menu-icon {
            margin-right: 16px;
            font-size: 20px;
            width: 24px;
            text-align: center;
          }
          .feed-card {
            border: 1px solid ${colors.border};
            border-radius: 12px;
            margin-bottom: 24px;
            background: ${colors.white};
          }
          .feed-header {
            display: flex;
            align-items: center;
            padding: 14px 16px;
          }
          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${colors.rose}, #C22DCC);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            color: white;
            font-weight: 600;
            font-size: 11px;
            text-align: center;
            line-height: 1.2;
            padding: 2px;
          }
          .username { font-weight: 600; font-size: 14px; }
          .more { margin-left: auto; cursor: pointer; font-size: 18px; }
          .image-wrap {
            width: 100%;
            aspect-ratio: 1;
            overflow: hidden;
            background: #f5f5f5;
          }
          .image-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .actions {
            padding: 12px 16px;
            display: flex;
            gap: 16px;
          }
          .action-btn {
            font-size: 24px;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .action-btn:hover { transform: scale(1.15); }
          .save-btn { margin-left: auto; }
          .likes { padding: 0 16px 8px; font-weight: 600; }
          .caption { padding: 0 16px 8px; font-size: 14px; }
          .caption strong { font-weight: 600; margin-right: 4px; }
          .time { padding: 8px 16px 14px; font-size: 10px; color: ${colors.muted}; text-transform: uppercase; }
          
          .search-box {
            position: relative;
            margin-bottom: 16px;
          }
          .search-box input {
            width: 100%;
            padding: 10px 10px 10px 38px;
            border: 1px solid ${colors.border};
            border-radius: 8px;
            font-size: 13px;
            outline: none;
            background: ${colors.bg};
          }
          .search-box input:focus { border-color: ${colors.blue}; }
          .search-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: ${colors.muted};
          }
          
          .service-list { max-height: 280px; overflow-y: auto; }
          .service-row {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid ${colors.border};
          }
          .service-row:last-child { border-bottom: none; }
          .service-code {
            font-size: 11px;
            color: ${colors.rose};
            font-weight: 600;
            width: 32px;
          }
          .service-name {
            flex: 1;
            font-size: 13px;
          }
          .service-price {
            font-size: 13px;
            font-weight: 600;
            color: ${colors.rose};
          }
          
          .contact-box {
            background: ${colors.white};
            border-radius: 12px;
            border: 1px solid ${colors.border};
            padding: 20px;
          }
          .contact-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            font-size: 13px;
            color: ${colors.muted};
          }
          .contact-row span:first-child { font-size: 16px; }
          
          .btn-book {
            display: block;
            width: 100%;
            padding: 14px 0;
            background: ${colors.rose};
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
          }
          .btn-book:hover { background: #a91c46; }
          
          .profile {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            gap: 12px;
          }
          .profile-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, ${colors.rose}, #C22DCC);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 13px;
            text-align: center;
            line-height: 1.15;
            padding: 4px;
            flexShrink: 0;
          }
          .profile-info { margin-left: 12; }
          .profile-name { font-weight: 600; font-size: 14px; }
          .profile-sub { font-size: 13px; color: ${colors.muted}; }
          
          .footer { font-size: 11px; color: ${colors.muted}; line-height: 1.7; margin-top: 20px; }
          .footer span { margin-right: 4px; cursor: pointer; }
          .footer span:hover { text-decoration: underline; }
        `}</style>

        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '32px 20px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
          
          {/* Left Sidebar */}
          <div style={{ position: 'sticky', top: 24, height: 'fit-content', width: 240, flexShrink: 0 }}>
            <div style={{ padding: '8px 0' }}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.href} className="menu-item">
                    <span className="menu-icon"><Icon size={22} /></span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link href="/feed" className="menu-item active">
                <span className="menu-icon"><Grid3X3 size={22} /></span>
                <span>Feed</span>
              </Link>
            </div>
          </div>

          {/* Middle - Feed */}
          <div style={{ width: 470, flexShrink: 0 }}>
          <div>
            {/* Stories Bar */}
            <div style={{ 
              background: colors.white, 
              borderRadius: 12, 
              border: `1px solid ${colors.border}`,
              padding: '16px',
              marginBottom: 24,
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
            }}>
              {[
                { name: "femmebd", img: "/images/01.jpg" },
                { name: "bridal", img: "/images/02.jpg" },
                { name: "makeup", img: "/images/03.jpg" },
                { name: "spa", img: "/images/04.jpg" },
                { name: "beauty", img: "/images/05.jpg" },
                { name: "style", img: "/images/01.jpg" },
              ].map((story, i) => (
                <div key={i} style={{ textAlign: 'center', flexShrink: 0, cursor: 'pointer' }}>
                  <div style={{
                    width: 66,
                    height: 66,
                    borderRadius: '50%',
                    padding: 3,
                    background: 'linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)',
                  }}>
                    <img 
                      src={story.img} 
                      alt={story.name}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid white',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 11, marginTop: 6, color: colors.text }}>{story.name}</div>
                </div>
              ))}
            </div>

            {feedPosts.map((post) => (
              <div key={post.id} className="feed-card">
                <div className="feed-header">
                  <div className="avatar">FEmmE</div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span className="username">FEmmE</span>
                        <span style={{ color: colors.muted }}>·</span>
                        <span style={{ fontSize: 12, color: colors.muted }}>1W</span>
                      </div>
                      <span className="more" style={{ fontSize: 18, cursor: 'pointer' }}>•••</span>
                    </div>
                    <div style={{ fontSize: 11, color: colors.muted }}>Suggested for you</div>
                  </div>
                </div>
                <div className="image-wrap">
                  <img src={post.img} alt="" />
                </div>
                <div className="actions">
                  <span className="action-btn" onClick={() => setLiked(p => ({...p, [post.id]: !p[post.id]}))}>
                    {liked[post.id] ? <Heart size={24} fill={colors.rose} color={colors.rose} /> : <Heart size={24} />}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, marginLeft: -4, marginRight: 12 }}>24</span>
                  <span className="action-btn"><MessageCircle size={24} /></span>
                  <span style={{ fontSize: 13, fontWeight: 600, marginLeft: -4, marginRight: 12 }}>8</span>
                  <span className="action-btn"><Send size={24} /></span>
                  <span style={{ fontSize: 13, fontWeight: 600, marginLeft: -4 }}>2</span>
                  <span className="action-btn save-btn" onClick={() => setSaved(p => ({...p, [post.id]: !p[post.id]}))}>
                    {saved[post.id] ? <Bookmark size={24} fill={colors.blue} color={colors.blue} /> : <Bookmark size={24} />}
                  </span>
                </div>
                <div className="likes">{post.likes} likes</div>
                <div className="caption"><strong>femmebd</strong> {post.caption}</div>
                <div className="time">{post.time}</div>
              </div>
            ))}
            
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/gallery" style={{ color: colors.blue, fontSize: 14, textDecoration: 'none', fontWeight: 500 }}>
                Load more ↓
              </Link>
            </div>
          </div>

          </div>

          {/* Right Rail */}
          <div style={{ position: 'sticky', top: 24, height: 'fit-content', width: 320, flexShrink: 0 }}>
            
            {/* Profile */}
            <div className="profile" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div className="profile-avatar">FEmmE</div>
                <div className="profile-info">
                  <div className="profile-name">FEmmE</div>
                  <div className="profile-sub">FEmmE Beauty Clinic & Parlour</div>
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.blue, cursor: 'pointer' }}>Follow</span>
            </div>

            {/* Services List */}
            <div className="contact-box" style={{ marginBottom: 20, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontWeight: 600, fontSize: 14, color: colors.muted }}>Our Services</span>
                <Link href="/services" style={{ fontSize: 12, color: colors.blue, textDecoration: 'none' }}>See all</Link>
              </div>
              
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input type="text" placeholder="Search..." />
              </div>
              
              <div className="service-list">
                {servicesData.map((s, i) => (
                  <div key={i} className="service-row">
                    <span className="service-code">{s.code}</span>
                    <span className="service-name">{s.name}</span>
                    <span className="service-price">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="contact-box">
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 16 }}>Contact Us</div>
              <div className="contact-row">
                <MapPin size={18} />
                <span>Zindabazar, Sylhet</span>
              </div>
              <div className="contact-row">
                <Phone size={18} />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="contact-row" style={{ marginBottom: 16 }}>
                <Mail size={18} />
                <span>info@femme.com</span>
              </div>
              <Link href="/contact" className="btn-book">
                Book Appointment
              </Link>
            </div>

            <div className="footer">
              <span>About</span>·<span>Terms</span>·<span>Privacy</span>·<span>Cookies</span>
              <div style={{ marginTop: 8 }}>© 2026 FEmmE</div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}