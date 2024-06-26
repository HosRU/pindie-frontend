"use client"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useStore } from "@/app/store/app-store";

const App = (props) => {
  const store = useStore();

  useEffect(() => {
    
    store.checkAuth();

  }, []);

  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  );
};

export default App;
