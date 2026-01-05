'use client'

import BankAlertInput from './BankAlertInput ';
import PackageDeliveryInput from './PackageDeliveryInput';
import SuspiciousMessage from './SuspiciousMessage';

export default function ScamAnalyzer({ selectedExample, setSelectedExample }) {

  return (
    <div className='pt-8 pb-16'>
      {
        selectedExample === 0 ?
          <SuspiciousMessage /> :
          selectedExample === 1 ?
            <PackageDeliveryInput /> : <BankAlertInput />
      }
    </div>
  )
}