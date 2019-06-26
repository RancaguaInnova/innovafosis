import { Area, AreaChart, CartesianGrid, Label, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import React, { PureComponent } from 'react'

const data = [
  {
    name: 'Lunes',
    Ayuda: 2,
    Carabineros: 3,
    RedApoyo: 4
  },
  {
    name: 'Martes',
    Ayuda: 2,
    Carabineros: 3,
    RedApoyo: 4
  },
  {
    name: 'Miercoles',
    Ayuda: 12,
    Carabineros: 3,
    RedApoyo: 14
  },
  {
    name: 'Jueves',
    Ayuda: 21,
    Carabineros: 3,
    RedApoyo: 9
  },
  {
    name: 'Viernes',
    Ayuda: 1,
    Carabineros: 10,
    RedApoyo: 4
  },
  {
    name: 'Sabado',
    Ayuda: 9,
    Carabineros: 3,
    RedApoyo: 7
  },
  {
    name: 'Domingo',
    Ayuda: 2,
    Carabineros: 9,
    RedApoyo: 4
  }
]

export default class ChartMonth extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/'

  render() {
    return (
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area dataKey='Ayuda' stackId='1' stroke='#3886FF' fill='#3886FF' />
        <Area dataKey='Carabineros' stackId='1' stroke='#EAFF38' fill='#19DF28' />
        <Area dataKey='RedApoyo' stackId='1' stroke='#4F4D4D' fill='#4F4D4D' />
        <Legend verticalAlign='top' height={36} />
      </AreaChart>
    )
  }
}
