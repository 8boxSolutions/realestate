"use client"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
const chartData = [
  { month: "September", desktop: 186, mobile: 80 },
  { month: "October", desktop: 305, mobile: 200 },
  { month: "November", desktop: 237, mobile: 120 },
  { month: "December", desktop: 73, mobile: 190 },
  { month: "January", desktop: 209, mobile: 130 },
  { month: "February", desktop: 214, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
} satisfies ChartConfig
export function PropertyChart() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-80">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
