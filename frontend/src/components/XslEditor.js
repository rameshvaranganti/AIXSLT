export default function XslEditor({ xsl, setXsl }) {
  return (
    <div>
      <h3>STYLESHEET.XSL</h3>
      <textarea value={xsl} onChange={e => setXsl(e.target.value)} />
    </div>
  );
}
