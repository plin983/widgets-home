import Head from 'next/head'
 import Header from '@components/Header'
 import Footer from '@components/Footer'
 
 export default function Home() {
   return (
     <div className="container">
       <Head>
         <title>OnlynOnly Widgets</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>
 
       <main>
         <Header title="Pomodoro Timer" />
         <p className="description">
          <button onclick="startTimer()">Start 25min</button>
          <p id="timer">25:00</p>
         </p>
       </main>
 
       <Footer />
 
       <style jsx>{`
         .container {
           height: 100vh;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
         }
 
         main {
           padding: 5rem 0;
           flex: 1;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
         }
 
       `}</style>
 
       <style jsx global>{`
         html,
         body {
           padding: 0;
           margin: 0;
           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
             Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
         }
 
         * {
           box-sizing: border-box;
         }
       `}</style>
     </div>
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
   )
 }
