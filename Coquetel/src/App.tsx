import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import { NavBar } from './components/Navbar'
import { Hero } from './components/hero'
gsap.registerPlugin(ScrollTrigger, SplitText)

export const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <div className="h-dvh bg-black"></div>
        </main>
    )
}