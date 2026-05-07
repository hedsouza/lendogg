'use client'

import Link from 'next/link'

const cuts = [
  { id:1,  title:'The Signature Fade',  tag:'BUSSIN',    desc:'Skin fade to perfection. Zero impurities.',        color:'#d4a832', emoji:'⚡' },
  { id:2,  title:'Mullet Era',          tag:'VIRAL',     desc:'Bringing the mullet back. Business up front, party in the back.',  color:'#c8f542', emoji:'🔥' },
  { id:3,  title:'The Taper King',      tag:'ON SIGHT',  desc:'Sharp taper, cleaner than your jokes.',            color:'#d4a832', emoji:'👑' },
  { id:4,  title:'Burst Fade Rizz',     tag:'GOAT',      desc:'Burst fade with a natural look. Rizz activated.',  color:'#e5311d', emoji:'🐐' },
  { id:5,  title:'Edgar Gang',          tag:'NO CAP',    desc:'Edgar cut hitting different in 2025.',             color:'#c8f542', emoji:'🎯' },
  { id:6,  title:'French Crop Drip',    tag:'LOWKEY LIT',desc:'French crop fresh enough to eat.',                 color:'#d4a832', emoji:'🍋' },
  { id:7,  title:'Drop Fade God',       tag:'MAIN CHARACTER', desc:'Drop fade that says "I woke up like this."',  color:'#c8f542', emoji:'✨' },
  { id:8,  title:'Mohawk Wave',         tag:'HIP HOP',   desc:'For the ones who don\'t care what you think.',     color:'#e5311d', emoji:'🎤' },
  { id:9,  title:'Bald Fade Slay',      tag:'SLAY',      desc:'Going bald? Nah. This is art.',                   color:'#d4a832', emoji:'💎' },
]

const tags = ['ALL', 'BUSSIN', 'VIRAL', 'ON SIGHT', 'GOAT', 'HIP HOP']

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop:120, paddingBottom:60, textAlign:'center', padding:'120px 24px 60px' }}>
        <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:6, color:'#c8f542', marginBottom:16 }}>THE DRIP</div>
        <h1 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(56px,10vw,100px)', letterSpacing:8, lineHeight:0.9, marginBottom:16 }}>
          THE<br /><span style={{ color:'#d4a832' }}>GALLERY</span>
        </h1>
        <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:18, color:'rgba(245,240,232,0.5)', letterSpacing:1 }}>
          Every cut bussin. Every client leaving like a main character.
        </p>
      </section>

      {/* Gold divider */}
      <div style={{ height:2, background:'linear-gradient(90deg,transparent,#d4a832,#c8f542,#d4a832,transparent)' }} />

      {/* Filter tabs */}
      <section style={{ padding:'40px 40px 0', display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center' }}>
        {tags.map(t => (
          <div key={t} style={{
            fontFamily:'Bebas Neue,sans-serif', fontSize:14, letterSpacing:4,
            border:'1px solid rgba(212,168,50,0.25)', color:'rgba(212,168,50,0.6)',
            padding:'8px 20px', cursor:'pointer',
            transition:'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#d4a832'; e.currentTarget.style.color='#d4a832'; e.currentTarget.style.background='rgba(212,168,50,0.05)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,168,50,0.25)'; e.currentTarget.style.color='rgba(212,168,50,0.6)'; e.currentTarget.style.background='transparent' }}
          >{t}</div>
        ))}
      </section>

      {/* Grid */}
      <section style={{ padding:'40px 40px 100px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:3 }}>
          {cuts.map((cut, i) => (
            <div key={cut.id} style={{
              background:'#111',
              aspectRatio: i === 0 || i === 4 ? '1/1.4' : '1/1',
              position:'relative', overflow:'hidden',
              display:'flex', flexDirection:'column', justifyContent:'flex-end',
              cursor:'pointer', transition:'transform 0.3s',
              gridRow: i === 0 ? 'span 2' : 'auto',
            }}
            onMouseEnter={e => e.currentTarget.style.transform='scale(0.98)'}
            onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
            >
              {/* Background pattern simulating photo placeholder */}
              <div style={{
                position:'absolute', inset:0,
                background: `linear-gradient(135deg, #0a0a0a 0%, ${cut.color}18 50%, #111 100%)`,
              }} />

              {/* Grid pattern */}
              <div style={{
                position:'absolute', inset:0,
                backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 39px,rgba(255,255,255,0.02) 40px)',
              }} />

              {/* Big emoji placeholder */}
              <div style={{
                position:'absolute', top:'50%', left:'50%',
                transform:'translate(-50%,-60%)',
                fontSize: i === 0 ? 100 : 64,
                opacity:0.15,
              }}>{cut.emoji}</div>

              {/* Photo upload hint */}
              <div style={{
                position:'absolute', top:16, right:16,
                fontFamily:'Space Mono,monospace', fontSize:8, letterSpacing:2,
                color:'rgba(255,255,255,0.15)', border:'1px dashed rgba(255,255,255,0.1)',
                padding:'4px 8px',
              }}>ADD PHOTO</div>

              {/* Content overlay */}
              <div style={{
                position:'relative', zIndex:2,
                background:'linear-gradient(0deg,rgba(8,8,8,0.95) 0%,rgba(8,8,8,0.6) 60%,transparent 100%)',
                padding:'24px 20px',
              }}>
                <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:4, color:cut.color, marginBottom:8 }}>
                  {cut.tag}
                </div>
                <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize: i === 0 ? 32 : 24, letterSpacing:3, color:'#f5f0e8', lineHeight:1, marginBottom:6 }}>
                  {cut.title}
                </div>
                <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:13, color:'rgba(245,240,232,0.5)', lineHeight:1.4 }}>
                  {cut.desc}
                </div>
              </div>

              {/* Hover gold border */}
              <div style={{
                position:'absolute', inset:0,
                border:`2px solid ${cut.color}`,
                opacity:0, transition:'opacity 0.3s',
                pointerEvents:'none',
              }} className="gallery-hover-border" />
            </div>
          ))}
        </div>

        {/* Upload note */}
        <div style={{
          marginTop:48, padding:'24px 32px',
          border:'1px dashed rgba(212,168,50,0.2)',
          background:'rgba(212,168,50,0.02)',
          textAlign:'center',
        }}>
          <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:24, letterSpacing:4, color:'#d4a832', marginBottom:8 }}>📸 GOT PICS?</div>
          <div style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:15, color:'rgba(245,240,232,0.4)', lineHeight:1.6 }}>
            Tag <span style={{ color:'#c8f542' }}>@lendogg.cuts</span> on IG and your cut could end up here.<br />
            Drop pics in the DMs — let the timeline see the drip.
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:60 }}>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:4, color:'rgba(245,240,232,0.3)', marginBottom:24 }}>
            WANT THIS TO BE YOUR CUT?
          </div>
          <Link href="/book" style={{
            fontFamily:'Bebas Neue,sans-serif', fontSize:22, letterSpacing:5,
            background:'#d4a832', color:'#080808', padding:'16px 48px',
            textDecoration:'none', transition:'all 0.2s', display:'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#c8f542'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='#d4a832'; e.currentTarget.style.transform='translateY(0)' }}
          >Book Your Glow-Up →</Link>
        </div>
      </section>

      <style>{`
        div:hover .gallery-hover-border { opacity: 1 !important; }
      `}</style>
    </>
  )
}
