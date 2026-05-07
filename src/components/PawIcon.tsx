export default function PawIcon({ size = 80, gold = '#d4a832', neon = '#c8f542', bg = '#080808' }: {
  size?: number; gold?: string; neon?: string; bg?: string
}) {
  const s = size / 140

  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer dashed ring */}
      <circle cx="70" cy="70" r="66" stroke={gold} strokeWidth={1.5 / s} strokeDasharray={`${5/s} ${3/s}`} />
      {/* Inner ring */}
      <circle cx="70" cy="70" r="58" stroke={neon} strokeWidth={0.6 / s} opacity="0.4" />

      {/* Paw pads */}
      <ellipse cx="70" cy="83" rx="28" ry="23" fill={gold} />
      <ellipse cx="44" cy="59" rx="14" ry="12" fill={gold} />
      <ellipse cx="60" cy="50" rx="14" ry="12" fill={gold} />
      <ellipse cx="80" cy="50" rx="14" ry="12" fill={gold} />
      <ellipse cx="96" cy="59" rx="14" ry="12" fill={gold} />

      {/* Scissors - bg cutout */}
      <line x1="54" y1="77" x2="86" y2="48" stroke={bg} strokeWidth={6/s} strokeLinecap="round" />
      <line x1="86" y1="77" x2="54" y2="48" stroke={bg} strokeWidth={6/s} strokeLinecap="round" />
      {/* Scissors - neon */}
      <line x1="54" y1="77" x2="86" y2="48" stroke={neon} strokeWidth={3/s} strokeLinecap="round" />
      <line x1="86" y1="77" x2="54" y2="48" stroke={neon} strokeWidth={3/s} strokeLinecap="round" />

      {/* Pivot */}
      <circle cx="70" cy="62" r={5/s} fill={bg} />
      <circle cx="70" cy="62" r={3/s} fill={neon} />

      {/* Handle rings */}
      <circle cx="48" cy="82" r={8/s} fill={bg} />
      <circle cx="48" cy="82" r={6/s} stroke={neon} strokeWidth={1.5/s} fill="none" />
      <circle cx="92" cy="82" r={8/s} fill={bg} />
      <circle cx="92" cy="82" r={6/s} stroke={neon} strokeWidth={1.5/s} fill="none" />

      {/* Arc labels */}
      <text x="70" y="28" textAnchor="middle" fill={neon} fontFamily="monospace" fontSize={8/s} letterSpacing={4/s}>NO CAP CUTS</text>
      <text x="70" y="122" textAnchor="middle" fill={gold} fontFamily="monospace" fontSize={7/s} letterSpacing={3/s}>EST. 2025</text>
    </svg>
  )
}
