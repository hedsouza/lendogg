'use client'

import Link from 'next/link'
import PawIcon from '@/components/PawIcon'

export default function Home() {
  const services = [
    { name: 'The Fade', price: '$35', desc: 'A clean skin fade, precision every time. Guaranteed.', tag: 'SIGNATURE' },
    { name: 'Aura Cut', price: '$45', desc: 'Whatever\'s trending — Lenny\'s already mastered it.', tag: 'TRENDING' },
    { name: 'Line Up', price: '$20', desc: 'Edges so sharp they\'ll think you had them surgically done.', tag: 'SHARP' },
    { name: 'Full Service', price: '$65', desc: 'Full cut + line up + style. Walk out looking your absolute best.', tag: 'BEST VALUE' },
  ]

  const marqueeWords = ['BOLD', 'FRESH', 'SHARP', 'CLEAN', 'PRECISE', 'HIP HOP', 'CLASSIC', 'STYLED']

  return (
    <>
      {/* ── HERO ── */}
      <section className="stripe-bg" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '100px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* corner ornaments */}
        {['top:24px;left:24px', 'top:24px;right:24px', 'bottom:24px;left:24px', 'bottom:24px;right:24px'].map((pos, i) => (
          <div key={i} style={{ position:'absolute', ...Object.fromEntries(pos.split(';').map(p => p.split(':'))), width:32, height:32,
            borderTop: i < 2 ? '2px solid rgba(212,168,50,0.3)' : 'none',
            borderBottom: i >= 2 ? '2px solid rgba(212,168,50,0.3)' : 'none',
            borderLeft: i % 2 === 0 ? '2px solid rgba(212,168,50,0.3)' : 'none',
            borderRight: i % 2 === 1 ? '2px solid rgba(212,168,50,0.3)' : 'none',
          }} />
        ))}

        {/* Icon */}
        <div className="animate-fade-up animate-pulse-glow" style={{ opacity:0, marginBottom:32 }}>
          <div className="animate-spin-slow" style={{ display:'inline-block' }}>
            <PawIcon size={160} />
          </div>
        </div>

        {/* Wordmark */}
        <h1 className="animate-fade-up delay-200 text-gold-gradient font-display"
          style={{ opacity:0, fontSize:'clamp(72px,18vw,150px)', letterSpacing:12, lineHeight:0.85, marginBottom:8 }}>
          LEN DOGG
        </h1>
        <div className="animate-fade-up delay-300 font-display animate-neon-flicker"
          style={{ opacity:0, fontSize:'clamp(24px,6vw,48px)', letterSpacing:16, color:'#c8f542', marginBottom:24 }}>
          HAIR STUDIO
        </div>
        <p className="animate-fade-up delay-400 font-mono"
          style={{ opacity:0, fontSize:13, letterSpacing:4, color:'rgba(245,240,232,0.45)', marginBottom:48, textTransform:'uppercase' }}>
          Fresh Cuts. Every Time.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-500" style={{ opacity:0, display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center' }}>
          <Link href="/book" style={{
            fontFamily:'Bebas Neue,sans-serif', fontSize:20, letterSpacing:4,
            background:'#d4a832', color:'#080808', padding:'14px 36px',
            textDecoration:'none', transition:'all 0.2s', display:'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#c8f542'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='#d4a832'; e.currentTarget.style.transform='translateY(0)' }}
          >Book Now →</Link>

          <Link href="/gallery" style={{
            fontFamily:'Bebas Neue,sans-serif', fontSize:20, letterSpacing:4,
            border:'2px solid #d4a832', color:'#d4a832', padding:'12px 36px',
            textDecoration:'none', transition:'all 0.2s', display:'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(212,168,50,0.1)'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.transform='translateY(0)' }}
          >View Gallery →</Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-700" style={{ opacity:0, position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)' }}>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:4, color:'rgba(212,168,50,0.4)', marginBottom:8 }}>SCROLL</div>
          <div style={{ width:1, height:40, background:'linear-gradient(180deg,rgba(212,168,50,0.4),transparent)', margin:'0 auto' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background:'#d4a832', padding:'14px 0', overflow:'hidden' }}>
        <div style={{ display:'flex', animation:'marquee 12s linear infinite', width:'max-content' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} style={{ display:'flex', gap:32, marginRight:32 }}>
              {marqueeWords.map(v => (
                <span key={v} style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:18, letterSpacing:6, color:'#080808', whiteSpace:'nowrap' }}>
                  {v} ✦
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ padding:'100px 40px', maxWidth:1000, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:6, color:'#c8f542', marginBottom:16 }}>THE MENU</div>
          <h2 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(48px,8vw,80px)', letterSpacing:6, lineHeight:1 }}>
            <span style={{ color:'#d4a832' }}>WHAT</span> WE DO
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:2 }}>
          {services.map((s, i) => (
            <div key={s.name} style={{
              background:'#1a1a1a', padding:'36px 28px',
              borderLeft:`3px solid ${i % 2 === 0 ? '#d4a832' : '#c8f542'}`,
              transition:'transform 0.3s, background 0.3s',
              cursor:'default',
              position:'relative', overflow:'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#222'; e.currentTarget.style.transform='translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.background='#1a1a1a'; e.currentTarget.style.transform='translateY(0)' }}
            >
              <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:4, color:'#c8f542', marginBottom:12 }}>{s.tag}</div>
              <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:32, letterSpacing:3, color:'#d4a832', marginBottom:8 }}>{s.name}</div>
              <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:15, color:'rgba(245,240,232,0.6)', lineHeight:1.5, marginBottom:20 }}>{s.desc}</div>
              <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:36, color:'#f5f0e8', letterSpacing:2 }}>{s.price}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:48 }}>
          <Link href="/book" style={{
            fontFamily:'Bebas Neue,sans-serif', fontSize:18, letterSpacing:4,
            background:'transparent', border:'1px solid rgba(212,168,50,0.4)',
            color:'#d4a832', padding:'12px 32px', textDecoration:'none',
            transition:'all 0.2s', display:'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(212,168,50,0.1)' }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent' }}
          >Book Your Slot →</Link>
        </div>
      </section>

      {/* ── WHO IS LEN DOGG ── */}
      <section style={{ padding:'80px 40px', background:'#0f0f0f', borderTop:'1px solid rgba(212,168,50,0.08)', borderBottom:'1px solid rgba(212,168,50,0.08)' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:6, color:'#c8f542', marginBottom:16 }}>WHO IS</div>
            <h2 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(48px,7vw,80px)', letterSpacing:4, lineHeight:0.9, marginBottom:24 }}>
              <span style={{ color:'#d4a832' }}>LEN</span><br />DOGG
            </h2>
            <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:17, color:'rgba(245,240,232,0.65)', lineHeight:1.7, marginBottom:16 }}>
              Lenny is the real deal. Fresh out the chair and already setting the standard.
              The skill, the eye for detail, the passion — every cut proves it.
            </p>
            <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:17, color:'rgba(245,240,232,0.65)', lineHeight:1.7, marginBottom:32 }}>
              Rooted in hip hop culture and obsessed with the craft. Len Dogg is building
              something special — one great cut at a time.
            </p>
            <div style={{ fontFamily:'Space Mono,monospace', fontSize:11, letterSpacing:2, color:'#c8f542' }}>
              @lendogg.cuts ✂️
            </div>
          </div>

          <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ position:'relative' }}>
              <div style={{ width:240, height:240, borderRadius:'50%', border:'2px dashed rgba(212,168,50,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <PawIcon size={180} />
              </div>
              {/* Floating tags */}
              {[
                { text:'FRESH', top:'-16px', right:'-20px', bg:'#c8f542', color:'#080808' },
                { text:'PRECISE', bottom:'-16px', left:'-20px', bg:'#d4a832', color:'#080808' },
                { text:'THE BEST', bottom:'20px', right:'-30px', bg:'#e5311d', color:'#fff' },
              ].map(tag => (
                <div key={tag.text} style={{
                  position:'absolute', ...Object.fromEntries(Object.entries(tag).filter(([k]) => ['top','bottom','left','right'].includes(k))),
                  background:tag.bg, color:tag.color,
                  fontFamily:'Bebas Neue,sans-serif', fontSize:14, letterSpacing:3,
                  padding:'6px 12px',
                }}>{tag.text}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding:'80px 40px', textAlign:'center', background:'#080808' }}>
        <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:6, color:'#c8f542', marginBottom:16 }}>DON&apos;T WAIT</div>
        <h2 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(40px,7vw,72px)', letterSpacing:6, marginBottom:8 }}>
          READY FOR YOUR<br /><span style={{ color:'#d4a832' }}>BEST LOOK?</span>
        </h2>
        <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:18, color:'rgba(245,240,232,0.5)', marginBottom:40 }}>
          Slots fill up fast. Book before it&apos;s too late.
        </p>
        <Link href="/book" style={{
          fontFamily:'Bebas Neue,sans-serif', fontSize:24, letterSpacing:6,
          background:'#d4a832', color:'#080808', padding:'18px 56px',
          textDecoration:'none', transition:'all 0.2s', display:'inline-block',
        }}
        onMouseEnter={e => { e.currentTarget.style.background='#c8f542'; e.currentTarget.style.transform='scale(1.02)' }}
        onMouseLeave={e => { e.currentTarget.style.background='#d4a832'; e.currentTarget.style.transform='scale(1)' }}
        >Book Now →</Link>
      </section>
    </>
  )
}
