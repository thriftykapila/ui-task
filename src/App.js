import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductSelectionPage from "./containers/ProductSelectionPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductSelectionPage />
    </div>
  );
}

export default App;
