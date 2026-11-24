import { useEffect, useRef } from 'react'

const REDIRECT_URL = 'https://cafe-frontend-2qax.vercel.app/login'

function App() {
  const hasRedirected = useRef(false)

  useEffect(() => {
    // Redirect on mount; the ref prevents a duplicate call in StrictMode
    if (hasRedirected.current) return
    hasRedirected.current = true
    window.location.replace(REDIRECT_URL)
  }, [])

  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <div className="brand">
          <div className="brand-icon">☕</div>
          <h1 className="brand-name">CafeOS</h1>
        </div>

        <p className="redirect-text">Redirecting to CafeOS...</p>

        <div className="spinner" aria-label="Loading"></div>

        <div className="fallback">
          <p>If you are not redirected automatically,</p>
          <a href={REDIRECT_URL} className="fallback-link">
            click here to continue
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
