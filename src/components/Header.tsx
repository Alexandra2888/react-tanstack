import { Link } from '@tanstack/react-router'

import ClerkHeader from '../integrations/clerk/header-user'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/clerk">Clerk</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/tanstack-query">TanStack Query</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/table">TanStack Table</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/demo/new-hello">New Hello Route</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/hello">Hello</Link>
        </div>
      </nav>

      <div>
        <ClerkHeader />
      </div>
    </header>
  )
}
