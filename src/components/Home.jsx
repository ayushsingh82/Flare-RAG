import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Verification
          </Link>
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