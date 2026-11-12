import Link from 'next/link'

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Eagle Eye home">
      <span className="brand-emblem">
        <img src="/eagle-mark.webp" alt="" width={48} height={29} />
      </span>
      <b>EAGLE EYE</b>
    </Link>
  )
}
