// **************** Components **************
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Homepage/Home";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";

// ******************************************

function App() {
  return (
    <main className=" overflow-x-hidden">
      <Navbar />
      <Home />
      {/* <GetInvolved /> */}
      <Footer />
    </main>
  );
}

export default App;
