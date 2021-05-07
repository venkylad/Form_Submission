import { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormContainer from "./components/SignupForm";

export default function App() {
  return (
    <div className="App">
      <Container className="App py-4">
        <Header />
        <Container className="bg-dark p-4 form_container">
          <FormContainer />
        </Container>
        <Footer />
      </Container>
    </div>
  );
}
