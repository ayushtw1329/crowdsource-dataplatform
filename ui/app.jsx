import React from "react";
import { Navbar } from "./component/navbar/navbar";
import { Footer } from "./component/footer/footer";

export function App(props) {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
        <Navbar />
      </nav>
      <main></main>
      <footer class="fixed-bottom bg-light pt-3 border-top w-100">
        <Footer />
      </footer>
    </React.Fragment>
  );
}
