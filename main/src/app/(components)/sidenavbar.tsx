"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, LogOut, Menu, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SideNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const navlinks = [
    { icon: Home, label: "Dashboard", isActive: true },
    { icon: UserPlus, label: "Add Student" },
    // { icon: Tool, label: "Maintenance Requests" },
    { icon: LogOut, label: "Logout" },
  ]

  return (
    <aside
      className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-64 " : "h-fit w-16 border-b shadow-none"
      } ${isMobile ? "" : "hover:w-64"}`}
      onMouseEnter={() => !isMobile && setIsSidebarOpen(true)}
      onMouseLeave={() => !isMobile && setIsSidebarOpen(false)}
    >
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && (
          <h2 className="text-2xl font-bold text-gray-800">AccommoDate</h2>
        )}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        )}
      </div>
      <nav className="mt-6">
        {!isSidebarOpen &&
          !isMobile &&
          navlinks.map((item, index) => (
            <Link
              href="#"
              key={index}
              className={`flex items-center px-4 py-3 text-gray-700 ${
                item.isActive ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <item.icon className={"h-5 w-5"} />
            </Link>
          ))}
        {isSidebarOpen &&
          navlinks.map((item, index) => (
            <a
              key={index}
              className={`flex items-center px-4 py-3 text-gray-700 ${
                item.isActive ? "bg-gray-100" : "hover:bg-gray-50"
              } ${index > 0 ? "mt-1" : ""} `}
              href="#"
            >
              <item.icon
                className={`h-5 w-5 ${isSidebarOpen ? "opacity-100" : "opacity-100"} }`}
              />
              <span
                className={`ml-3 ${isSidebarOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
              >
                {item.label}
              </span>
            </a>
          ))}
      </nav>
    </aside>
  )
}
