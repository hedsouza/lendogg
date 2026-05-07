'use client'

import Link from 'next/link'
import PawIcon from './PawIcon'

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(212,168,50,0.15)',
      padding: '60px 40px 32px',
    }}>
      {/* Marquee */}
      <div style={{ overflow:'hidden', marginBottom:48, borderTop:'1px solid rgba(212,168,50,0.1)', borderBottom:'1px solid rgba(212,168,50,0.1)', padding:'12px 0' }}>
        <div style={{ display:'flex', animation:'marquee 18s linear infinite', width:'max-content' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:20, letterSpacing:8, color:'rgba(212,168,50,0.3)', marginRight:40, whiteSpace:'nowrap' }}>
              FRESH CUTS ✂ SHARP FADES ✂ CLEAN LINES ✂ EXPERT STYLING ✂
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:40 }}>
        {/* Brand */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
            <PawIcon size={48} />
            <div>
              <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:24, letterSpacing:4, color:'#d4a832' }}>LEN DOGG</div>
              <div style={{ fontFamily:'Space Mono,monospace', fontSize:7, letterSpacing:3, color:'#c8f542' }}>HAIR STUDIO</div>
            </div>
          </div>
          <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:14, color:'rgba(245,240,232,0.5)', lineHeight:1.6 }}>
            Fresh fades & stylish cuts.<br />Precision styling, every time.
          </p>
        </div>

        {/* Links */}
        <div>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:4, color:'#c8f542', marginBottom:20 }}>NAVIGATE</div>
          {[['/', 'Home'], ['/book', 'Book Now'], ['/gallery', 'Gallery']].map(([href, label]) => (
            <div key={href} style={{ marginBottom:10 }}>
              <Link href={href} style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:18, letterSpacing:2, color:'rgba(245,240,232,0.6)', textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='#d4a832')}
                onMouseLeave={e => (e.currentTarget.style.color='rgba(245,240,232,0.6)')}
              >{label}</Link>
            </div>
          ))}
        </div>

        {/* Social */}
        <div>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:4, color:'#c8f542', marginBottom:20 }}>FIND US</div>
          <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:24, color:'#f5f0e8', letterSpacing:2, marginBottom:8 }}>
            <span style={{ color:'#c8f542' }}>@</span>lendogg<span style={{ color:'#d4a832' }}>.cuts</span>
          </div>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, color:'rgba(245,240,232,0.4)', lineHeight:1.8 }}>
            Message us to book<br />Just great cuts 🐾✂️
          </div>
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'40px auto 0', paddingTop:24, borderTop:'1px solid rgba(212,168,50,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
        <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:3, color:'rgba(245,240,232,0.2)' }}>
          © 2025 LEN DOGG HAIR STUDIO. ALL RIGHTS RESERVED.
        </div>
        <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:2, color:'rgba(212,168,50,0.3)' }}>
          BUILT WITH PASSION 🔥
        </div>
      </div>
    </footer>
  )
}
