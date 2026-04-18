import Link from 'next/link';

const colors = {
  dark: "#111111",
  deepRose: "#C2185B",
  royalPink: "#E91E63",
  richGold: "#D4AF37",
  softCream: "#FFF8F2",
  white: "#ffffff",
  muted: "#888888",
};

export default function Footer() {
  return (
    <footer style={{
      background: colors.dark,
      padding: '80px 40px 30px',
      color: colors.white,
    }}>
      <style>{`
        .footer-link:hover { color: #D4AF37 !important; transform: translateX(4px); }
        .footer-icon { transition: all 0.3s ease; }
        .footer-icon:hover { color: #D4AF37; transform: scale(1.2); }
      `}</style>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(212,175,55,0.15)',
        }}>
          {/* Brand Column */}
          <div>
            <Link href="/" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '32px',
              color: colors.richGold,
              textDecoration: 'none',
              letterSpacing: '4px',
              display: 'inline-block',
              marginBottom: '20px',
            }}>
              FEmmE
            </Link>
            <p style={{
              fontSize: '14px',
              color: colors.muted,
              lineHeight: 1.8,
              marginBottom: '24px',
              maxWidth: '280px',
            }}>
              Sylhet's premium beauty destination. Where elegance meets essence in an ambiance crafted for your serenity.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: '✕', label: 'Twitter' },
                { icon: '📸', label: 'Instagram' },
                { icon: '📘', label: 'Facebook' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="footer-icon"
                  style={{
                    fontSize: '18px',
                    color: colors.muted,
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: colors.richGold,
              marginBottom: '24px',
              fontWeight: 600,
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Contact', href: '/contact' },
              ].map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  style={{
                    fontSize: '14px',
                    color: colors.muted,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: colors.richGold,
              marginBottom: '24px',
              fontWeight: 600,
            }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: colors.muted }}>
              <Link href="/services" className="footer-link" style={{ color: colors.muted, textDecoration: 'none' }}>Facial Treatments</Link>
              <Link href="/services" className="footer-link" style={{ color: colors.muted, textDecoration: 'none' }}>Hair Styling</Link>
              <Link href="/services" className="footer-link" style={{ color: colors.muted, textDecoration: 'none' }}>Bridal Makeup</Link>
              <Link href="/services" className="footer-link" style={{ color: colors.muted, textDecoration: 'none' }}>Spa & Massage</Link>
              <Link href="/services" className="footer-link" style={{ color: colors.muted, textDecoration: 'none' }}>Nail Care</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: colors.richGold,
              marginBottom: '24px',
              fontWeight: 600,
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: colors.muted }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>📍</span>
                <span>Sylhet, Bangladesh</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>📧</span>
                <span>hello@femmebd.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>📞</span>
                <span>+880 XXX XXXXXX</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>🕘</span>
                <span>Open Daily: 9AM - 8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '32px 0',
          borderBottom: '1px solid rgba(212,175,55,0.15)',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <h4 style={{ fontSize: '18px', color: colors.white, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
              Stay Updated
            </h4>
            <p style={{ fontSize: '14px', color: colors.muted }}>
              Subscribe for exclusive offers and beauty tips.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0', overflow: 'hidden', borderRadius: '30px', border: `1px solid ${colors.richGold}40` }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '12px 20px',
                background: 'transparent',
                border: 'none',
                color: colors.white,
                fontSize: '14px',
                width: '220px',
                outline: 'none',
              }}
            />
            <button style={{
              padding: '12px 24px',
              background: colors.deepRose,
              border: 'none',
              color: colors.white,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '24px',
          fontSize: '13px',
          color: colors.muted,
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <span>© 2025 FEmmE Beauty. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: colors.muted, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: colors.muted, textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}