import { ColorType, createChart } from "lightweight-charts"
import { useEffect, useRef } from "react"

export const ChartComponent = (props: {
  data: { time: string; value: number }[]
  colors?: Record<string, string>
}) => {
  const {
    data,

    colors: {
      backgroundColor = "black",
      lineColor = "#2962FF",
      textColor = "white",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props

  const chartContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth })
    }

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current?.clientWidth,
      height: 300,
    })
    chart.timeScale().fitContent()

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    })
    newSeries.setData(data)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      chart.remove()
    }
  }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])

  return <div style={{ width: "100%" }} ref={chartContainerRef} />
}
