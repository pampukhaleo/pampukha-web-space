
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with the current window width if we're in a browser environment
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Function to update state based on window width
    const updateMobileState = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add both matchMedia and resize listeners for better compatibility
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMobileState)
    } else {
      // Fallback for older browsers
      window.addEventListener('resize', updateMobileState)
    }
    
    // Set initial state
    updateMobileState()
    
    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMobileState)
      } else {
        window.removeEventListener('resize', updateMobileState)
      }
    }
  }, [])

  return isMobile
}
