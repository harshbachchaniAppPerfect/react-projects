import { useState } from "react";

export default function MyForm() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1 className="text-4xl text-center text-white">That's Right</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm();
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function submitForm() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "delhi";

        if (shouldError) {
          reject(new Error("Wrong Answer Try again!!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-12 text-orange-500 bg-gray-400">
      <h2 className="text-2xl text-center text-white">Capital Quiz</h2>
      <p className="text-lg text-center text-white">
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700"
        >
          Submit
        </button>
        {error !== null && (
          <p className="text-lg text-center text-white">{error.message}</p>
        )}
      </form>
    </div>
  );
}
