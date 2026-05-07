'use client'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#080808', color: '#f5f0e8', fontFamily: 'sans-serif' }}>
          <h2 style={{ fontSize: 32, marginBottom: 16 }}>Something went wrong</h2>
          <button onClick={reset} style={{ background: '#d4a832', color: '#080808', border: 'none', padding: '12px 32px', fontSize: 16, cursor: 'pointer' }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
