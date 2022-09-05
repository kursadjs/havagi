const Modal = ({ children, state, setState }) => {
    return (
        <div className="modal">
            <div className="modal-main">
                <div className="container">
                    {children}
                </div>
                <div className="overlay" onClick={() => setState(!state)}></div>
            </div>
        </div>
    )
}

export default Modal