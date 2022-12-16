import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCounter from "./componenets/HooksCounter";
import DynamicHooksCounter from "./componenets/DynamicHooksCounter";

function App() {
  return (
    <Provider store={store}>
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <HooksCounter></HooksCounter>
        {/* <HooksCounter></HooksCounter> */}
        <DynamicHooksCounter></DynamicHooksCounter>
      </div>
    </Provider>
  );
}

export default App;
