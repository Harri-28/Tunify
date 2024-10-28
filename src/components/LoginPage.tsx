import React, { useState, useEffect } from 'react';
import { Music2, Lock, Mail, Eye, EyeOff, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const passwordRules = [
    { test: /.{8,}/, message: 'At least 8 characters' },
    { test: /[A-Z]/, message: 'One uppercase letter' },
    { test: /[a-z]/, message: 'One lowercase letter' },
    { test: /[0-9]/, message: 'One number' },
    { test: /[^A-Za-z0-9]/, message: 'One special character' }
  ];

  const validatePassword = (pass: string) => {
    return passwordRules.every(rule => rule.test.test(pass));
  };

  useEffect(() => {
    setIsValid(validatePassword(password));
  }, [password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setShowWelcome(true);
      setTimeout(() => {
        onLoginSuccess();
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center p-4">
      <AnimatePresence>
        {showWelcome ? (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="text-center text-white"
          >
            <Music2 className="w-20 h-20 mx-auto mb-4 text-purple-400" />
            <h1 className="text-4xl font-bold mb-2">Welcome to Tunify!</h1>
            <p className="text-gray-300">Get ready for a musical journey...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-md"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Music2 className="w-12 h-12 text-purple-400 mx-auto" />
              </motion.div>
              <h1 className="text-3xl font-bold text-white mt-4">Login to Tunify</h1>
              <p className="text-gray-400 mt-2">Your personal music emotion companion</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-gray-700 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-gray-700 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="space-y-2">
                  {passwordRules.map((rule, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-sm"
                    >
                      {rule.test.test(password) ? (
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 mr-2" />
                      )}
                      <span className={rule.test.test(password) ? 'text-green-400' : 'text-gray-400'}>
                        {rule.message}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  isValid
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-green-500'
                    : 'bg-red-500'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!isValid}
              >
                Login
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoginPage;