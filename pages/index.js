import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [copyStatus, setCopyStatus] = useState('');

  // 複製網址功能
  function copyURL(url) {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopyStatus('網址已複製！');
        setTimeout(() => setCopyStatus(''), 2000);  // 2秒後清除提示
      })
      .catch(err => {
        setCopyStatus(`複製失敗: ${err}`);
      });
  }

  return (
    <div className="container">
      <Head>
        <title>🎛️ My Widget Hub</title>
      </Head>

      <h1>🎛️ My Widget Hub</h1>
      
      {copyStatus && <div className="copy-status">{copyStatus}</div>}  {/* 顯示複製狀態 */}
      
      <ul>
        <li>
          <Link href="/pomodoro">🍅 Pomodoro Timer</Link>
          <button className="copy-btn" onClick={() => copyURL(`${window.location.origin}/pomodoro`)}>📋</button>
        </li>
        <li>
          <Link href="/countdown">⏳ Countdown Timer</Link>
          <button className="copy-btn" onClick={() => copyURL(`${window.location.origin}/countdown`)}>📋</button>
        </li>
        <li>
          <Link href="/weather">🌤️ Weather Widget</Link>
          <button className="copy-btn" onClick={() => copyURL(`${window.location.origin}/weather`)}>📋</button>
        </li>
      </ul>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 20px 0;
          font-size: 1.2rem;
        }

        .copy-btn {
          margin-left: 10px;
          background: #f0f0f0;
          border: none;
          padding: 5px 10px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s;
        }

        .copy-btn:hover {
          background: #e0e0e0;
        }

        .copy-status {
          background-color: #dff0d8;
          color: #3c763d;
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
