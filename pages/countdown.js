import Head from 'next/head'
import Link from 'next/link'

export default function Countdown() {
  // 複製網址功能
  function copyURL() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("網址已複製！"))
      .catch(err => alert("複製失敗: " + err));
  }

  return (
    <div>
      <Head>
        <title>Countdown Timer</title>
      </Head>

      <h1>⏳ Countdown Timer</h1>
      <p id="countdown">10</p>
      <button onClick={() => startCountdown()}>Start Countdown</button>
      <br /><br />

      {/* 複製網址按鈕 */}
      <button onClick={copyURL}>📋 複製這個 Widget 網址</button>
      
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
