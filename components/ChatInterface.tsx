import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface ChatInterfaceProps {
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradio-app': {
        src: string;
        className?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className = "" }) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://gradio.s3-us-west-2.amazonaws.com/5.42.0/gradio.js';
      document.head.appendChild(script);
      scriptLoaded.current = true;

      return () => {
        // Cleanup if needed
        const existingScript = document.querySelector('script[src="https://gradio.s3-us-west-2.amazonaws.com/5.42.0/gradio.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Chat with My AI Assistant
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ask me anything about my experience, projects, or technical skills. This AI assistant 
            is trained on my professional background and can provide detailed insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-xl font-semibold">Interactive Chat</h3>
            <p className="text-blue-100 mt-1">
              Powered by AI • Available 24/7
            </p>
          </div>
          
          <div className="p-6">
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
              <gradio-app
                src="https://gustavoch-gustavo-cv.hf.space"
                className="w-full min-h-[600px] bg-white dark:bg-gray-700"
                style={{
                  width: '100%',
                  minHeight: '600px',
                  border: 'none',
                  borderRadius: '0.5rem'
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ChatInterface;