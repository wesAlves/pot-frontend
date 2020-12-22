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
    isActive?: boolean;

    title?: string;
    imglink?: string;
    description: string;
    date: string;
    extenalLink: string;

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
                        <h4>{props.date} - Nome do projeto</h4>
                        <p>Ferramentas utilizadas</p>
                        <p>icons</p>
                    </TextContainer>
                </MainStageDiv>
                <DescriptionStageDiv>
                    <DescriptionTitle>Descrição do projeto</DescriptionTitle>
                    <TextContainer>
                        <p>{props.description}</p>
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
                    <a style={{ padding: "16px", display: "block" }} href="#">
                        {props.extenalLink}
                    </a>
                </DescriptionStageDiv>
            </div>
        </Container>
    );
}
