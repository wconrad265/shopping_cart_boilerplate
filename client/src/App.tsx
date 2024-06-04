import "../assets/index.css";
import "../assets/whitespace-reset.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing />
        <AddForm />
      </main>
    </div>
  );
}

export default App;
