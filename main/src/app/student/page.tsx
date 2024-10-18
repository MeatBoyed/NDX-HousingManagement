"use client"

import { useState } from "react"
import {
  AlertCircle,
  Book,
  Calendar,
  ChevronLeft,
  CreditCard,
  DoorClosed,
  Download,
  Eye,
  FileText,
  Flag,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const studentData = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
  room: "A101",
  avatarUrl: "https://i.pravatar.cc/150?img=1",
  outstandingErrors: 3,
  dateOfBirth: "1999-05-15",
  course: "Computer Science",
  year: "3rd Year",
  studentId: "CS20210001",
  emergencyContact: "Jane Doe (Mother) - 987-654-3210",
  accommodationDetails: "Single Room, Shared Bathroom",
  leaseStart: "2023-09-01",
  leaseEnd: "2024-06-30",
  mealPlan: "Full Board",
  balance: "$250.00",
  recentTransactions: [
    { date: "2023-05-01", description: "May Rent", amount: "-$800.00" },
    { date: "2023-04-28", description: "Laundry Credit", amount: "-$20.00" },
    { date: "2023-04-15", description: "Payment Received", amount: "+$820.00" },
  ],
  maintenanceRequests: [
    {
      date: "2023-04-20",
      description: "Leaky faucet in bathroom",
      status: "In Progress",
    },
    {
      date: "2023-03-15",
      description: "Light bulb replacement",
      status: "Completed",
    },
  ],
  documents: [
    {
      id: 1,
      name: "ID Copy",
      type: "pdf",
      uploadDate: "2023-03-01",
      fileSize: "1.2 MB",
      hasIssue: false,
    },
    {
      id: 2,
      name: "Latest Payslip",
      type: "pdf",
      uploadDate: "2023-04-15",
      fileSize: "856 KB",
      hasIssue: true,
    },
    {
      id: 3,
      name: "Rental Agreement",
      type: "pdf",
      uploadDate: "2023-02-28",
      fileSize: "2.1 MB",
      hasIssue: false,
    },
    {
      id: 4,
      name: "Proof of Enrollment",
      type: "pdf",
      uploadDate: "2023-03-05",
      fileSize: "1.5 MB",
      hasIssue: false,
    },
  ],
}

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState("overview")
  const [documents, setDocuments] = useState(studentData.documents)

  const raiseIssue = (documentId: number, issueDescription: string) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === documentId ? { ...doc, hasIssue: true } : doc
      )
    )
    // Here you would typically also send this information to your backend
    console.log(`Issue raised for document ${documentId}: ${issueDescription}`)
  }

  return (
    <TooltipProvider>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <Card className="mb-6 overflow-hidden rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-x-4 space-y-4 text-center md:flex-row md:text-start">
              <Avatar className="h-20 w-20 rounded-full">
                <AvatarImage
                  src={studentData.avatarUrl}
                  alt={studentData.name}
                />
                <AvatarFallback>{studentData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {studentData.name}
                </h1>
                <p className="text-sm text-gray-500">
                  {studentData.studentId} - {studentData.course},{" "}
                  {studentData.year}
                </p>
              </div>
              <div className="flex  items-center justify-center gap-4">
                {studentData.outstandingErrors > 0 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="destructive"
                        className="flex cursor-help items-center border-0 bg-red-100 text-red-800"
                      >
                        <AlertCircle className="mr-1 h-4 w-4" />
                        {studentData.outstandingErrors}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {studentData.outstandingErrors} outstanding issue
                        {studentData.outstandingErrors > 1 ? "s" : ""}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="rounded-lg border-0 bg-white p-1 shadow-sm">
            <TabsTrigger value="overview" className="rounded-md">
              Overview
            </TabsTrigger>
            {/* <TabsTrigger value="financial" className="rounded-md">
              Financial
            </TabsTrigger> */}
            <TabsTrigger value="documents" className="rounded-md">
              Documents
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="rounded-md">
              Maintenance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className="rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="mr-2 h-4 w-4 text-gray-400" />
                    {studentData.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="mr-2 h-4 w-4 text-gray-400" />
                    {studentData.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DoorClosed className="mr-2 h-4 w-4 text-gray-400" />
                    Room {studentData.room}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    DOB: {studentData.dateOfBirth}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Book className="mr-2 h-4 w-4 text-gray-400" />
                    {studentData.course}, {studentData.year}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="mb-2 text-lg font-semibold">
                    Emergency Contact
                  </h3>
                  <p className="text-sm text-gray-600">
                    {studentData.emergencyContact}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="mb-2 text-lg font-semibold">
                    Accommodation Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    {studentData.accommodationDetails}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Lease: {studentData.leaseStart} to {studentData.leaseEnd}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Meal Plan: {studentData.mealPlan}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* <TabsContent value="financial">
            <Card className="rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle>Financial Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Current Balance</span>
                  <span className="text-2xl font-bold text-green-600">
                    {studentData.balance}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="mb-2 text-lg font-semibold">
                    Recent Transactions
                  </h3>
                  <ul className="space-y-2">
                    {studentData.recentTransactions.map(
                      (transaction, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span>
                            {transaction.date} - {transaction.description}
                          </span>
                          <span
                            className={
                              transaction.amount.startsWith("-")
                                ? "text-red-600"
                                : "text-green-600"
                            }
                          >
                            {transaction.amount}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}
          <TabsContent value="maintenance">
            <Card className="rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle>Maintenance Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {studentData.maintenanceRequests.map((request, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 pb-2"
                  >
                    <div>
                      <p className="font-semibold">{request.description}</p>
                      <p className="text-sm text-gray-500">{request.date}</p>
                    </div>
                    <Badge
                      variant={
                        request.status === "Completed" ? "default" : "secondary"
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                ))}
                {/* <Button className="w-full">Submit New Request</Button> */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card className="rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle>Uploaded Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((document, index) => (
                    <FileCard key={index} document={document} />
                  ))}
                </div>
                <Button className="mt-4 w-full">Upload New Document</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  )
}

function FileCard({
  document,
}: {
  document: {
    id: number
    name: string
    type: string
    uploadDate: string
    fileSize: string
    hasIssue: boolean
  }
}) {
  return (
    <div
      key={document.id}
      className="flex w-full flex-col items-start justify-between space-y-4 rounded-lg bg-gray-50 p-3 md:flex-row"
    >
      <div className="flex w-full items-center space-x-3">
        <FileText className="h-6 w-6 text-blue-500" />
        <div>
          <p className="font-medium">{document.name}</p>
          <p className="text-sm text-gray-500">
            Uploaded on {document.uploadDate} • {document.fileSize}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 md:w-fit md:flex-row">
        <Button className="w-full gap-2" variant="outline" size="sm">
          <Eye className="h-4 w-4" />
          View
        </Button>
        <Button className="w-full gap-2" variant="outline" size="sm">
          <Download className=" h-4 w-4" />
          Download
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full gap-2"
              variant={document.hasIssue ? "destructive" : "outline"}
              size="sm"
            >
              <Flag className="h-4 w-4" />
              {document.hasIssue ? "Issue Raised" : "Raise Issue"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Raise Issue for {document.name}</DialogTitle>
              <DialogDescription>
                Describe the issue with this document. This will be flagged for
                review.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start justify-center gap-4">
                <Label htmlFor="issue" className="text-right">
                  Message (optional)
                </Label>
                <Textarea
                  id="issue"
                  className="col-span-3"
                  placeholder="Describe the issue here..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={() =>
                  // raiseIssue(document.id, "Sample issue description")
                  toast.success("Issue raised successfully!")
                }
              >
                Raise Issue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
