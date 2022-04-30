import React from 'react'
import Array from './Array.json';
import Calender from './Calender';
import ArrayValues from './ArrayValues';

const Display = () => {
  return (
    <div>

      {/* maping the given json array of objects */}
      {
        Array.map((user) => (
          <ArrayValues datas={user} />
        ))
      }

      {/* filtering the given json array of objects */}
      {
        Array.filter((user) => (
          <ArrayValues datas={user} />
        ))
      }

    </div>
  )
}

export default Display