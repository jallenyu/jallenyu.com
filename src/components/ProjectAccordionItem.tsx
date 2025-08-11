import { FaGithub, FaEye } from "react-icons/fa";
import type { AccordionItem } from "../types";

export default function ProjectAccordionItem({ rank, title, description, techstack, github, demo }: AccordionItem) {
    return (
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked={rank === 1} />
            <div className="collapse-title font-semibold">{title}</div>
            <div className="collapse-content text-sm space-y-4">
                <p>{description}</p>
                <p>Tech stack: {techstack.join(", ")}</p>
                <div className="space-x-4">
                    {github &&
                        < a role="button" className="btn" href={github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />Repo
                        </a>
                    }
                    {demo &&
                        <a role="button" className="btn" href={demo} target="_blank" rel="noopener noreferrer">
                            <FaEye />Demo
                        </a>
                    }
                </div>
            </div>
        </div >
    );
}