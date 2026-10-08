import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f5f3] p-6">
      <section className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d61d25]">404</p>
        <h1 className="mt-3 text-5xl font-black uppercase tracking-tight">Page not found</h1>
        <p className="mt-4 text-[#70747a]">This route has not been added yet.</p>
        <Link href="/" className="zs-cut mt-7 inline-block bg-[#111111] px-6 py-3 font-bold text-white">Back home</Link>
      </section>
    </main>
  );
}
