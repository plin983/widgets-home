import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Pomodoro() {
  const [iframeCode, setIframeCode] = useState('');
  const [time, setTime] = useState(1500);  // 初始时间设置为 25 分钟 (1500 秒)
  const [isActive, setIsActive] = useState(false);  // 控制计时器是否运行

  // 设置嵌入的 iframe 代码
  useEffect(() => {
    setIframeCode(`<iframe src="${window.location.origin}/embed/pomodoro" width="250" height="250"></iframe>`);
  }, []);

  // 启动计时器
  function startTimer() {
    if (isActive) return; // 如果计时器已经在运行，则不做任何操作

    setIsActive(true);
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          setIsActive(false);  // 计时结束后停止计时器
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  // 格式化显示时间
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // 复制 iframe 代码到剪贴板
  function copyIframeCode() {
    navigator.clipboard.writeText(iframeCode)
      .then(() => alert("Widget 代碼已複製！"))
      .catch(err => alert("複製失敗: " + err));
  }

  return (
    <div className="container">
      <Head>
        <title>Pomodoro Timer</title>
      </Head>

      <h1>🍅 Pomodoro Timer</h1>
      
      {/* 显示格式化的时间 */}
      <p id="timer">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</p>

      {/* 启动计时器的按钮 */}
      <button className="copy-btn" onClick={startTimer}>
        {isActive ? '正在计时...' : 'Start 25min'}
      </button>

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
    </div>
  );
}
