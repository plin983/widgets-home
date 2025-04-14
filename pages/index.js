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
         body { text-align: center; font-family: sans-serif; }
         <p className="description">
       
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
   )
 }
