import React, { useState } from 'react';
import { Book, User, UserCheck, Eye, EyeOff, Sparkles, Zap, Star, Cpu, Wifi, Globe } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [userType, setUserType] = useState<'faculty' | 'student'>('faculty');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    rollNo: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await signup(formData.email, formData.password, formData.name, 'faculty');
      } else {
        await login(formData.email, formData.password);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      rollNo: ''
    });
    setError('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-40 w-64 h-64 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Network-themed Moving Elements */}
        <div className="absolute top-1/4 left-1/6 animate-orbit">
          <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-orbit-reverse">
          <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-orbit-slow">
          <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-20 animate-float text-blue-400/30">
          <Cpu className="h-8 w-8" />
        </div>
        <div className="absolute top-32 right-32 animate-float-delayed text-purple-400/30">
          <Wifi className="h-6 w-6" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float-slow text-cyan-400/30">
          <Globe className="h-7 w-7" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float text-pink-400/30">
          <Zap className="h-5 w-5" />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/2 left-10 w-6 h-6 border-2 border-blue-400/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/4 right-10 w-4 h-4 bg-purple-400/40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 border-2 border-cyan-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-400/40 rotate-45 animate-bounce"></div>
        
        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M200,400 Q400,300 600,400 T1000,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line-delayed"
          />
        </svg>
        
        {/* Particle System */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/30 rounded-full animate-particle-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Middle Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 animate-spin-slow"></div>
              {/* Icon Container */}
              <div className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Book className="h-12 w-12 text-white animate-pulse" />
              </div>
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute -top-2 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
              </div>
              <div className="absolute inset-0 animate-orbit-reverse">
                <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
            NBKR Institute of Science and Technology
          </h1>
          <p className="text-blue-200/90 text-lg font-medium mb-4">Computer Networks Lab Evaluation System</p>
          
          {/* Animated Status Indicators */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2 text-green-400/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">System Online</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400/80">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <span className="text-xs font-medium">Secure Connection</span>
            </div>
          </div>
          
          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* Login Form */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden group hover:bg-white/15 transition-all duration-500">
          {/* Form Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {!isSignup && (
              <div className="flex mb-6 bg-white/5 rounded-2xl p-1 backdrop-blur-sm border border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setUserType('faculty');
                    resetForm();
                  }}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-500 ${
                    userType === 'faculty'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105 shadow-blue-500/25'
                      : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <UserCheck className="h-5 w-5" />
                  <span>Faculty</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUserType('student');
                    resetForm();
                  }}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-500 ${
                    userType === 'student'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105 shadow-blue-500/25'
                      : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Student</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignup && (
                <div className="group">
                  <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div className="group">
                <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105"
                  placeholder={userType === 'student' ? 'Enter your college email' : 'Enter your email'}
                />
                {userType === 'student' && !isSignup && (
                  <p className="text-xs text-blue-300/80 mt-2 flex items-center space-x-1 animate-fade-in">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    <span>Use your college email address provided by the faculty</span>
                  </p>
                )}
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {userType === 'student' && !isSignup && (
                  <p className="text-xs text-blue-300/80 mt-2 flex items-center space-x-1 animate-fade-in">
                    <Cpu className="h-3 w-3 animate-pulse" />
                    <span>Use the password provided by your faculty or your updated password</span>
                  </p>
                )}
              </div>

              {isSignup && (
                <div className="group">
                  <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-500/20 border border-red-400/30 text-red-200 px-4 py-3 rounded-xl backdrop-blur-sm animate-shake">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-4 rounded-xl font-medium hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>{isSignup ? 'Create Account' : 'Sign In'}</span>
                      <Sparkles className="h-4 w-4 animate-pulse" />
                    </>
                  )}
                </div>
              </button>
            </form>

            {userType === 'faculty' && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    resetForm();
                  }}
                  className="text-blue-300 hover:text-white font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg"
                >
                  <span className="relative z-10">
                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Create One"}
                  </span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center space-x-6 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <span>Modern</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <span>Efficient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;