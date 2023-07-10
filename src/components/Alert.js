import React from 'react'

function Alert(props) {
    return (
        // if props.alert becomes NULL => no alert shown
        props.alert && <div className="alert alert-success  alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
