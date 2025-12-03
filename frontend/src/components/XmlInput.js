export default function XmlInput({ xml, setXml }) {
  return (
    <div>
      <h3>Input XML</h3>
      <textarea value={xml} onChange={e => setXml(e.target.value)} />
    </div>
  );
}
