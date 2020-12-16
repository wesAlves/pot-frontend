import React, { useEffect } from "react";
import { useState } from "react";

import {
    Container,
    CloseModalDiv,
    MainStageDiv,
    DescriptionStageDiv,
    ProjectTitle,
    DescriptionTitle,
    ImgContainer,
    TextContainer,
} from "./styles";

interface IModalProps {
    // isVisible?: boolean;
    title?: string;
    isActive?: boolean;
    imglink?: string;

    closeModal: (id: number) => void;
}

export default function Modal(props: IModalProps) {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.isActive);
    }, [props.isActive]);

    const closeModal = () => {
        props.closeModal(-1);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Container>
            <CloseModalDiv onClick={closeModal} />
            <div>
                <MainStageDiv>
                    <ProjectTitle>{props.title}</ProjectTitle>
                    <button onClick={closeModal}>X</button>
                    <ImgContainer>
                        <img src={props.imglink} alt="" />
                    </ImgContainer>
                    <TextContainer>
                        <h4>25/11/2020 - Nome do projeto</h4>
                        <p>Ferramentas utilizadas</p>
                        <p>icons</p>
                    </TextContainer>
                </MainStageDiv>
                <DescriptionStageDiv>
                    <DescriptionTitle>Descrição do projeto</DescriptionTitle>
                    <TextContainer>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </TextContainer>
                    <h4
                        style={{
                            width: "100%",
                            height: "10%",
                            padding: "24px 16px 0",
                            color: "#FFB800",
                        }}
                    >
                        Links para aplicação publicada.
                    </h4>
                    <a href="#">Link</a>
                </DescriptionStageDiv>
            </div>
        </Container>
    );
}
