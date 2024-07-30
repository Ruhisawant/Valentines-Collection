import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Don't do this to me",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Wouldn't you reconsider?",
  "Don't be this cold!",
  "Is that your final answer?",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 30;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentines-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.gif"
          />

          <div>Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;