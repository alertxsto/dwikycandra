import { useEffect, useState } from 'react'

/**
 * Returns the current time in WIB (Asia/Jakarta) formatted as "HH:MM WIB".
 * Updates every second. Shared hook to avoid duplicate setInterval across components.
 */
export function useLocalClock(): string {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const opts: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      }
      setTime(new Intl.DateTimeFormat('en-GB', opts).format(d) + ' WIB')
    }
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  return time
}
