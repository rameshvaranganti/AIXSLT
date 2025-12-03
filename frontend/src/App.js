import React, { useState } from "react";
import axios from "axios";

import XmlInput from "./components/XmlInput";
import XslEditor from "./components/XslEditor";
import ParamsInput from "./components/ParamsInput";
import OutputPanel from "./components/OutputPanel";
import CompilerDropdown from "./components/CompilerDropdown";
import AiTabs from "./components/AiTabs";

function App() {
  const [xml, setXml] = useState(`<?xml version="1.0"?>
<catalog>
  <book id="bk101">
    <author>Matthew Gambardella</author>
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`);

  const [xsl, setXsl] = useState(`<?xml version="1.0"?>
<xsl:stylesheet version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
     <body>
      <h2>My CD Collection</h2>
      <xsl:apply-templates/>
     </body>
    </html>
  </xsl:template>

  <xsl:template match="book">
    <p>
      <strong><xsl:value-of select="title"/></strong>
       by <xsl:value-of select="author"/>
    </p>
  </xsl:template>

</xsl:stylesheet>`);

  const [output, setOutput] = useState("");

  const compile = async () => {
    const response = await axios.post("http://localhost:4000/compile", {
      xml,
      xsl
    });
    setOutput(response.data.output);
  };

  return (
    <div className="grid-container">
      <div className="left-pane">
        <XmlInput xml={xml} setXml={setXml} />
        <ParamsInput />
        <OutputPanel output={output} />
      </div>

      <div className="right-pane">
        <CompilerDropdown />
        <XslEditor xsl={xsl} setXsl={setXsl} />
        <AiTabs />
      </div>

      <button className="compile-button" onClick={compile}>
        Generate XSLT
      </button>
    </div>
  );
}

export default App;
