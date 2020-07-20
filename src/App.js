import React from "react";
import { Quote } from "./components/quote/quote.component";
import { Toggle } from "./components/toggle/toggle.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      quotes: [],
      colors: [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857",
      ],
      quote: "",
      author: "",
      color: "",
    };
  }
  handleClick = () => {
    const SIZE = this.state.quotes.length;
    const INDEX = Math.floor(Math.random() * SIZE);
    const author = this.state.quotes[INDEX].author;
    const quote = this.state.quotes[INDEX].quote;

    const INDEX_COLOR = Math.floor(Math.random() * this.state.colors.length);
    const color = this.state.colors[INDEX_COLOR];

    this.setState({ color, quote, author });
  };

  componentDidMount() {
    const URL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.setState({ quotes: data.quotes }));
  }

  render() {
    const bg = {
      backgroundColor: this.state.color,
      transition: "all 0.5s",
      color: this.state.color,
    };

    return (
      <div className="container" style={bg}>
        <div className="App">
          <Quote
            quote={this.state.quote ? this.state.quote : "Hello World"}
            author={this.state.author ? this.state.author : "Dexkode"}
            bg={bg}
          />
          <Toggle handleClick={this.handleClick} setBg={this.setBg} bg={bg} />
        </div>
      </div>
    );
  }
}

export default App;
