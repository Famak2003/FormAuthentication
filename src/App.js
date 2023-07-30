// import sideBarBG from "./assets/images/bg-sidebar-desktop.svg";
import Display from "./components/Display";

// import { Personal } from "./Personal";

export const data = [
  { step: 1, info: "YOUR INFO" },
  { step: 2, info: "SELECT PLAN" },
  { step: 3, info: "ADD-ONS" },
  { step: 4, info: "SUMMARY" },
];

function App() {
  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
