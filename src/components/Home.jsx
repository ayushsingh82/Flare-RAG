import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [statement, setStatement] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const handleVerification = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Off-Chain Data Verification Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Verify off-chain data feeds using RAG, Trusted Execution Environments, 
            and Zero-Knowledge Proofs on Flare Network
          </p>
          
          {/* Verification Input Box */}
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
            <textarea
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              placeholder="Enter the statement you want to verify..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isVerifying}
            />
            <button
              onClick={handleVerification}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mx-auto"
              disabled={!statement.trim() || isVerifying}
            >
              {isVerifying ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                'Start Verifying'
              )}
            </button>
          </div>

          {/* Verification Results */}
          {verificationComplete && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-100 border border-green-400 rounded-lg p-4 mb-6">
                <p className="text-green-700 font-semibold">✓ Data Verified Successfully</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Verified by Multiple LLMs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600">Mistral 7B</h4>
                    <p className="text-sm text-gray-600">High-performance, open-weight model</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600">Gemma</h4>
                    <p className="text-sm text-gray-600">Google DeepMind's efficient model</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600">Mixtral</h4>
                    <p className="text-sm text-gray-600">12.9B Mixture of Experts model</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">RAG Integration</h2>
            <p className="text-gray-600">
              Leverage Retrieval-Augmented Generation for accurate and contextual 
              data verification processes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Trusted Execution</h2>
            <p className="text-gray-600">
              Ensure data integrity and security through Trusted Execution 
              Environments (TEEs).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Zero-Knowledge Proofs</h2>
            <p className="text-gray-600">
              Maintain privacy while proving data validity using advanced 
              ZKP technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;