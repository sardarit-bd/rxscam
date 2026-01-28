'use client';

import { useRef, useState } from "react";
import DemoExamples from "./DemoExamples";
import ScamAnalyzer from "./ScamAnalyzer";

const DemoExamplesAndResult = () => {

    const [selectedExample, setSelectedExample] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isSafe, setIsSafe] = useState(false);
    const resultRef = useRef(null);

    return (
        <div className="bg-gradient-to-b from-white to-gray-50">
            <DemoExamples selectedExample={selectedExample} setSelectedExample={setSelectedExample} isAnalyzing={isAnalyzing} setIsAnalyzing={setIsAnalyzing} showResult={showResult} setShowResult={setShowResult} isSafe={isSafe} setIsSafe={setIsSafe} resultRef={resultRef} />
            <ScamAnalyzer selectedExample={selectedExample} setSelectedExample={setSelectedExample} isAnalyzing={isAnalyzing} setIsAnalyzing={setIsAnalyzing} showResult={showResult} setShowResult={setShowResult} isSafe={isSafe} setIsSafe={setIsSafe} resultRef={resultRef} />
        </div>
    )
}

export default DemoExamplesAndResult;