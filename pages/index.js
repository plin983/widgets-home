import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pei Hua's Widget Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="🎛️ My Widget Hub" />
        <p className="description">選一個小工具來玩玩 👇</p>

        <ul>
          <li><Link href="/pomodoro">🍅 Pomodoro Timer</Link></li>
          <li><Link href="/countdown">⏳ Countdown Timer</Link></li>
          <li><Link href="/weather">🌤️ Weather Widget</Link></li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}

