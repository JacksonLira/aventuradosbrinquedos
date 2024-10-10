import React from 'react'

import PerfilPhoto from './Perfilphoto'

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
  return (
    <div>
      <div className="grid grid-flow-col gap-x-2 bg-[#014d70] text-white rounded-lg ">
        <div className="bg-[#e30010] rounded rounded-lg rounded-r ">
          <h3 className="text-sm mb-5 font-semibold text-white bg-transparent p-5 ">
            <PerfilPhoto />
            {question}
          </h3>
        </div>

        <p className="text-white mt-2 p-5">{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
