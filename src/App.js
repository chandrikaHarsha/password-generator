import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [copyPass, setCopyPass] = useState("");
  const [range, setRange] = useState(8);
  const [ULetter, setULetter] = useState(false);
  const [LLetter, setLLetter] = useState(false);
  const [Numbers, setNumber] = useState(false);
  const [Symbols, setSymbol] = useState(false);
  // console.log(ULetter, LLetter,Number,Symbol);
  let UpperCase, LowerCase, Num, Symbl;
  let str = "";
  function FormData(e) {
    e.preventDefault();
    // console.log(e.target.input)
    //  UpperCase = new Array(26).fill(1).map((_,i)=>String.fromCharCode(65+i));
    UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    LowerCase = UpperCase.toLowerCase();
    Num = "0123456789";
    Symbl = "~!@#$%^&*()_<]>?:'}{[|";
    let password = "";
    if (
      ULetter === false &&
      LLetter === false &&
      Numbers === false &&
      Symbols === false
    ) {
      alert(
        "Select anyone or combination to generate a secure password using Casing, numbers & symbols."
      );
    } else {
      if (ULetter === true) {
        password = UpperCase;
      }
      if (LLetter === true) {
        password += LowerCase;
      }
      if (Numbers === true) {
        password += Num;
      }
      if (Symbols === true) {
        password += Symbl;
      }
    }
    for (let i = 0; i < range; i++) {
      let passLength = password.length;
      const idx = Math.floor(Math.random() * passLength);
      str += password.charAt(idx);
    }
    // console.log(str, str.length);
    setCopyPass(str);
  }
  function copy() {
    navigator.clipboard.writeText(copyPass);
    toast.success("Copied");
  }
  // console.log(copyPass);
  return (
    <div className="w-[600px] my-[50px] mx-auto bg-purple-800 p-5 rounded-[10px] text-white opacity-[0.8]">
      <ToastContainer />
      <h1 className="text-center text-[30px]">Password Generator</h1>
      <form className="my-[20px] w-full" onSubmit={FormData}>
        <div className="w-full mb-[10px] grid grid-flow-col grid-cols-[20%_60%_10%] p-1">
          <div>
            <label forHTML="password" className="mr-[10px]">
              Password
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="password"
              name="password"
              value={copyPass}
              className="p-1 focus:border-none focus:outline-purple-800 text-purple-800 w-full"
            />
          </div>
          <div>
            <button
              type="button"
              className="bg-white rounded-md ml-[10px] text-purple-800 w-[80px] p-1 font-semibold"
              onClick={copy}
            >
              Copy
            </button>
          </div>
        </div>
        <div className="w-full mb-[10px] grid grid-flow-col grid-cols-[25%_70%] p-1">
          <div>
            <label forHTML="passwordLength" className="mr-[10px]">
              Password Length
            </label>
          </div>
          <div className="relative">
            <input
              type="range"
              name="passwordLength"
              min={8}
              max={30}
              defaultValue={19}
              className="p-1 focus:border-none focus:outline-purple-800 text-purple-800 w-full accent-purple-500"
              onChange={(e) => setRange(e.target.value)}
            />
            <span className="absolute left-[0px] top-[20px]">min: 8</span>
            <span className="absolute right-[0px] top-[20px]">max : 30</span>
          </div>
        </div>
        <div className="w-full mb-[10px] grid grid-flow-col grid-cols-[30%_70%] p-1 mt-[50px]">
          <div>
            <label forHTML="passwordUpperCase" className="mr-[10px]">
              UpperCase Letter
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="passwordUpperCase"
              className="p-1 focus:border-none focus:outline-purple-800 accent-purple-500 w-[20px] h-[20px]"
              onChange={(e) => setULetter(e.target.checked)}
            />
          </div>
        </div>
        <div className="w-full mb-[10px] grid grid-flow-col grid-cols-[30%_70%] p-1">
          <div>
            <label forHTML="passwordLowerCase" className="mr-[10px]">
              LowerCase Letter
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="passwordLowerCase"
              className="p-1 focus:border-none focus:outline-purple-800 accent-purple-500 w-[20px] h-[20px]"
              onChange={(e) => setLLetter(e.target.checked)}
            />
          </div>
        </div>
        <div className="w-full mb-[10px] grid grid-flow-col grid-cols-[30%_70%] p-1">
          <div>
            <label forHTML="passwordNumber" className="mr-[10px]">
              Number
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="passwordNumber"
              className="p-1 focus:border-none focus:outline-purple-800 accent-purple-500 w-[20px] h-[20px]"
              onChange={(e) => setNumber(e.target.checked)}
            />
          </div>
        </div>
        <div className="w-full mb-[10px] grid grid-flow-col grid-cols-[30%_70%] p-1">
          <div>
            <label forHTML="passwordSymbol" className="mr-[10px]">
              Symbol
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="passwordSymbol"
              className="p-1 focus:border-none focus:outline-purple-800 accent-purple-500 w-[20px] h-[20px]"
              onChange={(e) => setSymbol(e.target.checked)}
            />
          </div>
        </div>

        <div className="w-full mb-[10px] p-1 flex align-middle justify-center mt-[20px]">
          <button
            type="submit"
            className="bg-white text-purple-800 w-[200px] rounded-md p-2 font-semibold focus:outline-none"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
