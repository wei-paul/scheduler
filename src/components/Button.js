import React from "react";

import "components/Button.scss";

import classNames from "classnames";

export default function Button(props) {
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm, // right side is a true and false statement, where it is checking to see if "props.confirm" is present. if it is present, then it will select the class on the left side (a reference to the scss style to apply ) 
      "button--danger": props.danger   
   })

   return (
      
      <button className={buttonClass}
              onClick={props.onClick}
              disabled={props.disabled}
      >
         {props.children}
      </button>
      
   );
}
