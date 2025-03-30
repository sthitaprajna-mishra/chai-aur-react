import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [specCharsAllowed, setSpecCharsAllowed] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let originalString = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numbersAllowed) originalString += "1234567890";
    if (specCharsAllowed) originalString += "!@#$%^&*()_+~=-`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * originalString.length + i);
      password += originalString.charAt(charIndex);
    }

    setPassword(password);
  }, [length, numbersAllowed, specCharsAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specCharsAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full min-w-md max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="bg-white w-full py-1 px-3 outline-none cursor-default"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 text-white px-3 py-0.5 outline-none"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numbersInpout"
            className="cursor-pointer"
            onChange={() => setNumbersAllowed((prev) => !prev)}
          />
          <label htmlFor="numbersInpout">Numbers </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specCharsAllowed}
            id="specCharsInpout"
            className="cursor-pointer"
            onChange={() => setSpecCharsAllowed((prev) => !prev)}
          />
          <label htmlFor="specCharsInpout">Special Characters </label>
        </div>
      </div>
    </div>
  );
}

export default App;
