import React from 'react'
import ChooseUsHeader from './components/choose-us-header'
import ChooseUsBody from './components/choose-us-body'
import CustomOrderInquiry from './components/choose-order-inquery'

export default function ChooseUs() {
  return (
    <div className='py-8 md:py-12 xl:py-16'>
      <ChooseUsHeader/>
      <ChooseUsBody/>
      <CustomOrderInquiry />
    </div>
  )
}
