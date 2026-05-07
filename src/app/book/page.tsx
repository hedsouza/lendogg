'use client'
import { useState } from 'react'
import PawIcon from '@/components/PawIcon'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const services = [
  { id: 'fade',       name: 'The Fade',       price: '$35', time: '45 min' },
  { id: 'aura',       name: 'Aura Cut',   price: '$45', time: '60 min' },
  { id: 'lineup',     name: 'Line Up',        price: '$20', time: '20 min' },
  { id: 'fullservice',name: 'Full Service',   price: '$65', time: '90 min' },
]

const times = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM']

export default function BookPage() {
  const [selected, setSelected] = useState('')
  const [timeSlot, setTimeSlot] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [form, setForm] = useState({ name:'', phone:'', ig:'', notes:'' })

  const inputStyle = {
    width:'100%', background:'#1a1a1a', border:'1px solid rgba(212,168,50,0.2)',
    color:'#f5f0e8', fontFamily:'Barlow Condensed,sans-serif', fontSize:16,
    padding:'14px 16px', outline:'none', transition:'border-color 0.2s',
  }

  async function handleSubmit() {
    if (!selected || !timeSlot || !form.name || !form.phone) return
    const svc = services.find(s => s.id === selected)!
    setSubmitState('loading')
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          ig: form.ig,
          notes: form.notes,
          service: svc.name,
          price: svc.price,
          duration: svc.time,
          timeSlot,
        }),
      })
      setSubmitState(res.ok ? 'success' : 'error')
    } catch {
      setSubmitState('error')
    }
  }

  if (submitState === 'success') return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:32, padding:40, textAlign:'center' }}>
      <div style={{ animation:'pulse-glow 3s infinite' }}>
        <PawIcon size={120} />
      </div>
      <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:64, letterSpacing:6, color:'#d4a832', lineHeight:1 }}>YOU&apos;RE BOOKED!</div>
      <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:28, letterSpacing:4, color:'#c8f542' }}>BOOKING REQUEST SENT 🔥</div>
      <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:18, color:'rgba(245,240,232,0.6)', maxWidth:480, lineHeight:1.6 }}>
        Len Dogg will reach out to confirm your slot. See you soon.
      </p>
      <div style={{ fontFamily:'Space Mono,monospace', fontSize:11, letterSpacing:3, color:'rgba(212,168,50,0.5)' }}>
        @lendogg.cuts ✂️
      </div>
    </div>
  )

  if (submitState === 'error') return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:32, padding:40, textAlign:'center' }}>
      <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:48, letterSpacing:6, color:'#e5311d', lineHeight:1 }}>SOMETHING WENT WRONG</div>
      <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:18, color:'rgba(245,240,232,0.6)', maxWidth:480, lineHeight:1.6 }}>
        Your booking didn&apos;t go through. Please try again or contact us directly on Instagram.
      </p>
      <button onClick={() => setSubmitState('idle')} style={{
        fontFamily:'Bebas Neue,sans-serif', fontSize:18, letterSpacing:4,
        background:'#d4a832', color:'#080808', border:'none', padding:'14px 32px', cursor:'pointer',
      }}>Try Again</button>
      <div style={{ fontFamily:'Space Mono,monospace', fontSize:11, letterSpacing:3, color:'rgba(212,168,50,0.5)' }}>
        @lendogg.cuts ✂️
      </div>
    </div>
  )

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop:120, paddingBottom:60, textAlign:'center', padding:'120px 24px 60px' }}>
        <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:6, color:'#c8f542', marginBottom:16 }}>BOOK NOW</div>
        <h1 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(56px,10vw,100px)', letterSpacing:8, lineHeight:0.9, marginBottom:16 }}>
          BOOK<br /><span style={{ color:'#d4a832' }}>YOUR CUT</span>
        </h1>
        <p style={{ fontFamily:'Barlow Condensed,sans-serif', fontSize:18, color:'rgba(245,240,232,0.5)', letterSpacing:1 }}>
          Slots fill up fast. Reserve yours today.
        </p>
      </section>

      {/* Gold divider */}
      <div style={{ height:2, background:'linear-gradient(90deg,transparent,#d4a832,#c8f542,#d4a832,transparent)' }} />

      {/* Form */}
      <section style={{ maxWidth:700, margin:'0 auto', padding:'60px 24px 100px' }}>

        {/* Step 1 — Choose service */}
        <div style={{ marginBottom:48 }}>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:5, color:'#c8f542', marginBottom:24 }}>01 — CHOOSE YOUR SERVICE</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:8 }}>
            {services.map(s => (
              <button key={s.id} onClick={() => setSelected(s.id)} style={{
                background: selected === s.id ? '#d4a832' : '#1a1a1a',
                border: selected === s.id ? '2px solid #d4a832' : '2px solid rgba(212,168,50,0.15)',
                color: selected === s.id ? '#080808' : '#f5f0e8',
                padding:'20px 16px', cursor:'pointer', textAlign:'left',
                transition:'all 0.2s',
              }}>
                <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:22, letterSpacing:2, lineHeight:1, marginBottom:4 }}>{s.name}</div>
                <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:2, opacity:0.7, marginBottom:8 }}>{s.time}</div>
                <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:26, letterSpacing:1 }}>{s.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Pick time */}
        <div style={{ marginBottom:48 }}>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:5, color:'#c8f542', marginBottom:24 }}>02 — PICK YOUR TIME</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {times.map(t => (
              <button key={t} onClick={() => setTimeSlot(t)} style={{
                background: timeSlot === t ? '#c8f542' : 'transparent',
                border: timeSlot === t ? '2px solid #c8f542' : '2px solid rgba(200,245,66,0.2)',
                color: timeSlot === t ? '#080808' : '#c8f542',
                fontFamily:'Space Mono,monospace', fontSize:11, letterSpacing:1,
                padding:'10px 16px', cursor:'pointer', transition:'all 0.2s',
              }}>{t}</button>
            ))}
          </div>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:2, color:'rgba(245,240,232,0.3)', marginTop:12 }}>
            * LENNY WILL CONFIRM YOUR EXACT SLOT
          </div>
        </div>

        {/* Step 3 — Your details */}
        <div style={{ marginBottom:48 }}>
          <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, letterSpacing:5, color:'#c8f542', marginBottom:24 }}>03 — YOUR DETAILS</div>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <input
              placeholder="Your Name *"
              value={form.name}
              onChange={e => setForm({...form, name:e.target.value})}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor='#d4a832'}
              onBlur={e => e.target.style.borderColor='rgba(212,168,50,0.2)'}
            />
            <input
              placeholder="Phone Number *"
              value={form.phone}
              onChange={e => setForm({...form, phone:e.target.value})}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor='#d4a832'}
              onBlur={e => e.target.style.borderColor='rgba(212,168,50,0.2)'}
            />
            <input
              placeholder="Instagram Handle (optional)"
              value={form.ig}
              onChange={e => setForm({...form, ig:e.target.value})}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor='#d4a832'}
              onBlur={e => e.target.style.borderColor='rgba(212,168,50,0.2)'}
            />
            <textarea
              placeholder="Notes — describe what you're looking for, include any reference ideas..."
              value={form.notes}
              onChange={e => setForm({...form, notes:e.target.value})}
              rows={4}
              style={{ ...inputStyle, resize:'vertical' }}
              onFocus={e => e.target.style.borderColor='#d4a832'}
              onBlur={e => e.target.style.borderColor='rgba(212,168,50,0.2)'}
            />
          </div>
        </div>

        {/* Summary + Submit */}
        {selected && timeSlot && (
          <div style={{ background:'#1a1a1a', border:'1px solid rgba(212,168,50,0.2)', padding:'24px', marginBottom:24 }}>
            <div style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:4, color:'#c8f542', marginBottom:16 }}>YOUR ORDER</div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:28, color:'#d4a832', letterSpacing:2 }}>
                  {services.find(s => s.id === selected)?.name}
                </div>
                <div style={{ fontFamily:'Space Mono,monospace', fontSize:10, color:'rgba(245,240,232,0.5)', letterSpacing:1 }}>
                  {timeSlot} • {services.find(s => s.id === selected)?.time}
                </div>
              </div>
              <div style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:40, color:'#f5f0e8', letterSpacing:2 }}>
                {services.find(s => s.id === selected)?.price}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!selected || !timeSlot || !form.name || !form.phone || submitState === 'loading'}
          style={{
            width:'100%', background: selected && timeSlot && form.name && form.phone ? '#d4a832' : '#333',
            color: selected && timeSlot && form.name && form.phone ? '#080808' : '#666',
            border:'none', padding:'20px', cursor: selected && timeSlot && form.name && form.phone ? 'pointer' : 'not-allowed',
            fontFamily:'Bebas Neue,sans-serif', fontSize:24, letterSpacing:6,
            transition:'all 0.2s', opacity: submitState === 'loading' ? 0.7 : 1,
          }}
          onMouseEnter={e => { if(selected && timeSlot && form.name && form.phone) e.currentTarget.style.background='#c8f542' }}
          onMouseLeave={e => { if(selected && timeSlot && form.name && form.phone) e.currentTarget.style.background='#d4a832' }}
        >
          {submitState === 'loading' ? 'SENDING...' : 'LOCK IN THE SLOT →'}
        </button>

        <p style={{ fontFamily:'Space Mono,monospace', fontSize:9, letterSpacing:2, color:'rgba(245,240,232,0.25)', textAlign:'center', marginTop:16, lineHeight:1.6 }}>
          BY BOOKING YOU AGREE TO OUR TERMS. NO REFUNDS AFTER THE CUT.
        </p>
      </section>
    </>
  )
}
