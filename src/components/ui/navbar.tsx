export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <a className="p-2" href="/">
        Home
      </a>
      <a className="p-2" href="/login">
        Login
      </a>
      <a className="p-2" href="/signup">
        Signup
      </a>
      <a className="p-2" href="/dashboard">
        Dashboard
      </a>
    </nav>
  );
}
