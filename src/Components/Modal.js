function Modal(props) {
    
    return(
        <div>
            <button 
                type="button" 
                data-toggle="modal" data-target="#myModal"
                className="btn btn-danger float-right"
            >
                {props.type}
            </button>
        <div className="modal" tabIndex="-1" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Remove Tasks</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{props.message}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Discard</button>
                    <button type="button" className="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={props.onRemove}
                    >
                        Yes
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Modal;