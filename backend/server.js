import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { runXslt } from "./xsltRunner.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));

app.post("/compile", (req, res) => {
  const { xml, xsl } = req.body;

  runXslt(xml, xsl, (err, output) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ output });
  });
});

app.listen(4000, () => console.log("Backend running on port 4000"));
