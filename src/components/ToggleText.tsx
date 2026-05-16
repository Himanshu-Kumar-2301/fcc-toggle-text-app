import React, { useState } from "react";

const ToggleText: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div id="toggle-container">
      <button onClick={handleToggleVisibility} id="toggle-button">
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};

export default ToggleText;
