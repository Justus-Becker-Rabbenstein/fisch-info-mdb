import Link from 'next/link'

const Header = () => {
  return (
    <div class="container">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <Link href="/" className="nav-link">HOME</Link>
        </li>
        <li class="nav-item active">
          <Link href="/Get" className="nav-link">GET</Link>
        </li>
        <li class="nav-item active">
          <Link href="/Post" className="nav-link">POST</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Header