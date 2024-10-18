import Link from "next/link"

function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-gray-900">
            Student Management
          </h1>
        </Link>
        {/* {isMobile && (
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <Menu className="h-6 w-6" />
                </Button>
              )} */}
      </div>
    </header>
  )
}

export default Navbar
