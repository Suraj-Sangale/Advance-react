import React from 'react'

function InputTextField({handleChangeCity,city}) {
  return (
    <div><input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cityName" type="text"
    value={city} onChange={handleChangeCity} placeholder="Enter City Name" /></div>
  )
}

export default InputTextField