import React from "react";
import Title from "components/Ttile";
import AuthButton from "components/AuthButton";

const App = () => {
  return (
    <div>
      <h1>jest learning</h1>
      <section>
        {/* <Title type="small" title="小字" /> */}
        {/* <Title type="large" title="大字" /> */}
        <AuthButton>你好</AuthButton>
      </section>
    </div>
  );
};

export default App;
