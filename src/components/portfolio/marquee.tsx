'use client'

interface MarqueeProps {
  items: string[]
  reverse?: boolean
  className?: string
  fast?: boolean
}

export default function Marquee({ items, reverse, className = '', fast }: MarqueeProps) {
  const content = [...items, ...items]
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${fast ? 'animate-marquee-fast' : 'animate-marquee'} ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        {content.map((item, i) => (
          <span key={i} className="marquee-text mx-6 inline-flex items-center">
            {item}
            <span className="inline-block mx-6 w-4 h-4 rounded-full bg-accent align-middle" />
          </span>
        ))}
      </div>
    </div>
  )
}
