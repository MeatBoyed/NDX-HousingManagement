"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { TooltipProvider } from "@/components/ui/tooltip"

import StudentRender from "./(components)/StudentsRender"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <TooltipProvider>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <Input
              className="rounded-lg border-0 bg-white pl-10 shadow-sm"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Student Cards */}
        <StudentRender />
      </div>
    </TooltipProvider>
  )
}
