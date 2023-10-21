import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState(null);
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Reply hazy, try again",
    "Reply hazy, try again",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  function magicBall() {
    const randomNumber = Math.floor(Math.random() * 20);
    setResult(answers[randomNumber]);
  }

  return (
    <div className="App">
      <div className="mainTitle">
        <h1>MAGIC 8-BALL</h1>
      </div>
      <div className="articles">
        <p contentEditable>
          {" "}
          Type your question here... <br />
          For example: Mirror, mirror on the wall, who's the fairest of them
          all? :)){" "}
        </p>
      </div>
      <div className="ball_1 center" onClick={magicBall}>
        <div className="ball_2 center">
          {result ? (
            <div className="answer"> {result} </div>
          ) : (
            <div className="eight"> 8 </div>
          )}
        </div>
      </div>
    </div>
  );
}
