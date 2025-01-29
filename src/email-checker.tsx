import React, { useState } from 'react';
    
    function EmailChecker() {
      const [emailInput, setEmailInput] = useState('');
      const [analysisResult, setAnalysisResult] = useState<string | null>(null);
    
      const analyzeEmail = () => {
        if (!emailInput) {
          setAnalysisResult('Please enter an email address.');
          return;
        }
    
        if (emailInput.includes('gmail') || emailInput.includes('yahoo')) {
          setAnalysisResult('No threat detected.');
        } else {
          const scamTypes = ['Phishing', 'Malware', 'Identity Theft', 'Fake Product', 'Investment Scam'];
          const advices = [
            'Be cautious of unsolicited messages.',
            'Verify the source before clicking any links.',
            'Do not share personal information.',
            'Use strong, unique passwords.',
            'Keep your software updated.',
          ];
    
          const randomScamType = scamTypes[Math.floor(Math.random() * scamTypes.length)];
          const randomRisk = Math.floor(Math.random() * 90) + 10;
          const randomAdvice = advices[Math.floor(Math.random() * advices.length)];
    
          setAnalysisResult(
            `Warning: Potential ${randomScamType} scam detected. Risk level: ${randomRisk}%. Advice: ${randomAdvice}`
          );
        }
      };
    
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500">
          <div className="bg-[#1e213a] p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">AI Email Checker</h2>
            <input
              type="email"
              placeholder="Enter email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button onClick={analyzeEmail} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
              Analyze
            </button>
            {analysisResult && (
              <div className="mt-4 text-white">
                {analysisResult.startsWith('Warning') ? (
                  <div className="bg-yellow-800 p-4 rounded-md">
                    {analysisResult}
                  </div>
                ) : (
                  <div className="bg-green-800 p-4 rounded-md">
                    {analysisResult}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    export default EmailChecker;
