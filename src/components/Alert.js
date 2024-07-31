



import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        if (word === "danger") word = "error"

        const lower = word.toLowerCase()
        return lower[0].toUpperCase() + lower.substr(1)
    }

    return (
        <div style={{ height: "50px" }}>                          {/* To avoid CLS(cumulative layout shift). */}
            {(props.alert) && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
            </div>}
        </div>
    )
}


