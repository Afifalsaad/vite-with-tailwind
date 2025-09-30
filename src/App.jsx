import { Suspense } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar/NavBar";
import PricingOption from "./assets/components/PricingOptions/PricingOption";import ResultCharts from "./assets/components/ResulteCharts/ResultCharts";
import axios from "axios";
import MarksChart from "./assets/components/Marks Chart/MarksChart";
;

const pricingPromise = fetch("pricingData.json").then(res=>res.json())
const marksPromise = axios.get('Marksdata.json')

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <menu>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultCharts></ResultCharts>
      </menu>
    </>
  );
}

export default App;
