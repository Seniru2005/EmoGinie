import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import useOuterClick from "./useOuterClick";

const EmojiPicker = props => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const innerRef = useOuterClick(ev => {
    props.close(false);
  });

  const onEmojiClick = (event, EmojiObject) => {
    setChosenEmoji(EmojiObject);
  };

  useEffect(() => {
    if (chosenEmoji) {
      props.input(chosenEmoji.emoji);
    }
  }, [chosenEmoji]);

  const npm_emoji = {
    position: "absolute",
    left: "27.5rem",
    bottom: "-32rem",
    transform: "scale(0.96)",
    zIndex: 600,
    background:
      "linear-gradient(to right bottom,rgba(255, 255, 255, 0.534),rgba(255, 255, 255, 0.404))",
  };

  return (
    <div ref={innerRef} className="emoji-box">
      <Picker native onEmojiClick={onEmojiClick} pickerStyle={npm_emoji} />
    </div>
  );
};

export default EmojiPicker;
