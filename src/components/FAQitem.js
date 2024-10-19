import React from 'react'

import PerfilPhoto from './Perfilphoto'

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
  return (
    <div>
      <div className="grid grid-flow-col gap-x-2 bg-[#014d70] text-white rounded-lg h-48">
        <div className="bg-[#e30010] rounded rounded-l-4 rounded-t-4 rounded-lg rounded-r h-48 w-48 ">
          <h3 className="text-sm font-bold w-52 font-semibold text-white bg-transparent p-8  ">
            <PerfilPhoto />
            {question}
          </h3>
        </div>

        <p className="text-sm p-2 mt-3 flex">{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
