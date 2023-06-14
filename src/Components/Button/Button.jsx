import React from 'react'

const Button = (props) => {
    const {btnType, btnText, btnOnClick, customClass} = props;

  return (
    <div className='buttons'>
       <div className={`${btnType==='PRIMARY'
            ? `button primary-btn ${customClass}`
            :`button secondry-btn ${customClass}`}`}
            onClick={btnOnClick}
            >
              {btnText}
            </div>
    </div>
  )
}

export default Button
