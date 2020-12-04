interface IModalProps {
    isVisible: boolean;
    title: string;

    closeModal: () => void;
}

export default function Modal(props: IModalProps) {
    const closeModal = () => {
        props.closeModal();
    };

    if (!props.isVisible) {
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

                {/* <button onClick={handleVisibility}>Click</button> */}
            </div>
        </div>
    );
}
