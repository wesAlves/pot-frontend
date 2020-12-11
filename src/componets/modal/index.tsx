import { useEffect } from "react";
import { useState } from "react";

interface IModalProps {
    // isVisible?: boolean;
    title: string;
    isActive: boolean;
    imglink: string;

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
        <div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#0003",
                    width: "100vw",
                    height: " 100vh",
                    zIndex: 2,
                }}
                onClick={closeModal}
            ></div>
            <div
                style={{
                    position: "fixed",
                    top: "50vh",
                    left: "50vw",
                    marginTop: "-20%",
                    marginLeft: "-25vw",
                    width: "50vw",
                    background: "#fff",
                    height: " 768px",
                    borderRadius: "16px",
                    zIndex: 3,
                }}
            >
                <h1>{props.title}</h1>
                <button onClick={closeModal}>Click</button>

                <img src={props.imglink} alt="" />
            </div>
        </div>
    );
}
