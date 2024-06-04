import "../assets/index.css";
import "../assets/whitespace-reset.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing />
      </main>
    </div>
  );
}

export default App;
