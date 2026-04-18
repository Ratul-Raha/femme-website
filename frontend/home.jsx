"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Inline styles as CSS-in-JS object map ──────────────────────────────────
const colors = {
  cream: "#fdf6f8",
  blush: "#f5d0de",
  rose: "#e8b4c8",
  mauve: "#c9718e",
  burgundy: "#7a2d4a",
  deep: "#4a1a2e",
  muted: "#8a5a6a",
  text: "#6a3a4a",
};

// ── Utility: useInView hook for scroll animations ──────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── SVG Icons ──────────────────────────────────────────────────────────────
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const IconHeart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// ── Illustration: Feminine face SVG ───────────────────────────────────────
function FaceSVG({ size = 200 }) {
  return (
    <svg viewBox="0 0 200 260" width={size} height={size * 1.3}>
      <ellipse cx="100" cy="110" rx="55" ry="60" fill="#d4908a" />
      <ellipse cx="100" cy="300" rx="90" ry="70" fill={colors.mauve} />
      <ellipse cx="78" cy="98" rx="8" ry="5" fill={colors.burgundy} />
      <ellipse cx="122" cy="98" rx="8" ry="5" fill={colors.burgundy} />
      <path d="M85 125 Q100 137 115 125" stroke={colors.burgundy} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="68" rx="58" ry="28" fill={colors.deep} />
      <ellipse cx="68" cy="80" rx="10" ry="16" fill={colors.deep} />
      <ellipse cx="132" cy="80" rx="10" ry="16" fill={colors.deep} />
      <ellipse cx="78" cy="98" rx="2" ry="1.5" fill={colors.blush} opacity="0.6" />
      <ellipse cx="122" cy="98" rx="2" ry="1.5" fill={colors.blush} opacity="0.6" />
    </svg>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 40px", height: "68px",
      background: scrolled ? "rgba(253,246,248,0.95)" : colors.cream,
      borderBottom: `0.5px solid ${scrolled ? "#e8d5dc" : "transparent"}`,
      backdropFilter: "blur(8px)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "24px", letterSpacing: "5px",
        color: colors.burgundy, fontWeight: 500,
      }}>
        F<span style={{ color: colors.mauve }}>E</span>mmE
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "28px", alignItems: "center" }}
        className="femme-desktop-nav">
        {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={{
              fontSize: "12px", color: colors.burgundy, textDecoration: "none",
              letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500,
            }}>
            {item}
          </Link>
        ))}
        <button style={{
          background: colors.burgundy, color: "#fff", border: "none",
          padding: "10px 22px", borderRadius: "30px",
          fontSize: "12px", letterSpacing: "1px", cursor: "pointer",
          fontWeight: 500, transition: "background 0.2s",
        }}
          onMouseOver={(e) => e.currentTarget.style.background = colors.mauve}
          onMouseOut={(e) => e.currentTarget.style.background = colors.burgundy}>
          Book now
        </button>
      </div>
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const fadeUp = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section style={{
      background: colors.cream,
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "100px 40px 60px",
      gap: "40px", flexWrap: "wrap",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", right: "-80px", top: "-80px",
        width: "460px", height: "460px", borderRadius: "50%",
        background: colors.rose, opacity: 0.25, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: "120px", bottom: "-100px",
        width: "280px", height: "280px", borderRadius: "50%",
        background: colors.blush, opacity: 0.2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: "-60px", bottom: "80px",
        width: "200px", height: "200px", borderRadius: "50%",
        background: colors.blush, opacity: 0.15, pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ flex: 1, maxWidth: "520px", position: "relative", zIndex: 2 }}>
        <div style={fadeUp(0)}>
          <span style={{
            display: "inline-block", background: colors.blush, color: colors.burgundy,
            fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase",
            padding: "6px 18px", borderRadius: "20px", marginBottom: "24px",
            fontWeight: 500,
          }}>
            Sylhet&apos;s first beauty clinic for women
          </span>
        </div>
        <div style={fadeUp(0.1)}>
          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(36px, 5vw, 54px)",
            lineHeight: 1.15, color: colors.deep,
            marginBottom: "20px", fontWeight: 500,
          }}>
            Where beauty<br />meets{" "}
            <em style={{ color: colors.mauve, fontStyle: "italic" }}>wellness</em>
          </h1>
        </div>
        <div style={fadeUp(0.2)}>
          <p style={{
            fontSize: "15px", color: colors.muted, lineHeight: 1.8,
            marginBottom: "36px", maxWidth: "420px",
          }}>
            A women-only sanctuary offering premium herbal beauty treatments,
            expert care, and a serene yoga studio — all under one exquisite roof
            in the heart of Sylhet.
          </p>
        </div>
        <div style={{ ...fadeUp(0.3), display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/services" style={{
            background: colors.burgundy, color: "#fff",
            padding: "13px 30px", borderRadius: "30px",
            fontSize: "13px", fontWeight: 500, letterSpacing: "0.5px",
            textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseOver={(e) => e.currentTarget.style.background = colors.mauve}
            onMouseOut={(e) => e.currentTarget.style.background = colors.burgundy}>
            Explore services
          </Link>
          <Link href="/contact" style={{
            background: "transparent", color: colors.burgundy,
            border: `1.5px solid ${colors.mauve}`,
            padding: "12px 30px", borderRadius: "30px",
            fontSize: "13px", fontWeight: 500,
            textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseOver={(e) => e.currentTarget.style.background = colors.blush}
            onMouseOut={(e) => e.currentTarget.style.background = "transparent"}>
            Book an appointment
          </Link>
        </div>
      </div>

      {/* Visual */}
      <div style={{
        flex: "0 0 340px", height: "400px",
        position: "relative", zIndex: 2,
        ...fadeUp(0.2),
      }}>
        <div style={{
          width: "240px", height: "320px",
          borderRadius: "120px 120px 20px 20px",
          background: colors.rose, overflow: "hidden",
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "flex-end", justifyContent: "center",
        }}>
          <FaceSVG size={200} />
        </div>
        {/* Stat cards */}
        {[
          { label: "Happy clients", value: "500+", style: { bottom: "20px", left: "-10px" } },
          { label: "Herbal products", value: "100%", style: { top: "20px", right: "-10px" } },
          { label: "Rating", value: "4.9 ★", style: { bottom: "80px", right: "-20px" } },
        ].map(({ label, value, style }) => (
          <div key={label} style={{
            position: "absolute", background: "#fff",
            border: `0.5px solid #e8d5dc`,
            borderRadius: "14px", padding: "12px 16px",
            boxShadow: "0 2px 16px rgba(122,45,74,0.08)",
            ...style,
          }}>
            <div style={{ fontSize: "20px", fontWeight: 500, color: colors.deep }}>{value}</div>
            <div style={{ fontSize: "11px", color: colors.muted, marginTop: "2px" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── USP Bar ────────────────────────────────────────────────────────────────
const USP_ITEMS = [
  { icon: <IconCheck />, text: "100% herbal products" },
  { icon: <IconHeart />, text: "Paraben-free promise" },
  { icon: <IconUser />, text: "Women-only space" },
  { icon: <IconStar />, text: "Expert female staff" },
];

function UspBar() {
  return (
    <div style={{
      background: colors.deep,
      display: "flex", justifyContent: "center",
      flexWrap: "wrap",
    }}>
      {USP_ITEMS.map(({ icon, text }) => (
        <div key={text} style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "18px 28px", flex: 1, minWidth: "160px",
          borderRight: `0.5px solid rgba(255,255,255,0.1)`,
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: "rgba(201,113,142,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: colors.blush, flexShrink: 0,
          }}>
            {icon}
          </div>
          <span style={{ fontSize: "12px", color: colors.blush, letterSpacing: "0.5px", fontWeight: 500 }}>
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Section Header ─────────────────────────────────────────────────────────
function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "40px" }}>
      <p style={{
        fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
        color: colors.mauve, fontWeight: 500, marginBottom: "10px",
      }}>{label}</p>
      <h2 style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(26px, 3.5vw, 36px)", color: colors.deep,
        fontWeight: 500, lineHeight: 1.25, marginBottom: subtitle ? "12px" : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontSize: "15px", color: colors.muted, lineHeight: 1.7,
          maxWidth: center ? "480px" : "500px",
          margin: center ? "0 auto" : 0,
        }}>{subtitle}</p>
      )}
    </div>
  );
}

// ── Services ───────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name: "Skin & face",
    desc: "Herbal facials, skin treatments & exclusive care",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.burgundy} strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    name: "Hair care",
    desc: "Cut, treatment, rebonding & colouring",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.burgundy} strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 5-5 13-5 13S7 12 7 7a5 5 0 0 1 5-5z" />
      </svg>
    ),
  },
  {
    name: "Bridal makeup",
    desc: "Complete bridal packages & grooming",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.burgundy} strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Spa & massage",
    desc: "Body relaxation & rejuvenation therapies",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.burgundy} strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
  {
    name: "Yoga studio",
    desc: "Women-only classes with pro female instructor",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.burgundy} strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="4" r="2" /><path d="M7 10l5 2 5-2M12 6v6M9 20l3-4 3 4" />
      </svg>
    ),
  },
  {
    name: "Nail care",
    desc: "Manicure, pedicure & nail art",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.burgundy} strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function Services() {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} style={{ padding: "80px 40px", background: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
        <SectionHeader label="Our offerings" title="Everything you deserve" />
        <Link href="/services" style={{
          background: "transparent", color: colors.burgundy,
          border: `1.5px solid ${colors.mauve}`,
          padding: "9px 20px", borderRadius: "30px",
          fontSize: "12px", fontWeight: 500, textDecoration: "none",
          marginBottom: "40px",
        }}>
          View all services
        </Link>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "16px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
        {SERVICES.map(({ name, desc, icon }, i) => (
          <div key={name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? colors.blush : colors.cream,
              border: `0.5px solid ${hovered === i ? colors.mauve : "#e8d5dc"}`,
              borderRadius: "16px", padding: "24px 18px",
              textAlign: "center", cursor: "pointer",
              transition: "all 0.2s ease",
              transitionDelay: `${i * 0.06}s`,
            }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "50%",
              background: hovered === i ? colors.rose : colors.blush,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 14px", transition: "background 0.2s",
            }}>
              {icon}
            </div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: colors.deep, marginBottom: "6px" }}>{name}</div>
            <div style={{ fontSize: "12px", color: colors.muted, lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── About Teaser ───────────────────────────────────────────────────────────
function AboutTeaser() {
  const [ref, visible] = useInView();
  const VALUES = [
    { title: "Safety first", desc: "No fake, harmful, or paraben-containing products ever used" },
    { title: "Quality & authenticity", desc: "Only certified herbal and non-hazardous cosmetics" },
    { title: "Women's empowerment", desc: "A safe, welcoming space designed exclusively for women" },
  ];

  return (
    <section ref={ref} style={{ padding: "80px 40px", background: colors.cream }}>
      <div style={{
        display: "flex", gap: "56px", alignItems: "center", flexWrap: "wrap",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        {/* Image collage */}
        <div style={{ flex: "0 0 300px", height: "380px", position: "relative" }}>
          <div style={{
            width: "240px", height: "340px", background: colors.rose,
            borderRadius: "16px", position: "absolute", left: 0, top: 0,
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
          }}>
            <FaceSVG size={180} />
          </div>
          <div style={{
            width: "160px", height: "200px", background: colors.blush,
            borderRadius: "12px", position: "absolute", right: 0, bottom: 0,
            border: `4px solid ${colors.cream}`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "8px",
          }}>
            <span style={{ fontSize: "32px", color: colors.burgundy, fontFamily: "Georgia, serif" }}>♀</span>
            <span style={{ fontSize: "10px", color: colors.burgundy, letterSpacing: "2px", fontWeight: 500 }}>WELLNESS</span>
            <span style={{ fontSize: "10px", color: colors.mauve, letterSpacing: "2px", fontWeight: 500 }}>& BEAUTY</span>
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <SectionHeader label="Our story" title={<>First of its kind<br />in Sylhet</>} />
          <p style={{ fontSize: "14px", color: colors.text, lineHeight: 1.8, marginBottom: "8px" }}>
            FEmmE is Sylhet&apos;s first beauty clinic and parlour to offer premium quality services
            in an exquisite, women-only atmosphere at a reasonable price.
          </p>
          <p style={{ fontSize: "14px", color: colors.text, lineHeight: 1.8, marginBottom: "28px" }}>
            We only use genuine herbal and paraben-free products — never anything harmful.
            Our fully equipped yoga studio is guided by a professional female instructor,
            empowering every woman to feel her best.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {VALUES.map(({ title, desc }) => (
              <div key={title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: colors.blush, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: colors.burgundy,
                }}>
                  <IconCheck />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 500, color: colors.deep, marginBottom: "2px" }}>{title}</div>
                  <div style={{ fontSize: "13px", color: colors.muted, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" style={{
            display: "inline-block", marginTop: "28px",
            color: colors.burgundy, fontSize: "13px", fontWeight: 500,
            textDecoration: "none", borderBottom: `1.5px solid ${colors.mauve}`,
            paddingBottom: "2px",
          }}>
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Reviews ────────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: "Nusrat Rahman", initials: "NR", service: "Bridal makeup", rating: 5, text: "The bridal package was absolutely perfect. Every detail was taken care of and the team made me feel so special on my big day." },
  { name: "Sabrina Ahmed", initials: "SA", service: "Herbal facial", rating: 5, text: "Love that they only use herbal products — my skin has never felt better after the facial treatment. Highly recommend FEmmE!" },
  { name: "Tasnim Khan", initials: "TK", service: "Yoga studio", rating: 5, text: "The yoga studio is gorgeous and the instructor is amazing. Finally a women-only wellness space in Sylhet — this is what we needed!" },
];

function Reviews() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ background: colors.cream, padding: "80px 40px" }}>
      <SectionHeader label="Client love" title="What our clients say" center />
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px", marginTop: "40px",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        {REVIEWS.map(({ name, initials, service, rating, text }, i) => (
          <div key={name} style={{
            background: "#fff", border: `0.5px solid #e8d5dc`,
            borderRadius: "16px", padding: "24px",
            transitionDelay: `${i * 0.1}s`,
          }}>
            <div style={{ color: colors.mauve, fontSize: "14px", letterSpacing: "2px", marginBottom: "12px" }}>
              {"★".repeat(rating)}
            </div>
            <p style={{ fontSize: "13px", color: colors.text, lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>
              &ldquo;{text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: colors.rose, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "13px", fontWeight: 500, color: colors.burgundy,
              }}>
                {initials}
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: colors.deep }}>{name}</div>
                <div style={{ fontSize: "11px", color: colors.muted }}>{service}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Gallery Teaser ─────────────────────────────────────────────────────────
const GALLERY_ITEMS = [
  { cat: "Bridal look", bg: colors.rose, span: "tall" },
  { cat: "Herbal facial", bg: colors.blush },
  { cat: "Hair colour", bg: "#d4908a" },
  { cat: "Studio interior", bg: "#fbeaf0", span: "wide" },
  { cat: "Yoga class", bg: "#fdf6f8", border: true },
  { cat: "Party makeup", bg: colors.mauve },
];

function GalleryTeaser() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: "80px 40px", background: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
        <SectionHeader label="A glimpse inside" title="Our gallery" />
        <Link href="/gallery" style={{
          background: "transparent", color: colors.burgundy,
          border: `1.5px solid ${colors.mauve}`,
          padding: "9px 20px", borderRadius: "30px",
          fontSize: "12px", fontWeight: 500, textDecoration: "none",
          marginBottom: "40px",
        }}>
          See full gallery
        </Link>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gridTemplateRows: "160px 160px",
        gap: "12px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        {GALLERY_ITEMS.map(({ cat, bg, span, border }, i) => (
          <div key={cat} style={{
            gridRow: span === "tall" ? "span 2" : "span 1",
            gridColumn: span === "wide" ? "span 2" : "span 1",
            background: bg, borderRadius: "14px",
            border: border ? `0.5px solid #e8d5dc` : "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden", cursor: "pointer",
          }}
            onMouseEnter={(e) => e.currentTarget.querySelector(".overlay").style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.querySelector(".overlay").style.opacity = "0"}>
            <span style={{ fontSize: "11px", fontWeight: 500, color: colors.burgundy, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              {cat}
            </span>
            <div className="overlay" style={{
              position: "absolute", inset: 0,
              background: "rgba(74,26,46,0.55)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0, transition: "opacity 0.2s", borderRadius: "14px",
            }}>
              <span style={{ color: "#fff", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500 }}>
                {cat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Magic Moments Gallery ──────────────────────────────────────────────
const MOMENTS_ITEMS = [
  { cat: "Spa relaxation", bg: colors.blush },
  { cat: "Bridal moment", bg: colors.rose, span: "tall" },
  { cat: "Yoga session", bg: "#fdf6f8" },
  { cat: "Hair styling", bg: "#d4908a" },
  { cat: "Nail art", bg: colors.mauve },
  { cat: "Facial treatment", bg: "#fbeaf0" },
];

function MagicMoments() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: "80px 40px", background: colors.cream }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
        <SectionHeader label="Our work" title="Magic Moments" />
        <Link href="/gallery" style={{
          background: "transparent", color: colors.burgundy,
          border: `1.5px solid ${colors.mauve}`,
          padding: "9px 20px", borderRadius: "30px",
          fontSize: "12px", fontWeight: 500, textDecoration: "none",
          marginBottom: "40px",
        }}>
          View all
        </Link>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gridTemplateRows: "160px 160px",
        gap: "12px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        {MOMENTS_ITEMS.map(({ cat, bg, span, border }, i) => (
          <div key={cat} style={{
            gridRow: span === "tall" ? "span 2" : "span 1",
            gridColumn: span === "wide" ? "span 2" : "span 1",
            background: bg, borderRadius: "14px",
            border: border ? `0.5px solid #e8d5dc` : "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden", cursor: "pointer",
          }}
            onMouseEnter={(e) => e.currentTarget.querySelector(".overlay").style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.querySelector(".overlay").style.opacity = "0"}>
            <span style={{ fontSize: "11px", fontWeight: 500, color: colors.burgundy, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              {cat}
            </span>
            <div className="overlay" style={{
              position: "absolute", inset: 0,
              background: "rgba(74,26,46,0.55)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0, transition: "opacity 0.2s", borderRadius: "14px",
            }}>
              <span style={{ color: "#fff", fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500 }}>
                {cat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA Banner ─────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section style={{
      background: colors.deep, padding: "72px 40px",
      textAlign: "center",
    }}>
      <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: colors.mauve, marginBottom: "16px", fontWeight: 500 }}>
        Ready to glow?
      </p>
      <h2 style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(26px, 4vw, 40px)", color: colors.blush,
        fontWeight: 500, marginBottom: "16px", lineHeight: 1.2,
      }}>
        Book your appointment today
      </h2>
      <p style={{ fontSize: "15px", color: "rgba(245,208,222,0.7)", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto 36px" }}>
        Experience Sylhet&apos;s finest women-only beauty clinic. Walk in, or book ahead to reserve your spot.
      </p>
      <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/contact" style={{
          background: colors.mauve, color: "#fff",
          padding: "13px 30px", borderRadius: "30px",
          fontSize: "13px", fontWeight: 500, textDecoration: "none",
          letterSpacing: "0.5px",
        }}>
          Book now
        </Link>
        <Link href="/services" style={{
          background: "transparent", color: colors.blush,
          border: `1.5px solid rgba(245,208,222,0.4)`,
          padding: "12px 30px", borderRadius: "30px",
          fontSize: "13px", fontWeight: 500, textDecoration: "none",
        }}>
          View services
        </Link>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: colors.deep, color: colors.blush, padding: "40px 40px 28px" }}>
      <div style={{
        display: "flex", gap: "40px", flexWrap: "wrap",
        borderBottom: `0.5px solid rgba(245,208,222,0.15)`,
        paddingBottom: "32px", marginBottom: "24px",
      }}>
        <div style={{ flex: 1, minWidth: "180px" }}>
          <div style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "22px", letterSpacing: "4px", marginBottom: "12px",
          }}>FEmmE</div>
          <p style={{ fontSize: "12px", color: "rgba(245,208,222,0.6)", lineHeight: 1.7, maxWidth: "200px" }}>
            Sylhet&apos;s first beauty clinic & parlour — where every woman deserves to shine.
          </p>
        </div>
        {[
          { title: "Navigate", links: ["Home", "About us", "Services", "Gallery", "Contact"] },
          { title: "Services", links: ["Bridal packages", "Skin & facials", "Hair care", "Spa & massage", "Yoga studio"] },
          { title: "Contact", links: ["Sylhet, Bangladesh", "+880 XXXX XXXXXX", "hello@femme.com.bd", "Sat–Thu: 9am – 8pm"] },
        ].map(({ title, links }) => (
          <div key={title} style={{ flex: 1, minWidth: "140px" }}>
            <h4 style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px", fontWeight: 500 }}>
              {title}
            </h4>
            {links.map((link) => (
              <div key={link} style={{ fontSize: "13px", color: "rgba(245,208,222,0.6)", marginBottom: "8px", cursor: "pointer" }}>
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <p style={{ fontSize: "12px", color: "rgba(245,208,222,0.4)" }}>
          © 2025 FEmmE Beauty Clinic. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {["IG", "FB"].map((s) => (
            <div key={s} style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: `0.5px solid rgba(245,208,222,0.25)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", color: colors.blush, cursor: "pointer",
              fontWeight: 500,
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: Georgia, 'Times New Roman', serif; background: #fdf6f8; }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.85; }
        @media (max-width: 768px) {
          .femme-desktop-nav { display: none !important; }
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <UspBar />
        <Services />
        <AboutTeaser />
        <Reviews />
        <MagicMoments />
        <GalleryTeaser />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}