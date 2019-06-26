import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
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

export default class ChartDayEvent extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name'>
              <Label value='Eventos Semanales' position='insideBottom' offset={-10} />
            </XAxis>
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Area type='monotone' dataKey='Ayuda' stroke='#4123BC' fill='#4123BC' />
            <Bar dataKey='Carabineros' barSize={20} fill='#F1EE1A' />
            <Line type='monotone' dataKey='RedApoyo' stroke='#23D6A8' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
