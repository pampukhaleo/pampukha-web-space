
import * as React from "react"

const MOBILE_BREAKPOINT = 1200

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a media query list
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Function to update state based on media query
    const updateMobileState = () => {
      setIsMobile(mql.matches)
    }
    
    // Set initial state
    updateMobileState()
    
    // Add listener for changes
    mql.addEventListener("change", updateMobileState)
    
    // Cleanup
    return () => mql.removeEventListener("change", updateMobileState)
  }, [])

  return isMobile !== undefined ? isMobile : false
}
