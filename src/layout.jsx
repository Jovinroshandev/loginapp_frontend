// Layout.jsx
import { Outlet } from "react-router-dom"
import { useState } from "react"

export default function Layout() {
  const [mode, setMode] = useState(false)

  const toggleMode = () => setMode(!mode)

  return (
    <div style={{ backgroundColor: mode ? "white" : "black", minHeight: "100vh" }}>
      {/* Send mode and toggleMode to children */}
      <Outlet context={{ mode, toggleMode }} />
    </div>
  )
}
