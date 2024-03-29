import { VFC } from "react";

import { Blink, Community } from "../../lib/src";

const App: VFC = () => {
  return (
    <div className="App">
      <Blink __unsafe__style={{ animationDuration: "0.01s" }}>
        hello world
      </Blink>
      <img src={Community}></img>
    </div>
  );
};

export default App;
