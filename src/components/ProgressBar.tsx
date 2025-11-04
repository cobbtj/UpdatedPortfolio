// src/components/ProgressBar.tsx
'use client'

import { useEffect } from 'react'

export function ProgressBar({ targetId }: { targetId: string }) {
  useEffect(() => {
    const el = document.querySelector<HTMLDivElement>(`#${CSS.escape(targetId)} .progress-bar`)
    if (!el) return

    const onScroll = () => {
      const doc = document.documentElement
      const h = doc.scrollHeight - doc.clientHeight
      const p = h > 0 ? window.scrollY / h : 0
      el.style.transform = `scaleX(${p})`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [targetId])

  return null
}
