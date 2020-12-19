import React from "react";
import { useState } from "react";

import Carousel from "react-elastic-carousel";

import Prismic from "prismic-javascript";
import { Document } from "prismic-javascript/types/documents";
import { client } from "../../lib/prismic";

import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { Icons } from "../profile/styles";

import { Container, Jobs, JobsContainer, Title } from "./styles";

import Modal from "./detail";
import { useEffect } from "react";
import { GetStaticProps } from "next";

interface IModalData {
    id: number;
    title: string;
    link: string;
}

// interface IProjectsDataProps {
//     project: Document[];
// }

interface PiecesPropos {
    pieces: Document[];
    project: Document;
}

export default function Projects({ pieces, project }: PiecesPropos) {
    const [activeModal, setActiveModal] = useState(-1);

    const [carousel, setCarrousel] = useState([]);

    const [modalData, setModalData] = useState<IModalData>([]);

    useEffect(() => {
        const getPieces = async (uid) => {
            const projects = await client().getByUID("projects", uid, {});

            const pieces = await client().query([
                Prismic.Predicates.at("document.type", "pieces"),
                Prismic.Predicates.at("my.pieces.project", projects.id),
            ]);

            setCarrousel(pieces.results);
        };
        getPieces(project.uid);
    }, []);

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
                <Title>{project.data.title[0].text}</Title>
                <JobsContainer>
                    <Carousel
                        focusOnSelect={true}
                        itemsToShow={3}
                        itemPadding={[0, 8]}
                    >
                        {carousel.map((piece, index) => {
                            const title = piece.uid;

                            // console.log(piece.data.image.thumb.url);

                            const ThumbImage = piece.data.image.thumb.url;

                            return (
                                <Jobs key={piece.uid}>
                                    <img
                                        onClick={() =>
                                            handleOpen({
                                                link: piece.data.image.url,
                                                id: piece.id,
                                                title: piece.uid,
                                            })
                                        }
                                        src={ThumbImage}
                                        alt=""
                                    />
                                    <div>
                                        <h3>{title}</h3>
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

// export const getStaticProps: GetStaticProps = async (Context):PiecesPropos => {
//     const projects = await client().getByUID("projects", , {});

//     const pieces = await client().query([
//         Prismic.Predicates.at("document.type", "pieces"),
//         Prismic.Predicates.at("my.project.piece", projects.id),
//     ]);

//     console.log("terra");
//     return {
//         props: {
//             projects,
//             pieces: pieces.results,
//         },
//     };
// };
