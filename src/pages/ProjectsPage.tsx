import projectDataJson from '../assets/projectData.json';
import ProjectAccordionItem from '../components/ProjectAccordionItem';
import type { AccordionItem } from '../types';

export default function ProjectsPage() {
    const projectData: AccordionItem[] = projectDataJson;
    return (
        <section className="text-md md:text-lg">
            {projectData.map((item, index) => (
                <ProjectAccordionItem key={index} {...item} />
            ))}
        </section>
    );
}