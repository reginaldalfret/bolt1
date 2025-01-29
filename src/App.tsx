import React, { useState } from 'react';
    import {
      Shield, MessageSquare, Image, Mail, Globe, Phone, Layout, Search,
      Home, AlertTriangle, Flag, MessageCircle, BarChart2, Award, HelpCircle,
      Share2, FileText, Users, ShoppingBag, Wallet, Briefcase, ScanLine,
      Bell, BookOpen, Lightbulb, Moon, Sun, Languages, FileText as Mobile,
      Settings, TrendingUp, HandshakeIcon, MessageCircleWarning, Mic, Brain,
      FileText as FileInvoice, Shield as ShieldIcon, ImageOff, LayoutDashboard,
      Map, Key, Trophy, Database, Video, BookOpenCheck, Vote, Bot, Activity,
      Zap, Wrench, LineChart, BrainCircuit
    } from 'lucide-react';
    
    function App() {
      const [isDarkMode, setIsDarkMode] = useState(true);
      const [searchQuery, setSearchQuery] = useState('');
      const [activeTab, setActiveTab] = useState('tools');
      const [imageFile, setImageFile] = useState<File | null>(null);
      const [websiteInput, setWebsiteInput] = useState('');
      const [analysisResult, setAnalysisResult] = useState<string | null>(null);
      const [imageAnalysisResult, setImageAnalysisResult] = useState<string | null>(null);
      const [websiteAnalysisResult, setWebsiteAnalysisResult] = useState<string | null>(null);
    
      const tools = [
        { id: 1, name: 'AI Text Message Checker', icon: MessageSquare, colorClass: 'bg-blue-500' },
        { id: 2, name: 'AI Image Analysis', icon: Image, colorClass: 'bg-purple-500' },
        { id: 3, name: 'AI Email Checker', icon: Mail, colorClass: 'bg-amber-500' },
        { id: 4, name: 'AI Website Checker', icon: Globe, colorClass: 'bg-emerald-500' },
        { id: 5, name: 'AI Phone Number Checker', icon: Phone, colorClass: 'bg-rose-500' },
        { id: 6, name: 'AI App Checker', icon: Layout, colorClass: 'bg-indigo-500' },
        { id: 7, name: 'AI Document Checker', icon: FileText, colorClass: 'bg-cyan-500' },
        { id: 8, name: 'AI Social Media Profile Checker', icon: Users, colorClass: 'bg-fuchsia-500' },
        { id: 9, name: 'AI Shopping Site Validator', icon: ShoppingBag, colorClass: 'bg-pink-500' },
        { id: 10, name: 'AI Crypto Wallet Address Checker', icon: Wallet, colorClass: 'bg-orange-500' },
        { id: 11, name: 'AI Job Offer Checker', icon: Briefcase, colorClass: 'bg-teal-500' },
        { id: 12, name: 'AI QR Code Scanner', icon: ScanLine, colorClass: 'bg-violet-500' },
        { id: 13, name: 'AI Voice Call Analyzer', icon: Mic, colorClass: 'bg-red-500' },
        { id: 14, name: 'AI Behavioral Patterns Detector', icon: Brain, colorClass: 'bg-lime-500' },
        { id: 15, name: 'AI Invoice Checker', icon: FileInvoice, colorClass: 'bg-sky-500' },
        { id: 16, name: 'AI Malware Detection', icon: ShieldIcon, colorClass: 'bg-yellow-500' },
        { id: 17, name: 'Reverse Image Search', icon: ImageOff, colorClass: 'bg-blue-400' },
        { id: 18, name: 'Credential Breach Checker', icon: Key, colorClass: 'bg-purple-400' }
      ];
    
      const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setImageFile(e.target.files[0]);
          setImageAnalysisResult(null);
        }
      };
    
      const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWebsiteInput(e.target.value);
        setWebsiteAnalysisResult(null);
      };
    
      const analyzeImage = async () => {
        if (!imageFile) {
          setImageAnalysisResult('Please select an image.');
          return;
        }
    
        if (imageFile.size > 1024 * 1024) {
          setImageAnalysisResult('No threat detected.');
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
    
          setImageAnalysisResult(
            `Warning: Potential ${randomScamType} scam detected. Risk level: ${randomRisk}%. Advice: ${randomAdvice}`
          );
        }
      };
    
      const analyzeWebsite = () => {
        if (!websiteInput) {
          setWebsiteAnalysisResult('Please enter a web address.');
          return;
        }
    
        if (websiteInput.includes('https')) {
          setWebsiteAnalysisResult('No threat detected.');
        } else if (websiteInput.includes('http')) {
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
    
          setWebsiteAnalysisResult(
            `Warning: Potential ${randomScamType} scam detected. Risk level: ${randomRisk}%. Advice: ${randomAdvice}`
          );
        } else {
          setWebsiteAnalysisResult('Invalid web address format.');
        }
      };
    
      const openEmailChecker = () => {
        window.open('/email-checker', '_blank');
      };
    
      const renderDashboard = () => (
        <div className="bg-[#1e213a] rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Recent Scans</h3>
              <div className="text-2xl text-blue-400">24</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Threats Detected</h3>
              <div className="text-2xl text-red-400">7</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Security Score</h3>
              <div className="text-2xl text-green-400">85%</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Active Alerts</h3>
              <div className="text-2xl text-yellow-400">3</div>
            </div>
          </div>
        </div>
      );
    
      const renderMap = () => (
        <div className="bg-[#1e213a] rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl font-semibold">Real-Time Scam Map</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">All Types</button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">Text Scams</button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">Job Scams</button>
            </div>
          </div>
          <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
            <Map className="h-12 w-12 text-gray-400" />
            <span className="text-gray-400 ml-2">Interactive Map Coming Soon</span>
          </div>
        </div>
      );
    
      const renderLearningCenter = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e213a] rounded-lg p-6">
            <Video className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-400">Learn through our comprehensive video guides</p>
          </div>
          <div className="bg-[#1e213a] rounded-lg p-6">
            <Trophy className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Security Quizzes</h3>
            <p className="text-gray-400">Test your knowledge and earn badges</p>
          </div>
          <div className="bg-[#1e213a] rounded-lg p-6">
            <Database className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-white text-lg font-semibold mb-2">Scam Database</h3>
            <p className="text-gray-400">Browse our extensive collection of known scams</p>
          </div>
        </div>
      );
    
      return (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-[#1e213a] text-gray-300 p-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mb-8">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold text-white">AdShield</span>
            </div>
            
            <a href="#" 
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'dashboard' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Dashboard</span>
            </a>
            
            <a href="#"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'tools' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              <AlertTriangle className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">AI Scam Detection Tools</span>
            </a>
            
            <a href="#"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'map' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <Map className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Scam Map</span>
            </a>
            
            <a href="#"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group ${activeTab === 'learn' ? 'bg-gray-800' : ''}`}
              onClick={() => setActiveTab('learn')}
            >
              <BookOpenCheck className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Learning Center</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
              <Flag className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Report Scams</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
              <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Community Forum</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
              <Award className="h-5 w-5 text-gray-400 group-hover:text-white" />
              <span className="group-hover:text-white">Badges & Rewards</span>
            </a>
    
            <div className="mt-auto pt-4 border-t border-gray-700">
              <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group">
                <Languages className="h-5 w-5 text-gray-400 group-hover:text-white" />
                <span className="group-hover:text-white">Language</span>
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-md group"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-400 group-hover:text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                )}
                <span className="group-hover:text-white">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </aside>
    
          <div className="flex-1">
            {/* Navigation */}
            <nav className="bg-[#1a237e] text-white p-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a href="#" className="hover:text-gray-200">Home</a>
                  <a href="#" className="hover:text-gray-200">Tools</a>
                  <a href="#" className="hover:text-gray-200">Resources</a>
                  <a href="#" className="hover:text-gray-200">API</a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search tools..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-gray-800 text-white pl-10 pr-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  
                  <button className="bg-white text-purple-700 px-4 py-1 rounded-md hover:bg-gray-100">
                    Sign In
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                    Sign Up
                  </button>
                </div>
              </div>
            </nav>
    
            {/* Main Content */}
            <main className="bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 min-h-screen p-8">
              <div className="max-w-7xl mx-auto">
                {activeTab === 'tools' && (
                  <>
                    <h1 className="text-white text-3xl font-bold mb-8">
                      Scam Detection Tools (Powered by AI)
                    </h1>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredTools.map((tool) => (
                        <div 
                          key={tool.id} 
                          className="bg-[#1e213a] rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                        >
                          <div className={`${tool.colorClass} w-24 h-24 rounded-full flex items-center justify-center mb-6`}>
                            <tool.icon className="h-12 w-12 text-white" />
                          </div>
                          <h2 className="text-white text-xl font-semibold">{tool.name}</h2>
                          {tool.name === 'AI Image Analysis' && (
                            <div className="mt-4">
                              <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2 text-white" />
                              <button onClick={analyzeImage} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Analyze
                              </button>
                              {imageAnalysisResult && (
                                <div className="mt-4 text-white">
                                  {imageAnalysisResult.startsWith('Warning') ? (
                                    <div className="bg-yellow-800 p-4 rounded-md">
                                      {imageAnalysisResult}
                                    </div>
                                  ) : (
                                    <div className="bg-green-800 p-4 rounded-md">
                                      {imageAnalysisResult}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                          {tool.name === 'AI Email Checker' && (
                            <div className="mt-4">
                              <button onClick={openEmailChecker} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Open Email Checker
                              </button>
                            </div>
                          )}
                          {tool.name === 'AI Website Checker' && (
                            <div className="mt-4">
                              <input
                                type="text"
                                placeholder="Enter web address"
                                value={websiteInput}
                                onChange={handleWebsiteChange}
                                className="bg-gray-800 text-white px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                              />
                              <button onClick={analyzeWebsite} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Analyze
                              </button>
                              {websiteAnalysisResult && (
                                <div className="mt-4 text-white">
                                  {websiteAnalysisResult.startsWith('Warning') ? (
                                    <div className="bg-yellow-800 p-4 rounded-md">
                                      {websiteAnalysisResult}
                                    </div>
                                  ) : (
                                    <div className="bg-green-800 p-4 rounded-md">
                                      {websiteAnalysisResult}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
    
                    {/* Integration Section */}
                    <div className="mb-12 mt-16">
                      <h2 className="text-white text-2xl font-bold mb-6">Integrations & Extensions</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#1e213a] rounded-lg p-6">
                          <Wrench className="h-8 w-8 text-blue-500 mb-4" />
                          <h3 className="text-white text-lg font-semibold mb-2">Browser Extension</h3>
                          <p className="text-gray-300">Protect yourself while browsing with our extension</p>
                        </div>
                        <div className="bg-[#1e213a] rounded-lg p-6">
                          <Zap className="h-8 w-8 text-yellow-500 mb-4" />
                          <h3 className="text-white text-lg font-semibold mb-2">API Access</h3>
                          <p className="text-gray-300">Integrate our tools into your platform</p>
                        </div>
                        <div className="bg-[#1e213a] rounded-lg p-6">
                          <BrainCircuit className="h-8 w-8 text-purple-500 mb-4" />
                          <h3 className="text-white text-lg font-semibold mb-2">ML Feedback</h3>
                          <p className="text-gray-300">Help improve our AI detection systems</p>
                        </div>
                      </div>
                    </div>
    
                    {/* Analytics Section */}
                    <div className="mb-12">
                      <h2 className="text-white text-2xl font-bold mb-6">Platform Analytics</h2>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                          <Activity className="h-8 w-8 text-green-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">99.9%</div>
                          <div className="text-gray-300">Detection Rate</div>
                        </div>
                        <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                          <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">1M+</div>
                          <div className="text-gray-300">Protected Users</div>
                        </div>
                        <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                          <MessageCircleWarning className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">50K+</div>
                          <div className="text-gray-300">Scams Reported</div>
                        </div>
                        <div className="bg-[#1e213a] rounded-lg p-6 text-center">
                          <HandshakeIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">100+</div>
                          <div className="text-gray-300">Partner Companies</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'map' && renderMap()}
                {activeTab === 'learn' && renderLearningCenter()}
    
                {/* AI Assistant */}
                <div className="fixed bottom-8 right-8 z-50">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2">
                    <Bot className="h-6 w-6" />
                    <span>AI Assistant</span>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      );
    }
    
    export default App;
