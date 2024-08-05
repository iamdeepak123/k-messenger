

import MainPage from "./MainPage"
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>



      <div className="App">
        {/* <MainPage/> */}
        {/* <Homepage /> */}
        {/* <LoginPage/> */}
        {/* <RegisterPage/> */}

        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>

      </div>
      {/* <Footer /> */}


    </>

  );
}

export default App;
