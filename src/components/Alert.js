import React from 'react'

export const Alert = (props) => {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-5 my-3`} role="alert">
         <strong>{props.alert.msg}</strong>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
   
  )
}
