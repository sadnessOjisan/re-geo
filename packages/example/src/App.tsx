import { VFC } from "react";

import { Blink } from "../../lib/src";

const App: VFC = () => {
  return (
    <div className="App">
      <Blink text="hello" speed="slow" style={{ animationDuration: "0.01s" }} />
    </div>
  );
};

export default App;
