'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PawIcon from './PawIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/',       label: 'Home' },
    { href: '/book',   label: 'Book Now' },
    { href: '/gallery',label: 'Gallery' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(212,168,50,0.2)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 32px',
      height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
        <PawIcon size={36} />
        <div>
          <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:22, letterSpacing:4, color:'#d4a832', lineHeight:1 }}>LEN DOGG</div>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:7, letterSpacing:3, color:'#c8f542', lineHeight:1 }}>HAIR STUDIO</div>
        </div>
      </Link>

      {/* Desktop links */}
      <div style={{ display:'flex', gap:40, alignItems:'center' }} className="desktop-nav">
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily:'Bebas Neue,sans-serif', fontSize:18, letterSpacing:3,
            color: pathname === l.href ? '#d4a832' : '#f5f0e8',
            textDecoration:'none',
            borderBottom: pathname === l.href ? '2px solid #c8f542' : '2px solid transparent',
            paddingBottom: 2,
            transition:'all 0.2s',
          }}>{l.label}</Link>
        ))}
        <Link href="/book" style={{
          fontFamily:'Bebas Neue,sans-serif', fontSize:16, letterSpacing:3,
          background:'#d4a832', color:'#080808', padding:'8px 20px',
          textDecoration:'none', transition:'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background='#c8f542')}
        onMouseLeave={e => (e.currentTarget.style.background='#d4a832')}
        >Slide In DMs →</Link>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} style={{
        display:'none', background:'none', border:'none', cursor:'pointer',
        color:'#d4a832', fontSize:28,
      }} className="mobile-menu-btn" aria-label="menu">
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'fixed', top:64, left:0, right:0, bottom:0,
          background:'rgba(8,8,8,0.98)', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:40, zIndex:999,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily:'Bebas Neue,sans-serif', fontSize:48, letterSpacing:6,
              color: pathname === l.href ? '#d4a832' : '#f5f0e8',
              textDecoration:'none',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
