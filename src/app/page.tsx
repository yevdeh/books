import { Books } from "@/components/Books/Books";
import { Popup } from "@/components/Popup/Popup";
import { Section } from "@/components/Section/Section";

const Home = () => (
  <main>
    <Section>
      <Books />
    </Section>
    <Popup></Popup>
  </main>
);

export default Home;
