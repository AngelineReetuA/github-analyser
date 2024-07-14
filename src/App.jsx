import InitialAnalysis from "./pages/InitialAnalysis";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <NavBar />
        <InitialAnalysis />
      </div>
    </>
  );
}

export default App;
