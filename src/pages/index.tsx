import Head from "next/head";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>State Managment</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Redux Toolkit vs React Query
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={`/react-query/user`}
              target="_blank"
            >
              <h3 className="text-2xl font-bold">React Query →</h3>
              <div className="text-lg">
                Todo app with React Query and TypeScript
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/rtk-query/user"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">RTK Query →</h3>
              <div className="text-lg">
                Todo app with Redux Toolkit + RTK Query and TypeScript
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
