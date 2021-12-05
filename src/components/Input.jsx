import React, { useState } from "react";
import Output from "./Output";
import EmojiPicker from "./EmojiPicker";
import useToggle from "./Toggle";

const Input = () => {
  const [isthreeDotsClicked, setthreedotsClicked] = useToggle(false);
  // const [pickedEmoji, setPickedEmoji] = useState("");

  const [userInput, setUserInput] = useState({
    emoji: "",
    amount: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const generateClick = () => {
    let emoji = userInput.emoji;
    let amount = userInput.amount;

    let newItem = "";
    for (let i = 0; i < amount; i++) {
      newItem += emoji + " ";
    }

    return newItem;
  };

  const threeDotsClick = () => {
    setthreedotsClicked(true);
  };

  const chosedEmoji = chosed => {
    setUserInput(prevUser => ({
      ...prevUser,
      emoji: (prevUser.emoji += chosed),
    }));
  };

  return (
    <div>
      <div className="input-holder">
        <input
          onChange={handleChange}
          name="emoji"
          id="emoji"
          type="text"
          placeholder="Enter Your Emoji Or The Word "
          value={userInput.emoji}
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          name="amount"
          id="amount"
          type="number"
          placeholder="How Many Of Them Do You Want"
          value={userInput.amount}
          min="0"
        />
        <button onClick={threeDotsClick} className="emoji-button far fa-grin">
        </button>
        {/* <button onClick={generateClick}  className="generate-button" >GENERATE</button> */}

        <div>
          {isthreeDotsClicked && (
            <EmojiPicker input={chosedEmoji} close={setthreedotsClicked} />
          )}
        </div>
      </div>

      <Output items={generateClick} />
    </div>
  );
};

export default Input;
