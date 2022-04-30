import React from 'react'

//Component for displaying array values
const ArrayValues: React.FC<IProps> = (props: any) => {
  return (
    <div>
      <table>
        <tr>
          <td>name:{props.datas.name}</td>
        </tr>
        <tr>
          <td>date of birth:{props.datas.name}</td>
        </tr>
      </table>
    </div>
  )
}

export default ArrayValues

interface IProps {
  datas: {
    name: string;
    birthday: string;
  }
}