import React from 'react'

export const Alert = ({ alert }) => {
    return (

        alert !== null && (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`alert alert-${alert.type}`}>
                            <i className="fas fa-info-circle"></i>{alert.msg}
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}
