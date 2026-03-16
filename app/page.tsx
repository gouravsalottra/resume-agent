export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 font-sans">
      <main className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Resume Agent
        </h1>
        <p className="mt-3 max-w-xl text-base text-zinc-600 sm:text-lg">
          Tailor your resume to any job in seconds
        </p>
        <button className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
          Get Started
        </button>
      </main>
    </div>
  );
}
