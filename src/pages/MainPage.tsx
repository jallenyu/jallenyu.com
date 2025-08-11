import { useEffect, useRef } from "react";
import Typed from "typed.js";
import greetImg from '../assets/allen_hi.png';
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";


export default function MainPage() {
    const typingRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typingRef.current, {
            strings: [
                "currently a MSCS student",
                "a full-stack engineer"
            ],
            typeSpeed: 45,
            backSpeed: 35,
            smartBackspace: true,
            loop: false,
        });

        return () => {
            typed.destroy();
        };
    });


    return (
        <div className="flex flex-col gap-8">
            <section className="flex items-center justify-center flex-wrap-reverse">
                <img className="w-40 h-40 md:w-80 md:h-80" src={greetImg} alt="Greeting" />
                <div className="hidden md:block md:text-4xl lg:text-5xl font-bold w-full max-w-2xl text-center">
                    <h1>Hey there, I'm Allen—</h1>
                    <span ref={typingRef} />
                </div>
            </section>

            <main className="flex justify-center items-center space-y-4 px-4">
                <div className="tabs tabs-lift w-full max-w-4xl">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="About" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6"><AboutPage /></div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Projects" />
                    <div className="tab-content bg-base-100 border-base-300 p-6"><ProjectsPage /></div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Contact" />
                    <div className="tab-content bg-base-100 border-base-300 p-6"><ContactPage /></div>
                </div>
            </main>
        </div>
    );
}