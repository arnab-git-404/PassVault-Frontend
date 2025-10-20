// import { useState } from "react";

// // import { ToastContainer, toast } from "react-toastify";

// import { toast } from 'react-hot-toast';


// import SignUpModal from "./SignUpModal";
// import { useGlobalContext } from "../context/context";

// export default function PasswordGenerator() {
//   const [password, setPassword] = useState("");
//   const [length, setLength] = useState(10);
//   const [includeUppercase, setIncludeUppercase] = useState(false);
//   const [includeLowercase, setIncludeLowercase] = useState(false);
//   const [includeNumbers, setIncludeNumbers] = useState(false);
//   const [includeSymbols, setIncludeSymbols] = useState(false);
//   const [strength, setStrength] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { userLoggedIn } = useGlobalContext();


//   const generatePassword = () => {



//     if (
//       !includeUppercase &&
//       !includeLowercase &&
//       !includeNumbers &&
//       !includeSymbols
//     ) {
//       toast.error("Please select at least one option");
//       return;
//     }

//     let characters = "";
//     if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
//     if (includeNumbers) characters += "0123456789";
//     if (includeSymbols) characters += "!@#$%^&*()_+{}[]<>?";

//     if (characters.length === 0) return;

//     let generatedPassword = "";
//     for (let i = 0; i < length; i++) {
//       generatedPassword += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }

//     setPassword(generatedPassword);
//     evaluateStrength(generatedPassword);
//     // setIsModalOpen(true);
//   };

//   const evaluateStrength = (password) => {
//     if (password.length < 6) setStrength("Weak");
//     else if (password.length < 12) setStrength("Medium");
//     else setStrength("Strong");
//   };

//   const copyToClipboard = () => {
//     if (password === "") {
//       toast.error("No password to copy");
//       return;
//     }

//     navigator.clipboard.writeText(password);

//     if (password) {
//       toast.success("Password copied to clipboard");

//       if (!userLoggedIn) {
//         setIsModalOpen(true);
//       }
//     }
//   };

//   return (
//     <div className="p-6 mx-auto border-2 rounded-xl shadow-md space-y-4  ">
//       <h1 className="text-xl font-bold">Password Generator</h1>

//       <div className="flex items-center border p-2 rounded ">
//         <input
//           type="text"
//           readOnly
//           value={password}
//           placeholder="Password"
//           className="flex-grow p-2 outline-none"
//         />
//         <button
//           onClick={copyToClipboard}
//           className="hover:cursor-pointer ml-2 p-2 bg-blue-500 text-white rounded"
//         >
//           Copy
//         </button>
//       </div>

//       <div className="text-xl ">
//         <label>Password Length: {length}</label>
//         <input
//           type="range"
//           min="1"
//           max="20"
//           value={length}
//           onChange={(e) => setLength(Number(e.target.value))}
//           className="w-full hover:cursor-pointer "
//         />
//       </div>

//       <div className="space-y-2 ">
//         <label className="flex items-center text-xl hover:cursor-pointer ">
//           <input
//             type="checkbox"
//             className="text-xl transform scale-125 "
//             checked={includeUppercase}
//             onChange={() => setIncludeUppercase(!includeUppercase)}
//           />
//           <span className="ml-2 text-xl ">Include Uppercase Letters</span>
//         </label>

//         <label className="flex items-center text-xl hover:cursor-pointer ">
//           <input
//             type="checkbox"
//             className="text-xl transform scale-125 "
//             checked={includeLowercase}
//             onChange={() => setIncludeLowercase(!includeLowercase)}
//           />
//           <span className="ml-2">Include Lowercase Letters</span>
//         </label>
//         <label className="flex items-center text-xl hover:cursor-pointer ">
//           <input
//             type="checkbox"
//             className="text-xl transform scale-125 "
//             checked={includeNumbers}
//             onChange={() => setIncludeNumbers(!includeNumbers)}
//           />
//           <span className="ml-2">Include Numbers</span>
//         </label>
//         <label className="flex items-center text-xl hover:cursor-pointer ">
//           <input
//             type="checkbox"
//             className="text-xl transform scale-125 "
//             checked={includeSymbols}
//             onChange={() => setIncludeSymbols(!includeSymbols)}
//           />
//           <span className="ml-2">Include Symbols</span>
//         </label>
//       </div>

//       <div className="flex items-center">
//         <p className="mr-2">Strength:</p>
//         <span
//           className={`p-2 rounded text-white ${
//             strength === "Weak"
//               ? "bg-red-500"
//               : strength === "Medium"
//               ? "bg-yellow-500"
//               : "bg-green-500"
//           }`}
//         >
//           {strength}
//         </span>
//       </div>

//       <button
//         onClick={generatePassword}
//         className=" hover:cursor-pointer w-full p-2 bg-green-500 text-white rounded"
//       >
//         Generate Password
//       </button>

//       <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }


import { useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import SignUpModal from "./SignUpModal";
import { useGlobalContext } from "../context/context";

const OPTIONS = [
  {
    key: "uppercase",
    label: "Include uppercase letters",
    helper: "ABC",
  },
  {
    key: "lowercase",
    label: "Include lowercase letters",
    helper: "abc",
  },
  {
    key: "numbers",
    label: "Include numbers",
    helper: "123",
  },
  {
    key: "symbols",
    label: "Include symbols",
    helper: "!@#",
  },
];

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [config, setConfig] = useState({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userLoggedIn } = useGlobalContext();

  const strengthMeta = useMemo(() => {
    if (!password) {
      return {
        label: "Awaiting password",
        barClass: "bg-gradient-to-r from-gray-200 to-gray-300",
        textClass: "text-gray-500",
        width: "0%",
      };
    }

    let score = 0;

    if (password.length >= 16) score += 2;
    else if (password.length >= 12) score += 1;

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score >= 5) {
      return {
        label: "Strong",
        barClass: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
        textClass: "text-emerald-500",
        width: "100%",
      };
    }

    if (score >= 3) {
      return {
        label: "Medium",
        barClass: "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600",
        textClass: "text-amber-500",
        width: "66%",
      };
    }

    return {
      label: "Weak",
      barClass: "bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600",
      textClass: "text-rose-500",
      width: "33%",
    };
  }, [password]);

  const toggleOption = (key) => {
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const generatePassword = () => {
    const activeKeys = Object.entries(config)
      .filter(([key, value]) => key !== "length" && value);

    if (activeKeys.length === 0) {
      toast.error("Select at least one character set.");
      return;
    }

    const characterSets = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+{}[]<>?/\\|~",
    };

    const pool = activeKeys
      .map(([key]) => characterSets[key])
      .join("");

    let generated = "";
    for (let index = 0; index < config.length; index += 1) {
      generated += pool.charAt(Math.floor(Math.random() * pool.length));
    }

    setPassword(generated);
  };

  const copyToClipboard = () => {
    if (!password) {
      toast.error("Generate a password before copying.");
      return;
    }

    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard.");

    if (!userLoggedIn) {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="mx-auto w-full max-w-2xl rounded-3xl border border-gray-200/60 bg-white/70 p-6 shadow-xl backdrop-blur md:p-8 dark:border-white/10 dark:bg-slate-900/70">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Password generator
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            Mix character sets, tweak the length, and craft a secure password instantly.
          </p>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {config.length} characters
        </span>
      </header>

      <div className="mt-6 space-y-4 md:space-y-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-800/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <input
              type="text"
              readOnly
              value={password}
              placeholder="Click generate to create a password"
              className="w-full rounded-xl border border-transparent bg-white px-4 py-3 font-mono text-base tracking-wider text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex gap-2 md:flex-col">
            <button
              onClick={copyToClipboard}
              className=" hover:cursor-pointer inline-flex items-center justify-center rounded-xl border border-blue-500/70 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-blue-400/70 dark:text-blue-300 dark:hover:bg-blue-950/40"
            >
              Copy
            </button>
            <button
              onClick={generatePassword}
              className="hover:cursor-pointer inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500"
            >
              Generate
            </button>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password-length"
              className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300"
            >
              Password length
            </label>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200">
              {config.length}
            </span>
          </div>

          <input
            id="password-length"
            type="range"
            min="6"
            max="32"
            value={config.length}
            onChange={(event) =>
              setConfig((prev) => ({
                ...prev,
                length: Number(event.target.value),
              }))
            }
            className="w-full accent-indigo-500 hover:cursor-pointer  "
          />

          <div className="flex justify-between text-xs text-slate-400">
            <span>6</span>
            <span>12</span>
            <span>24</span>
            <span>32</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {OPTIONS.map(({ key, label, helper }) => (
            <button
              key={key}
              type="button"
              onClick={() => toggleOption(key)}
              className={`hover:cursor-pointer flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 ${
                config[key]
                  ? "border-indigo-500 bg-indigo-50 text-indigo-600 dark:border-indigo-400 dark:bg-indigo-500/10 dark:text-indigo-200"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {helper}
                </span>
              </div>
              <span
                className={`h-4 w-4 rounded-full border-2 ${
                  config[key]
                    ? "border-indigo-500 bg-indigo-500"
                    : "border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Strength
            </p>
            <span className={`text-sm font-semibold ${strengthMeta.textClass}`}>
              {strengthMeta.label}
            </span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-800">
            <div
              className={`h-full rounded-full transition-all duration-300 ${strengthMeta.barClass}`}
              style={{ width: strengthMeta.width }}
            />
          </div>
        </div>
      </div>

      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}