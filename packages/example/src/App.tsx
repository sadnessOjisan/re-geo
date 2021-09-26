import { VFC } from "react";

import { Blink } from "../../lib/dist";

const App: VFC = () => {
  return (
    <div className="App">
      <Blink text="hello" />
    </div>
  );
};

export default App;
