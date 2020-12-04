import Profile from "../componets/profile";
import { Container } from "../styles/pages/Home";
import Projects from "../componets/projects";

export default function Home() {
    return (
        <Container>
            <Profile />
            <div style={{ width: "100%", padding: "0 32px" }}>
                <Projects />
                <Projects />
            </div>
        </Container>
    );
}
