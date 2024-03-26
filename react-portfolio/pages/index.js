import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Raj Duraisamy's Portfolio</title>
        <meta name = "description" content = "Generated"></meta>
        <link rel = "icon" href = "/favicon.ico"/>
      </Head>

      <main>
        <section className="bg-white px-10 min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developed by Raj</h1>
            <ul className="flex items-center">
              <li></li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
        <div className="text-center p-10 text-gray-600">
          <h2 className= "text-5xl py-2 text-teal-600 font-medium">Raj Duraisamy</h2>
          <h3 className="text-2xl py-2">Likes solving puzzles, learning new things, and going outside</h3>
        </div>
        <div className="">

        </div>
        </section>
      </main>
    </div>
  );
}
