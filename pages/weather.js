import Head from 'next/head'
import Link from 'next/link'

export default function Weather() {
  // 複製網址功能
  function copyURL() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("網址已複製！"))
      .catch(err => alert("複製失敗: " + err));
  }
  return (
    <div>
      <Head>
        <title>Weather Widget</title>
      </Head>

      <h1>🌤️ Weather Widget</h1>

      <iframe 
        src="https://forecast7.com/en/64d84n147d72/fairbanks/" 
        frameBorder="0" 
        width="650" 
        height="250"
        allowTransparency="true"
      ></iframe>

      <p><Link href="/">← Back to home</Link></p>
    </div>
  )
}
