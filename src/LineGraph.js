import React,{useState,useEffect} from 'react'
import { Line } from "react-chartjs-2";
import { get } from './network/axios'
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};



function LineGraph({caseType='cases'}) {
    const [data, setData] = useState([])
    useEffect(() => {
       buildChartData(caseType)
    }, [caseType])
    const buildChartData = async (caseType = "cases") => {
        let chartData = []
        let lastDataPoint;
        
            try
            {
            let data = await get('v3/covid-19/historical/all?lastdays=30')
                for (let date in data[caseType])
                {
                    if (lastDataPoint)
                    {
                    let newDataPoint = {
                        x: date,
                        y: data[caseType][date] -  lastDataPoint
                        
                    }
                    chartData.push(newDataPoint)
                    }
                
                    lastDataPoint = data[caseType][date]
                }
                console.log(chartData)
                    setData(chartData)
                return chartData
            } catch (e)
            {
                
            }

    }
  
  

    return (
        <div>
            <div style={{height:300}}>
                <Line
                options={options}
            data={{
                datasets: [
                {
                    label: "World wide Chart",
                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                    data: data,
                },
                ],
            }}

            />
          

                </div>
        </div>
    )
}

export default LineGraph
