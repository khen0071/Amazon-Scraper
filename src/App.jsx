import Home from "./pages/Home";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="max-w-[1000px] mx-auto min-h-screen">
          <Home />
        </div>
      </main>
    </>
  );
};

export default App;
