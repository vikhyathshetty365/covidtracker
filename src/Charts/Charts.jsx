

import './Charts.css'
import { countrystats } from '../api'
import { useEffect } from 'react'
import { useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import './Charts.css'
import { getdailydata } from '../api'

const Charts = (props) => {
  const country = props.Country
  const { data: { confirmed, recovered, deaths } } = props

  console.log(props)


  const [dailydata, setdailydata] = useState([])

  useEffect(() => {

    const fetchdailydata = async () => {
      const dailydata = await getdailydata()
      setdailydata(dailydata)
      console.log(dailydata)


    }

    fetchdailydata()


  }, [])




  if (!confirmed)
    return 'Loading...'
  //console.log(props)

  const state = {
    labels: ['Confirmed', 'Recovered', 'Deaths'],
    datasets: [
      {

        backgroundColor: ['rgb(8, 12, 211,0.4)', 'rgb(14, 241, 63,0.4)', ' rgba(243, 10, 10, 0.4)'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [confirmed.value, recovered.value, deaths.value]
      }
    ]
  }


  const line = (

    dailydata[0] ? (
      <Line
        data={{
          labels: dailydata.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailydata.map((data) => data.positive),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }
          ],
        }}
      />
    ) : null


  );


  const bar = (
    confirmed ? (
      <Bar
        data={state}

      />



    ) : null


  );




  return (

    <div className="chartmaindiv">
      {country ? bar : null}




    </div>
  )
}
export default Charts