import { Button } from "./components/Button";
import { SectionBody } from "./components/SectionBody";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <main className="bg-PrincipalColor min-h-screen px-4 py-4 text-TextColor">
      <Header className="bg-slate-500" />
      <Button />
      <SectionBody />
    </main>
  );
}

export default App;
