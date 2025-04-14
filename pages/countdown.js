import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Countdown() {
  const [iframeCode, setIframeCode] = useState('')

  useEffect(() => {
    setIframeCode(`<iframe src="${window.location.origin}/embed/countdown" width="250" height="250"></iframe>`)
  }, [])

  function copyIframeCode() {
    navigator.clipboard.writeText(iframeCode)
      .then(() => alert("Widget 代碼已複製！"))
      .catch(err => alert("複製失敗: " + err));
  }

  return (
    <div className="container">
      <Head>
        <title>Countdown Timer</title>
      </Head>

      <h1>⏳ Countdown Timer</h1>
      <p id="countdown">10</p>
      <button className="copy-btn" onClick={() => startCountdown()}>Start Countdown</button>
      <br /><br />

      <h3>嵌入到 Notion：</h3>
      <textarea
        readOnly
        value={iframeCode}
        rows="3"
        style={{ width: '100%', fontSize: '1rem', padding: '10px' }}
      ></textarea>
      <button className="copy-btn" onClick={copyIframeCode}>📋 複製這個 Widget</button>

      <p><Link href="/">← Back to home</Link></p>

      <script dangerouslySetInnerHTML={{ __html: `
        function startCountdown() {
          let time = 10;
          const display = document.getElementById("countdown");
          const interval = setInterval(() => {
            display.innerHTML = time;
            time--;
            if (time < 0) clearInterval(interval);
          }, 1000);
        }
      `}} />
    </div>
  )
}
