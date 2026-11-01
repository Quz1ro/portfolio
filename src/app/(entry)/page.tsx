export default function EntryPage() {
  const home = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/en/`;
  return <main>
    <meta httpEquiv="refresh" content={`0;url=${home}`}/>
    <h1>Kovalevych Vadym — Portfolio</h1>
    <a href={home}>Open portfolio →</a>
  </main>;
}
