import Profile from "../componets/profile";
import { Container } from "../styles/pages/Home";
import Projects from "../componets/projects";

import { GetStaticProps } from "next";

import Prismic from "prismic-javascript";
import { Document } from "prismic-javascript/types/documents";
import { client } from "../lib/prismic";

interface IProjectsProps {
    projects: Document[];
}

export default function Home({ projects }: IProjectsProps) {
    return (
        <Container>
            <Profile />
            {/* {console.log(projects)} */}
            <div style={{ width: "100%", padding: "0 32px" }}>
                {projects.map((project) => {
                    const projectData = project;
                    return <Projects key={project.id} project={projectData} />;
                })}
            </div>
        </Container>
    );
}

export const getStaticProps: GetStaticProps<IProjectsProps> = async () => {
    const projects = await client().query([
        Prismic.Predicates.at("document.type", "projects"),
    ]);

    return {
        props: {
            // pieces,
            projects: projects.results,
        },
        revalidate: 5,
    };
};
