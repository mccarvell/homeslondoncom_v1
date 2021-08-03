import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Homes in London Ontario</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://www.homeslondon.com">
            HomesLondon.com
          </a>
        </h1>

        

        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="flex items-center justify-center">
         Greg McCarvell - Broker (The Realty Firm Inc.)
        </p>
      </footer>
    </div>
  )
}
