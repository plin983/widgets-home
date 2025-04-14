import Head from 'next/head'
import Link from 'next/link'


export default function Pomodoro() {
  // 複製網址功能
  function copyURL() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("網址已複製！"))
      .catch(err => alert("複製失敗: " + err));
  }

  return (
    <div>
      <Head>
        <title>Pomodoro Timer</title>
      </Head>

      <h1>🍅 Pomodoro Timer</h1>
      <p id="timer">25:00</p>
      <button onClick={() => startTimer()}>Start 25min</button>
      <br /><br />

      {/* 複製網址按鈕 */}
      <button onClick={copyURL}>📋 複製這個 Widget 網址</button>

      <p><Link href="/">← Back to home</Link></p>

      <script dangerouslySetInnerHTML={{ __html: `
        function startTimer() {
          let time = 1500;
          const display = document.getElementById("timer");
          const interval = setInterval(() => {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            display.innerHTML = \`\${minutes}:\${seconds < 10 ? "0" : ""}\${seconds}\`;
            time--;
            if (time < 0) clearInterval(interval);
          }, 1000);
        }
      `}} />
    </div>
  )
}
