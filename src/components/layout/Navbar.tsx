import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-center gap-10 py-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/courses'}>Courses</Link>
        <Link href={'/about'}>About</Link>
      </nav>
    </header>
  );
}
