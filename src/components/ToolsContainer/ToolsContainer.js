import React from "react";
import "./ToolsContainer.css";

function ToolsContainer({ key, isEmpty, logo, name, deleteTool }) {
  return (
    <div className="tools_container">
      <img
        className={isEmpty ? "plus_sign" : "tools_container_logo"}
        src={logo}
      />
      {!isEmpty && (
        <>
          <p className="tools_container_name">{name}</p>
          <p onClick={deleteTool} className="tools_container_remove">
            <span className="tools_container_cross">X </span>Remove
          </p>
        </>
      )}
    </div>
  );
}

export default ToolsContainer;
