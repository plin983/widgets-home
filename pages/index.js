import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pomodoro Timer</title>
        <style>
          body { text-align: center; font-family: sans-serif; }
        </style>
      </Head>


        <h1>Pomodoro Timer</h1>
        <button onclick="startTimer()">Start 25min</button>
        <p id="timer">25:00</p>

        <script>
          function startTimer() {
          let time = 1500;
          const display = document.getElementById("timer");
          const interval = setInterval(() => {
          let minutes = Math.floor(time / 60);
          let seconds = time % 60;
          display.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
          time--;
          if (time < 0) clearInterval(interval);
          }, 1000);
        }
      </script>


      <Footer />
    </div>
  )
}
