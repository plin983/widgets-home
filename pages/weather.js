import { useState, useEffect } from 'react';

export default function WeatherWidget() {
  const [iframeCode, setIframeCode] = useState('');

  useEffect(() => {
    // 假設天氣 widget 會嵌入到 Notion 使用以下 URL
    setIframeCode(`<iframe src="${window.location.origin}/embed/weather" width="250" height="250"></iframe>`);
  }, []);

  function copyIframeCode() {
    navigator.clipboard.writeText(iframeCode)
      .then(() => alert("Widget 代碼已複製！"))
      .catch(err => alert("複製失敗: " + err));
  }

  return (
    <div className="container">
      <h1>Weather Widget</h1>

      <h3>嵌入到 Notion：</h3>
      <textarea
        readOnly
        value={iframeCode}
        rows="3"
        style={{ width: '100%', fontSize: '1rem', padding: '10
