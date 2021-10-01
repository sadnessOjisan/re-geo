import { VFC } from "react";

import { Blink, Community } from "../../lib/src";

const App: VFC = () => {
  return (
    <div className="App">
      <Blink text="hello" speed="slow" style={{ animationDuration: "0.01s" }} />
      <img src={Community}></img>
    </div>
  );
};

export default App;
