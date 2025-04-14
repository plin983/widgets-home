import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [copyStatus, setCopyStatus] = useState('');
  const [iframeCodes, setIframeCodes] = useState({
    pomodoro: '',
    countdown: '',
    weather: ''
  });

  // 設定每個 Widget 的 iframe 代碼
  useEffect(() => {
    setIframeCodes({
      pomodoro: `<iframe src="${window.location.origin}/embed/pomodoro" width="250" height="250"></iframe>`,
      countdown: `<iframe src="${window.location.origin}/embed/countdown" width="250" height="250"></iframe>`,
      weather: `<iframe src="${window.location.origin}/embed/weather" width="250" height="250"></iframe>`
    });
  }, []);

  // 複製代碼功能
  function copyIframeCode(code) {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyStatus('Widget 代碼已複製！');
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
          <h3>Pomodoro Timer 🍅</h3>
          <textarea 
            readOnly
            value={iframeCodes.pomodoro}
            rows="3"
            style={{ width: '100%', fontSize: '1rem', padding: '10px' }}
          ></textarea>
          <button className="copy-btn" onClick={() => copyIframeCode(iframeCodes.pomodoro)}>📋 複製這個 Widget</button>
        </li>
        <li>
          <h3>Countdown Timer ⏳</h3>
          <textarea 
            readOnly
            value={iframeCodes.countdown}
            rows="3"
            style={{ width: '100%', fontSize: '1rem', padding: '10px' }}
          ></textarea>
          <button className="copy-btn" onClick={() => copyIframeCode(iframeCodes.countdown)}>📋 複製這個 Widget</button>
        </li>
        <li>
          <h3>Weather Widget 🌤️</h3>
          <textarea 
            readOnly
            value={iframeCodes.weather}
            rows="3"
            style={{ width: '100%', fontSize: '1rem', padding: '10px' }}
          ></textarea>
          <button className="copy-btn" onClick={() => copyIframeCode(iframeCodes.weather)}>📋 複製這個 Widget</button>
        </li>
      </ul>
    </div>
  )
}
