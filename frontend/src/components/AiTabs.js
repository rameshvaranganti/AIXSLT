import { useState } from "react";

export default function AiTabs() {
  const [tab, setTab] = useState("chatgpt");

  return (
    <div>
      <button onClick={() => setTab("chatgpt")}>ChatGPT</button>
      <button onClick={() => setTab("gemini")}>Gemini</button>

      <textarea
        placeholder={tab === "chatgpt" ? "Ask ChatGPT..." : "Ask Gemini..."}
      />
    </div>
  );
}
