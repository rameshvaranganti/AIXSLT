import { useState } from "react";

export default function OutputPanel({ output }) {
  const [tab, setTab] = useState("raw");

  return (
    <div>
      <h3>XSLT Output</h3>

      <div>
        <button onClick={() => setTab("raw")}>Raw Code</button>
        <button onClick={() => setTab("html")}>HTML Preview</button>
      </div>

      {tab === "raw" ? (
        <pre>{output}</pre>
      ) : (
        <iframe title="preview" srcDoc={output} />
      )}
    </div>
  );
}
