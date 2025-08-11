import { FaFileDownload } from "react-icons/fa";

export default function AboutPage() {
    return (
        <section className="text-md md:text-lg space-y-4">
            <p>
                Currently a Master's computer science student looking for new grad software engineer opportunites.
            </p>
            <p>
                Experienced in full-stack development.
            </p>
            <p>
                Proficient in React TypeScript, Python, Java.
            </p>
            <p>
                Tools includes Docker, AWS, GCP, PostgreSQL, MongoDB.
            </p>
            <a role="button" className="btn" href="/Allen_Yu_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FaFileDownload />
                Resume
            </a>
        </section>
    );
}