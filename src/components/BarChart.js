import React, {useEffect} from 'react';
import {Bar} from 'react-chartjs-2';


export default function BarChart(props) {

  let data = {

    labels: [],
    datasets: [
      {
        label: 'Focus Time',
        backgroundColor: 'rgba(59, 247, 197,0.2)',
        borderColor: 'rgba(59, 247, 197,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  
  useEffect(() => {

    const dates = [...Array(7)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d
    })

  }, [props])


  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={120}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );

}