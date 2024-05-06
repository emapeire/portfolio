'use client'

import { useEffect, useState } from 'react'

export function useHash() {
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return { currentHash }
}
