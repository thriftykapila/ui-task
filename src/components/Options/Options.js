import React from "react"
import "./Options.css"

function Options({ name, image, onClick, alreadyAdded, tools }) {
  return (
    <div className="options_container">
        <button id={name} className="options_button" onClick={onClick}>
            <span className={alreadyAdded ? "options_element_container_selected" : "options_element_container"}>
                <div className="options_element_img_name_container">
                    <img className="options_image" src={image} />
                    <p className="options_name">{name}</p>
                </div>
                {alreadyAdded ? <p className="options_tick">&#10004;</p> : ""}
            </span>
        </button>
    </div>
  )
}

export default Options