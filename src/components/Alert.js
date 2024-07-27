



import React from 'react'

export default function Alert(props) {

    return (
        <div style={{height: "50px"}}>                          {/* To avoid CLS(cumulative layout shift). */}
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                {props.message}
            </div>
        </div>
    )
}


