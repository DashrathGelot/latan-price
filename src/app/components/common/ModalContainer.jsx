const ModalContainer = ({ title, content }) => {
    return (
        <div className="text-black text-center">
            <h1 className="text-xl font-semibold text-amber-900 m-4 font-serif">{title}</h1>
            <p className="para">{content}</p>
        </div>
    );
};

export default ModalContainer;