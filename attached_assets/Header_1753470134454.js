import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow">
      <nav className="flex justify-between p-4">
        <div className="text-red-600 font-bold text-xl">Medcare Dwarka</div>
        <div>
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/about" className="mx-2">About</Link>
          <Link href="/team" className="mx-2">Team</Link>
          <Link href="/services/laser" className="mx-2">Services</Link>
          <Link href="/smile-analysis" className="mx-2">Smile Analysis</Link>
          <Link href="/tourism" className="mx-2">Tourism</Link>
          <Link href="/contact" className="mx-2">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
