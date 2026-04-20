import Link from 'next/link';

const colors = {
  dark: "#1a1a2e",
  purple: "#16213e",
  gold: "#e8b87d",
  cream: "#faf3e8",
  pink: "#f5d0de",
  rose: "#d4a5a5",
  text: "#2d2d2d",
  muted: "#888",
};

export default function Footer() {
  return (
    <footer style={{
      background: colors.dark,
      padding: '80px 60px 40px',
      color: colors.cream,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '60px',
        borderBottom: '1px solid rgba(232,184,125,0.2)',
        paddingBottom: '50px',
      }}>
        <div>
          <h3 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '28px', 
            color: colors.gold,
            marginBottom: '20px',
            letterSpacing: '3px',
          }}>
            FEmmE
          </h3>
          <p style={{ 
            fontSize: '14px', 
            color: colors.muted, 
            lineHeight: 1.8,
            maxWidth: '280px',
          }}>
            Where elegance meets essence. Experience transformative beauty in an ambiance crafted for your serenity.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: colors.gold, marginBottom: '20px' }}>
            Explore
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(link => (
              <Link 
                key={link} 
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                style={{ fontSize: '14px', color: colors.muted, textDecoration: 'none' }}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: colors.gold, marginBottom: '20px' }}>
            Services
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: colors.muted }}>
            <span>Luxury Facials</span>
            <span>Hair Styling</span>
            <span>Bridal Artistry</span>
            <span>Spa Therapy</span>
            <span>Nail Couture</span>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: colors.gold, marginBottom: '20px' }}>
            Visit Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: colors.muted }}>
            <span>Sylhet, Bangladesh</span>
            <span>hello@aura.com.bd</span>
            <span>+880 XXX XXXXXX</span>
            <span>Open Daily: 9AM - 8PM</span>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        paddingTop: '30px',
        fontSize: '13px',
        color: colors.muted,
      }}>
        <span>© 2025 FEmmE Beauty. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
    </footer>
  );
}