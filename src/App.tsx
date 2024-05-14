import "./App.css";
import TabsWithAccordion from "./components/TabsWithAccordian";
import { FormsProvider } from "./context/FormsContext";

function App() {
  return (
    <main className="h-screen w-screen flex items-center justify-center p-4">
      <FormsProvider>
        <TabsWithAccordion />
      </FormsProvider>
    </main>
  );
}

export default App;
