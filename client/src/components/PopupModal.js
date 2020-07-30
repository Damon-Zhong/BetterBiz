import React from 'react'

const PopupModal = (props) => {
    return (
        <div className="modal fade" id="thankyouModal" tabIndex="-1" role="dialog" aria-labelledby="thankyouModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="thankyouModalLabel">
                            {props.status ? 'Thank you for your contribution': 'Oops!'}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.status ? 'Thank you for helping this business thrive!': 'Business Type and Name is required'}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupModal;
