import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export function NavBar() {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })

}, [])

return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
)
}