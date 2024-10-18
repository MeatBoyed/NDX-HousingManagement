import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"
import {
  AlertCircle,
  ChevronRight,
  DoorClosed,
  Mail,
  Phone,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Student = {
  id: number
  name: string
  email: string
  phone: string
  room: string
  avatarUrl: string
  outstandingErrors: number
}

const sampleStudents: Student[] = [
  {
    id: 1,
    name: "Sipho Nkosi",
    email: "sipho.nkosi@example.com",
    phone: "072-345-6789",
    room: "A101",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    outstandingErrors: 2,
  },
  {
    id: 2,
    name: "Thandiwe Mthembu",
    email: "thandiwe.mthembu@example.com",
    phone: "083-456-7890",
    room: "B202",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    outstandingErrors: 1,
  },
  {
    id: 3,
    name: "Lerato Khumalo",
    email: "lerato.khumalo@example.com",
    phone: "011-222-3333",
    room: "C303",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    outstandingErrors: 0,
  },
  {
    id: 4,
    name: "Teboho Molefe",
    email: "teboho.molefe@example.com",
    phone: "071-555-6666",
    room: "D404",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    outstandingErrors: 3,
  },
  {
    id: 5,
    name: "Zanele Dlamini",
    email: "zanele.dlamini@example.com",
    phone: "060-777-8888",
    room: "E505",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    outstandingErrors: 0,
  },
]
export default function StudentRender() {
  //   const filteredStudents = sampleStudents.filter(
  //     (student) =>
  //       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       student.email.toLowerCase().includes(searchTerm.toLowerCase())
  //   )

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sampleStudents.map((student) => (
        <StudentCard student={student} />
      ))}
    </div>
  )
}

function StudentCard({ student }: { student: Student }) {
  return (
    <Card
      key={student.id}
      className="overflow-hidden rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <CardContent className="flex h-full w-full flex-col items-center justify-between p-6">
        <div className="mb-4 flex w-full items-center space-x-4">
          <Avatar className="h-12 w-12 rounded-full">
            <AvatarImage src={student.avatarUrl} alt={student.name} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h2 className="text-lg font-semibold text-gray-900">
              {student.name}
            </h2>
            <p className="text-sm text-gray-500">{student.room}</p>
          </div>
          {student.outstandingErrors > 0 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant="destructive"
                  className="flex cursor-help items-center border-0 bg-red-100 text-red-800"
                >
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {student.outstandingErrors}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {student.outstandingErrors} outstanding issue
                  {student.outstandingErrors > 1 ? "s" : ""}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className="mb-4 w-full space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="mr-2 h-4 w-4 text-gray-400" />
            {student.email}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="mr-2 h-4 w-4 text-gray-400" />
            {student.phone}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DoorClosed className="mr-2 h-4 w-4 text-gray-400" />
            Room {student.room}
          </div>
        </div>
        <Link href="/student" className="w-full">
          <Button className="w-full justify-between" variant="default">
            View Student
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
