import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import { NavBar } from './components/Navbar'
import { Hero } from './components/hero'
import { Cocktails } from './components/cocktails'
import { About } from './components/about'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Cocktails />
            <About />
        </main>
    )
}