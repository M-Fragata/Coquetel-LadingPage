import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const App = () => {
    return (
        <div className="flex-center h-[100vh]">
            <h1 className="text-4xl text-indigo-300">Coquetel</h1>
        </div>
    )
}