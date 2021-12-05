import React from "react";
import Input from "./Input";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div className=""  >
      <div className="header-container">
        <Header />
      </div>

      <div className="input-container">
        <Input />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
