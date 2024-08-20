import { useCallback, useState, useEffect, useRef } from "react";

export default function Card() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let mypassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@!~£$#%&*()[]/|";

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      mypassword += str.charAt(random);
    }
    setPassword(mypassword);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
    // alert(`Password ${password} copied to the clipboard!!`);
  }, [password, length]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  return (
    <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-12 text-orange-500 bg-gray-400">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button
          className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700"
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-purple-900">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="text-purple-900">NumberAllowed</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="text-purple-900">CharacterAllowed</label>
        </div>
      </div>
    </div>
  );
}
