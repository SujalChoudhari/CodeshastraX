"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RE9aKFWJga1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"

export default function querygraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
            <div className="text-4xl">
            Query Time Graph
            </div></CardTitle>
        <CardDescription>The performance of the web application over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart className="aspect-[2/1]" />
      </CardContent>
    </Card>
  )
}

function LineChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Time in ms",
            data: [
              { x: "05:00", y: 3673.23 },
              { x: "05:03", y: 3468 },
              { x: "05:06", y: 2933.9 },
              { x: "05:09", y: 2987.32 },
              { x: "05:12", y: 3478.832 },
              { x: "05:15", y: 2948.62 },
              { x: "05:18", y: 3673.23 },
              { x: "05:21", y: 3168.43 },
              { x: "05:24", y: 2933.9 },
              { x: "05:27", y: 2187.32 },
              { x: "05:30", y: 2978.832 },
              { x: "05:33", y: 2948.62 },

            ],
          },
        ]}
        margin={{ top: 100, right: 101, bottom: 100, left: 101}}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
