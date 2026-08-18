import React from 'react'
import ChooseUsHeader from './components/choose-us-header'
import ChooseUsBody from './components/choose-us-body'
import CustomOrderInquiry from './components/choose-order-inquery'

export default function ChooseUs() {
  return (
    <div className='space-y-4 md:space-y-9 xl:space-y-7.5 1xl:space-y-9.25 3xl:space-y-11.75 py-8 md:py-12 xl:py-16'>
      
      <ChooseUsHeader/>
      <ChooseUsBody/>
      <CustomOrderInquiry />
    </div>
  )
}
