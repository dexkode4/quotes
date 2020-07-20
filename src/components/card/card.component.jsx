import React from "react";
import "./card.styles.css";

class Card extends React.Component {
  handleClick() {
    let quote;
  }

  render() {
    return (
      <div className="card">
        <h1>Random quote</h1>

        {/* {this.props.quotes.map((qoute) => (
          <p>{qoute.quote}</p>
        ))} */}

        <Toggle onClick={this.handleClick} />
      </div>
    );
  }
}

export default Card;
