import React, { Component } from "react";
import Header from "./Header";
import { AppRouter } from "./Approuter";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </>
    );
  }
}
