import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import { NavBar } from './components/Navbar'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const App = () => {
    return (
        <main>
            <NavBar />
        </main>
    )
}