import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Who } from "./components/Who";
import { Works } from "./components/Works";

const Section = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Section>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Section>
  );
}

export default App;
