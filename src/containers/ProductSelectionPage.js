import React, { useState } from "react";
import "./ProductSelectionPage.css";
import ProductSelectionLeft from "../components/ProductSelectionLeft/ProductSelectionLeft";
import Button from "../components/Button/Button";
import { optionsData } from "../data/optionsData";
import Options from "../components/Options/Options";

function ProductSelectionPage() {

    const [tools, setTools] = useState([]);
    const [toolInput, setToolInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [elements, setElements] = useState([]);
    const [deselected, setDeselected] = useState(false);

    const toolInputHandler = (e) => {
        const searchWord = e.target.value;
        setToolInput(searchWord);
        const newFilter = optionsData.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
    }

    const getImage = (name) => {
        switch(name.toUpperCase()) {
            case "NOTION":
                return "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224";
            case "JIRA":
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZ262OQgdJ7AcPWtFqVKQ5q7IlKJWsKEdr-ymRwEpWA2HDOPtjy9CMtZB3Lj1pbEoi_s&usqp=CAU";
            case "SLACK":
                return "https://images.pling.com/img/00/00/07/28/00/1422594/e20d4a4b5d23357c5ace1844206c6b02e082e73231a16f9036cb8e3bf109d52816bd.png";
            case "MS AZURE":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png";
        }
    }

    const addTool = (name) => {
        if (!elements.includes(name)) {
            console.log('alread')
            if(tools.length <= 4) {
                console.log("[...tools, {name: name, image: getImage(name)}]", [...tools, {name: name, image: getImage(name)}])
                setTools([...tools, {name: name, image: getImage(name)}])
                elements.push(name)
            }
            else {
                alert("Cannot add more than 4 tools")
            }
            setToolInput("")
        }
    }

  return (
    <div className="product_selection_page">
        <div className="product_selection_page_left">
            <ProductSelectionLeft 
                tools={tools}
                setTools={setTools}
                filled={tools.length}
                notFilled={4-tools.length}
                plus_logo="https://img.icons8.com/external-dreamstale-lineal-dreamstale/15/000000/external-plus-science-education-dreamstale-lineal-dreamstale.png" 
                setDeselected={setDeselected}
                elements={elements}
            /> 
        </div>
        <div className="product_selection_page_right">
        <div className="product_selection_right">
            <div className="product_selection_right_count">
                <p>1 of 3</p>
            </div>
            <div className="product_selection_right_desc">
                <p className="product_selection_right_desc1">Let's add your internal tools</p>
                <div className="product_selection_right_desc2">
                    <p>Search to quickly add products your team uses today.</p>
                    <p>You'll be able to add as many as you need later but for now let's add four.</p>
                </div>
            </div>

            <div className="product_selection_right_input">
                <input
                    placeholder="Search for any software" 
                    onChange={toolInputHandler} 
                    value={toolInput} 
                />
                <div className="product_selection_right_options">
                    {true && filteredData.map((val) => (
                        <Options 
                            name={val.name} 
                            image={val.image} 
                            onClick={() => addTool(val.name)} 
                            alreadyAdded={elements.includes(val.name)}
                            tools={tools}
                        />
                    ))}
                </div> 
            </div>
            
            <div className="product_selection_right_button">
                <Button disabled={tools.length === 0} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSelectionPage