'use client'

import BankAlertInput from './BankAlertInput ';
import PackageDeliveryInput from './PackageDeliveryInput';
import SuspiciousMessage from './SuspiciousMessage';

export default function ScamAnalyzer({ selectedExample, setSelectedExample, isAnalyzing, setIsAnalyzing, showResult, setShowResult, isSafe, setIsSafe, resultRef }) {

  return (
    <div ref={resultRef} className='pt-0 pb-16'>
      {
        selectedExample === 0 ? (
          <SuspiciousMessage selectedExample={selectedExample} isAnalyzing={isAnalyzing} setIsAnalyzing={setIsAnalyzing} showResult={showResult} setShowResult={setShowResult} isSafe={isSafe} setIsSafe={setIsSafe} />
        ) : selectedExample === 1 ?
          (
            <PackageDeliveryInput selectedExample={selectedExample} isAnalyzing={isAnalyzing} setIsAnalyzing={setIsAnalyzing} showResult={showResult} setShowResult={setShowResult} isSafe={isSafe} setIsSafe={setIsSafe} />
          ) : (
            <BankAlertInput selectedExample={selectedExample} isAnalyzing={isAnalyzing} setIsAnalyzing={setIsAnalyzing} showResult={showResult} setShowResult={setShowResult} isSafe={isSafe} setIsSafe={setIsSafe} />
          )
      }
    </div>
  )
}