'use client';

import { useState } from "react";
import DemoExamples from "./DemoExamples";
import ScamAnalyzer from "./ScamAnalyzer";

const DemoExamplesAndResult = () => {

    const [selectedExample, setSelectedExample] = useState(0);

    return (
        <div className="bg-gradient-to-b from-white to-gray-50">
            <DemoExamples selectedExample={selectedExample} setSelectedExample={setSelectedExample} />
            <ScamAnalyzer selectedExample={selectedExample} setSelectedExample={setSelectedExample} />
        </div>
    )
}

export default DemoExamplesAndResult;