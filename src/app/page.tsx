import { BookForm } from "@/components/BookForm/BookForm";
import { Books } from "@/components/Books/Books";
import { Popup } from "@/components/Popup/Popup";
import { Section } from "@/components/Section/Section";
import { Toolbar } from "@/components/Toolbar/Toolbar";

const Home = () => (
  <main>
    <Section>
      <Toolbar />
      <Books />
    </Section>
    <Popup>
      <BookForm />
    </Popup>
  </main>
);

export default Home;
