import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export default function ContactPage() {
    return (
        <section className="text-md md:text-lg space-y-2">
            <p className="font-semibold">Connect with me</p>
            <div className="space-x-2">
                <a role="button" className="btn" href="https://www.linkedin.com/in/jallenyu" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                <a role="button" className="btn" href="https://github.com/jallenyu" target="_blank" rel="noopener noreferrer"><FaSquareGithub size={20} /></a>

                <details className="dropdown">
                    <summary className="btn"><LuMail size={20} /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className="text-center">jallenyu33@gmail.com</li>
                    </ul>
                </details>
            </div>
        </section>
    );
}