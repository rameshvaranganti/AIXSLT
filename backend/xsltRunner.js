import { exec } from "child_process";
import path from "path";
import fs from "fs";

export function runXslt(xml, xsl, callback) {
  const saxonPath = path.join(process.cwd(), "saxon", "saxon9he.jar");

  fs.writeFileSync("input.xml", xml);
  fs.writeFileSync("stylesheet.xsl", xsl);

  const cmd =
    `java -cp "${saxonPath}" net.sf.saxon.Transform ` +
    `-s:input.xml -xsl:stylesheet.xsl -o:output.html`;

  exec(cmd, (err) => {
    if (err) return callback(err.toString(), null);
    const html = fs.readFileSync("output.html", "utf8");
    callback(null, html);
  });
}
