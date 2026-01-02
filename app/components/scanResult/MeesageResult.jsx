import { CampaignIntelligence } from "./campaign-intelligence"
import { ContentAnalysis } from "./content-analysis"
import { DangerBanner } from "./danger-banner"
import { EmailAuthentication } from "./email-authentication"
import { IfYouClicked } from "./if-you-clicked"
import { Overview } from "./overview"
import { PostIncidentButton } from "./post-incident-button"
import { ProtectionStatus } from "./protection-status"
import { RedFlags } from "./red-flags"
import { RedFlagsWatch } from "./red-flags-watch"
import { RiskAssessment } from "./risk-assessment"
import { RiskScoreBreakdown } from "./risk-score-breakdown"
import { ScamClassification } from "./scam-classification"
import { ScamWorks } from "./scam-works"
import { ScanHubButton } from "./scan-hub-button"
import { ScannedMessage } from "./scanned-message"
import { TechnicalDetails } from "./technical-details"
import { ThreatAnalysis } from "./threat-analysis"
import { WhatToDoNext } from "./what-to-do-next"


const MessageResult = ({ message }) => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <DangerBanner />

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <ThreatAnalysis />
                        <RiskAssessment />
                        <Overview />
                        <RedFlags />
                        <TechnicalDetails />
                        <EmailAuthentication />
                        <ContentAnalysis />
                        <CampaignIntelligence />
                        <RiskScoreBreakdown />
                        <WhatToDoNext />
                        <IfYouClicked />
                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="lg:col-span-1 space-y-4">
                        <ScannedMessage />
                        <ScamClassification />
                        <ScamWorks />
                        <RedFlagsWatch />
                        <ScanHubButton />
                        <ProtectionStatus />
                        <PostIncidentButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageResult;