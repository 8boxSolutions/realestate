"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

function PropertyCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="inline-flex justify-between w-full items-center px-13 pt-5">
        <h1 className="text-left text-2xl">Calendar</h1>
        <p className="text-red-500 cursor-pointer">View All</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-100 mb-10"
          captionLayout="dropdown"
        />
      </div>
    </>
  )
}

export default PropertyCalendar;