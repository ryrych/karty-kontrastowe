import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDark: true };
    this.setColor = this.setColor.bind(this);
  }

  setColor() {
    this.setState(({ isDark }) => ({ isDark: !isDark }));
  }

  render() {
    const { isDark } = this.state;
    return (
      <div>
        <div className="card-switcher" onClick={() => this.setColor()}></div>
        <div className="cards">
          <Card name="wrona" icon="crow" isDark={isDark} />
          <Card name="kiwi" icon="kiwi-bird" isDark={isDark} />
          <Card name="gołąbek" icon="dove" isDark={isDark} />
          <Card name="pióro" icon="feather-alt" isDark={isDark} />

          <Card name="autobus" icon="bus" isDark={isDark} />
          <Card name="jabłko" icon="apple-alt" isDark={isDark} />
          <Card name="dzwonek" icon="bell" isDark={isDark} />
          <Card name="pędzel" icon="brush" isDark={isDark} />

          <Card name="aparat" icon="camera" isDark={isDark} />
          <Card name="kot" icon="cat" isDark={isDark} />
          <Card name="kółko" icon="circle" isDark={isDark} />
          <Card name="kawa" icon="coffee" isDark={isDark} />

          <Card name="ciastko" icon="cookie" isDark={isDark} />
          <Card name="korona" icon="crown" isDark={isDark} />
          <Card name="kostka" icon="dice-five" isDark={isDark} />
          <Card name="uśmiech" icon="grin-beam" isDark={isDark} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
