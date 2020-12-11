import { useEffect } from "react";
import { useState } from "react";

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
        <div
            style={{
                position: "absolute",
                zIndex: "3",
                // background: "#f00",
                top: "0",
                left: "0",
                width: "100vw",
                height: " 100vh",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#0003",
                    width: "100vw",
                    height: " 100vh",
                    // zIndex: 2,
                }}
                onClick={closeModal}
            ></div>
            <div
                style={{
                    // position: "fixed",
                    // top: "50vh",
                    // left: "50vw",
                    // marginTop: "-20%",
                    // marginLeft: "-25vw",
                    width: "50vw",
                    background: "#fff",
                    height: " 768px",
                    borderRadius: "16px",
                    zIndex: 3,
                }}
            >
                <h1
                    style={{
                        width: "100%",
                        height: "10%",
                        padding: "24px 16px 0",
                        color: "#FFB800",
                    }}
                >
                    {props.title}
                </h1>
                <button
                    onClick={closeModal}
                    style={{
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        background: "none",
                        border: "none",
                        padding: "8px",
                        color: "#ff0000",
                        cursor: "pointer",
                    }}
                >
                    X
                </button>
                <div
                    style={{
                        width: "calc(100% - 32px)",
                        margin: "auto 16px",
                        height: "72%",
                        overflow: "hidden",
                        borderRadius: "",
                    }}
                >
                    <img
                        src={props.imglink}
                        alt=""
                        style={{
                            width: "100%",
                        }}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        padding: "0 16px",
                        marginTop: "16px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "24px",
                            color: "#aaa",
                            margin: "16px 0",
                        }}
                    >
                        25/11/2020 - Nome do projeto
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#aaa",
                            margin: "8px 0",
                        }}
                    >
                        Ferramentas utilizadas
                    </p>
                    <p>icons</p>
                </div>
            </div>
            <div
                style={{
                    width: "25vw",
                    marginLeft: "32px",
                    background: "#fff",
                    height: " 768px",
                    borderRadius: "16px",
                    zIndex: 3,
                }}
            >
                Description here
            </div>
        </div>
    );
}
