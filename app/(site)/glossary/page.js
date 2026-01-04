"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import GlossaryCard from "../../components/GlossaryCard";
import JumpSidebar from "../../components/JumpSidebar";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");

  const glossaryData = [
    {
      letter: "A",
      title: "Advance Fee Fraud",
      subtitle: "Payment demanded before receiving promised goods or services",
      description:
        "A scam where victims are asked to pay money upfront with the promise of receiving something of greater value later.",
    },
    {
      letter: "B",
      title: "Business Email Compromise (BEC)",
      subtitle: "Impersonation of company executives or partners",
      description:
        "A sophisticated scam targeting businesses where attackers impersonate executives or vendors.",
    },
    {
      letter: "C",
      title: "Catfishing",
      subtitle: "Creating fake online identities to deceive others",
      description:
        "The practice of creating a fictitious online persona to deceive someone into a relationship.",
    },
    {
      letter: "C",
      title: "CEO Fraud",
      subtitle: "Impersonating company leadership",
      description:
        "A type of business email compromise where scammers impersonate a CEO or executive to authorize fraudulent wire transfers or request sensitive information.",
    },
    {
      letter: "D",
      title: "Domain Spoofing",
      subtitle: "Fake email addresses that look legitimate",
      description:
        "Creating email addresses or websites that closely resemble legitimate ones.",
    },
    {
      letter: "E",
      title: "Email Phishing",
      subtitle: "Fraudulent emails designed to steal information",
      description:
        "Scammers pose as government officials, tech support, bank representatives, or family members to gain trust and extract money or information.",
    },
    {
      letter: "I",
      title: "Impersonation Scam",
      subtitle: "Pretending to be someone trustworthy",
      description:
        "Creating email addresses or websites that closely resemble legitimate ones.",
    },
    {
      letter: "M",
      title: "Malware",
      subtitle: "Malicious software that damages or infiltrates sys",
      description:
        "Software designed to harm, exploit, or otherwise compromise a computer system. Can include viruses, ransomware, spyware, and trojans.",
    },
    {
      letter: "P",
      title: "Pharming",
      subtitle: "Redirecting users to fake websites",
      description:
        "A cyber attack that redirects website traffic from legitimate sites to fraudulent ones without the user's knowledge, often to steal login credentials.",
    },
    {
      letter: "P",
      title: "Phishing",
      subtitle: "Fraudulent attempt to obtain sensitive information",
      description:
        "A technique used by scammers to trick individuals into providing sensitive data by masquerading as a trustworthy entity in electronic communication.",
    },
    {
      letter: "R",
      title: "Ransomware",
      subtitle: "Malware that locks your files for ransom",
      description:
        "A type of malware that encrypts a victim's files and demands payment (usually in cryptocurrency) to restore access.",
    },
    {
      letter: "R",
      title: "Romance Scam",
      subtitle: "Fake romantic relationships for financial gain",
      description:
        "Scammers create fake profiles on dating sites or social media to establish romantic relationships, then request money for various fabricated emergencies.",
    },
    {
      letter: "R",
      title: "Ransomware",
      subtitle: "Malware that locks your files for ransom",
      description:
        "A type of malware that encrypts a victim's files and demands payment (usually in cryptocurrency) to restore access.",
    },
    {
      letter: "R",
      title: "Ransomware",
      subtitle: "Malware that locks your files for ransom",
      description:
        "A type of malware that encrypts a victim's files and demands payment (usually in cryptocurrency) to restore access.",
    },
    {
      letter: "R",
      title: "Ransomware",
      subtitle: "Malware that locks your files for ransom",
      description:
        "A type of malware that encrypts a victim's files and demands payment (usually in cryptocurrency) to restore access.",
    },
  ];


  // Search filter
  const filtered = glossaryData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Group by letter
  const groupedData = filtered.reduce((acc, item) => {
    if (!acc[item.letter]) acc[item.letter] = [];
    acc[item.letter].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Scam & Security Glossary
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Understand common scam terms and protect yourself from fraud
          </p>

          <div className="relative max-w-2xl mx-auto mt-10">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a term..."
              className="w-full pl-10 pr-4 text-gray-400 py-3 text-sm border-2 border-gray-200 rounded-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <JumpSidebar />

          <div className="md:col-span-3 space-y-14">

            {Object.entries(groupedData).map(([letter, items]) => (
              <div key={letter} id={`letter-${letter}`}>

                {/* Letter header */}
                <div className="flex items-center mb-6">
                  <span className="w-9 h-9 flex items-center justify-center rounded-xl pbg text-white font-semibold">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Cards */}
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <GlossaryCard key={index} {...item} />
                  ))}
                </div>

                {/* Divider between letter sections */}
                {/* <div className="border-t border-gray-200 mt-12"></div> */}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
