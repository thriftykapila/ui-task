import React from "react";
import ToolsContainer from "../ToolsContainer/ToolsContainer";
import "./ProductSelectionLeft.css";

function ProductSelectionLeft({ plus_logo, notFilled, tools, setTools, elements }) {

  const deleteTool = (i, option) => {
    tools.splice(i, 1)
    setTools([...tools])
    console.log("option", option)
    elements.splice(i, 1)
  }
  
  return (
    <div className="product_selection_container">
      <div className="product_selection">
        {tools && tools.map((elem, i) =>
              <ToolsContainer key={i} logo={elem.image} name={elem.name} isEmpty={0} tools={tools} deleteTool={() => deleteTool(i, elem.name)} />
          )}
          {[...Array(notFilled)].map((x, i) =>
              <ToolsContainer logo={plus_logo} isEmpty={1} />
          )}
      </div>
      <p className="product_selection_count">{tools.length} {tools.length <= 1 ? "Product" : "Products"} added</p>
    </div>
  )
}

export default ProductSelectionLeft