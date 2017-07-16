import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={140} width={200} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}