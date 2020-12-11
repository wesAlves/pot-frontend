import React from "react";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { Icons } from "../profile/styles";
import { Container, Jobs, JobsContainer, Title } from "./styles";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Modal from "../modal";

interface IModalData {
    id: number;
    title: string;
    link: string;
}

export default function Projects() {
    const [activeModal, setActiveModal] = useState(-1);

    const [carousel, setCarrousel] = useState([
        {
            id: 1,
            title: "item #1",
            link:
                "https://images.unsplash.com/photo-1576509147359-41e7cef459b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=340&q=80",
        },
        {
            id: 2,
            title: "item #2",
            link:
                "https://images.unsplash.com/photo-1602524821041-4ca34980d066?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        { id: 3, title: "item #3" },
        { id: 4, title: "item #4" },
        { id: 5, title: "item #5" },
    ]);

    const [modalData, setModalData] = useState<IModalData>({});

    const handleOpen = (itemData: IModalData) => {
        setActiveModal(itemData.id);

        const item = itemData;

        setModalData(item);
    };
    const handleClose = (id: number) => {
        setActiveModal(id);
    };

    return (
        <>
            <Container>
                <Title>Projects</Title>
                <JobsContainer>
                    <Carousel
                        className={"carouselClass"}
                        focusOnSelect={true}
                        itemsToShow={3}
                        itemPadding={[0, 8]}
                    >
                        {carousel.map((item: IModalData) => {
                            const itemTitle = item.title;
                            return (
                                <Jobs key={item.id}>
                                    {/* <button onClick={() => handleOpen(item.id)}>
                                    {itemTitle}
                                </button> */}
                                    <img
                                        onClick={() =>
                                            handleOpen({
                                                ...item,
                                            })
                                        }
                                        src={item.link}
                                        alt=""
                                    />
                                    <div>
                                        <h3>{itemTitle}</h3>
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
                                                <SiAdobephotoshop
                                                    color={"#f00"}
                                                />
                                            </li>
                                        </Icons>
                                    </div>
                                </Jobs>
                            );
                        })}
                    </Carousel>
                </JobsContainer>
            </Container>
            <Modal
                isActive={activeModal === modalData.id}
                closeModal={handleClose}
                title={modalData.title}
                imglink={modalData.link}
            />
        </>
    );
}
