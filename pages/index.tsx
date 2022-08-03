import React from "react"
import Navbar from "../components/Navbar"
import Intro from "../components/Intro"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="w-full">
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Contact />
    </div>
  )
}
