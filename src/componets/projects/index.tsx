import React from "react";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { Icons } from "../profile/styles";
import { Container, Jobs, JobsContainer, Title } from "./styles";
import Carousel from "react-elastic-carousel";
import { useState } from "react";

export default function Projects() {
    const [carousel, setCarrousel] = useState([
        { id: 1, title: "item #1" },
        { id: 2, title: "item #2" },
        { id: 3, title: "item #3" },
        { id: 4, title: "item #4" },
        { id: 5, title: "item #5" },
    ]);

    return (
        <Container>
            <Title>Projects</Title>
            <JobsContainer>
                <Carousel
                    className={"carouselClass"}
                    focusOnSelect={true}
                    itemsToShow={3}
                    itemPadding={[0, 8]}
                >
                    {carousel.map((item) => {
                        return (
                            <Jobs key={item.id}>
                                <img
                                    src="https://images.unsplash.com/photo-1576509147359-41e7cef459b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=340&q=80"
                                    alt=""
                                />
                                <div>
                                    <h3>{item.title}</h3>
                                    <Icons
                                        style={{
                                            marginTop: "0",
                                            marginLeft: "auto",
                                            width: "auto",
                                        }}
                                    >
                                        <li>
                                            <SiAdobeillustrator
                                                color={"#f00"}
                                            />
                                        </li>
                                        <li>
                                            <SiAdobephotoshop color={"#f00"} />
                                        </li>
                                    </Icons>
                                </div>
                            </Jobs>
                        );
                    })}
                </Carousel>
            </JobsContainer>
        </Container>
    );
}
