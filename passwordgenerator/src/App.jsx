import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(0);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassWord] = useState("");

  //useRef Hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) {
      str += "0123456789";
    }
    if (CharAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassWord(pass);
  }, [length, NumberAllowed, CharAllowed, setPassWord]);

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    //passRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, NumberAllowed, CharAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mt-56 mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 flex-shrink-0 hover:bg-black-500"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={56}
            value={length}
            className="cursor-pointer"
            onChange={(ev) => {
              setlength(ev.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={NumberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
