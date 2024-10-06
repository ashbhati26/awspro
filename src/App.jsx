import React from 'react'
import NavBar from './components/NavBar'
import ProjectManager from './components/ProjectManager'

function App() {
  return (
    <div className="w-full min-h-screen py-[1vw] bg-[#ebebeb] text-[#050206] font-['Gilroy'] overflow-hidden">
      <NavBar />
      <ProjectManager />
    </div>
  )
}

export default App
