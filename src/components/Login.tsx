import React, { useState } from 'react';
import { Book, User, UserCheck, Eye, EyeOff, Sparkles, Zap, Star, Cpu, Wifi, Globe, Shield, Rocket, Diamond } from 'lucide-react';
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4">
      {/* Massive Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Giant Floating Orbs with Gradients */}
        <div className="absolute -top-96 -left-96 w-[800px] h-[800px] bg-gradient-to-r from-emerald-400/30 via-teal-400/25 to-cyan-400/30 rounded-full blur-3xl animate-mega-float"></div>
        <div className="absolute -top-64 -right-64 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/25 via-blue-400/30 to-indigo-400/25 rounded-full blur-3xl animate-mega-float-delayed"></div>
        <div className="absolute -bottom-96 -left-64 w-[900px] h-[900px] bg-gradient-to-r from-teal-400/20 via-emerald-400/25 to-green-400/30 rounded-full blur-3xl animate-mega-float-slow"></div>
        <div className="absolute -bottom-64 -right-96 w-[750px] h-[750px] bg-gradient-to-r from-blue-400/25 via-cyan-400/30 to-teal-400/25 rounded-full blur-3xl animate-mega-float-reverse"></div>
        
        {/* Massive Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border-4 border-emerald-400/40 rotate-45 animate-mega-spin rounded-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full animate-mega-pulse shadow-2xl shadow-cyan-400/50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 border-4 border-teal-400/50 animate-mega-bounce rounded-2xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-24 h-24 bg-gradient-to-r from-emerald-400/40 to-green-400/40 rotate-45 animate-mega-spin-reverse rounded-xl shadow-2xl shadow-emerald-400/50"></div>
        
        {/* Massive Tech Icons */}
        <div className="absolute top-20 left-20 animate-mega-float text-emerald-400/40 drop-shadow-2xl">
          <Shield className="h-20 w-20" />
        </div>
        <div className="absolute top-32 right-32 animate-mega-float-delayed text-cyan-400/40 drop-shadow-2xl">
          <Rocket className="h-16 w-16" />
        </div>
        <div className="absolute bottom-32 left-32 animate-mega-float-slow text-teal-400/40 drop-shadow-2xl">
          <Diamond className="h-18 w-18" />
        </div>
        <div className="absolute bottom-20 right-20 animate-mega-float text-blue-400/40 drop-shadow-2xl">
          <Globe className="h-14 w-14" />
        </div>
        
        {/* Massive Orbiting Elements */}
        <div className="absolute top-1/2 left-1/4 animate-mega-orbit">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-2xl shadow-emerald-400/60"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-mega-orbit-reverse">
          <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-2xl shadow-cyan-400/60"></div>
        </div>
        <div className="absolute bottom-1/2 left-1/2 animate-mega-orbit-slow">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full shadow-2xl shadow-teal-400/60"></div>
        </div>
        
        {/* Massive Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <defs>
            <linearGradient id="megaLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="33%" stopColor="#14B8A6" stopOpacity="0.6" />
              <stop offset="66%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q400,100 800,300 T1600,300"
            stroke="url(#megaLineGradient)"
            strokeWidth="4"
            fill="none"
            className="animate-mega-draw-line"
          />
          <path
            d="M0,500 Q500,200 1000,500 T2000,500"
            stroke="url(#megaLineGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-mega-draw-line-delayed"
          />
          <path
            d="M200,100 Q600,400 1000,100 T1800,100"
            stroke="url(#megaLineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-mega-draw-line-slow"
          />
        </svg>
        
        {/* Massive Particle System */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-gradient-to-r from-emerald-400/60 to-cyan-400/60 rounded-full animate-mega-particle-${i % 5} shadow-lg`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Massive Grid Pattern */}
        <div className="absolute inset-0 bg-mega-grid-pattern opacity-10"></div>
        
        {/* Massive Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-teal-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-emerald-900/20"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Massive Outer Glow Ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400 via-teal-400 via-cyan-400 to-blue-400 rounded-full blur-2xl opacity-60 animate-mega-pulse group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Large Middle Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 rounded-full blur-xl opacity-40 animate-mega-spin-slow"></div>
              {/* Icon Container */}
              <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 via-cyan-500 to-blue-500 p-6 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-500 border-2 border-white/20">
                <Book className="h-16 w-16 text-white animate-mega-pulse drop-shadow-2xl" />
              </div>
              {/* Large Orbiting Elements */}
              <div className="absolute inset-0 animate-mega-orbit">
                <div className="absolute -top-4 left-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-xl shadow-emerald-400/70"></div>
              </div>
              <div className="absolute inset-0 animate-mega-orbit-reverse">
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-xl shadow-cyan-400/70"></div>
              </div>
              <div className="absolute inset-0 animate-mega-orbit-slow">
                <div className="absolute -bottom-4 left-1/2 w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full shadow-xl shadow-teal-400/70"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-200 via-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-mega-gradient-x drop-shadow-lg">
            NBKR Institute of Science and Technology
          </h1>
          <p className="text-emerald-200/90 text-lg font-medium mb-4 drop-shadow-md">Computer Networks Lab Evaluation System</p>
          
          {/* Enhanced Status Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2 text-emerald-300/90 bg-emerald-900/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-mega-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-sm font-medium">System Online</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-300/90 bg-cyan-900/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-mega-ping shadow-lg shadow-cyan-400/50"></div>
              <span className="text-sm font-medium">Secure Connection</span>
            </div>
          </div>
          
          {/* Enhanced Progress Dots */}
          <div className="flex justify-center space-x-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-mega-pulse shadow-lg shadow-emerald-400/50"></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-mega-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-mega-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.8s' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-mega-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '1.2s' }}></div>
          </div>
        </div>

        {/* Enhanced Login Form */}
        <div className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden group hover:bg-white/15 transition-all duration-700 hover:shadow-emerald-500/20 hover:shadow-2xl">
          {/* Enhanced Form Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 via-cyan-400/30 to-blue-400/30 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
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
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg transform scale-105 shadow-emerald-500/30'
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
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg transform scale-105 shadow-emerald-500/30'
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
                    <User className="h-4 w-4 text-emerald-400" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105 hover:shadow-lg hover:shadow-emerald-400/20"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div className="group">
                <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-teal-400" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105 hover:shadow-lg hover:shadow-teal-400/20"
                  placeholder={userType === 'student' ? 'Enter your college email' : 'Enter your email'}
                />
                {userType === 'student' && !isSignup && (
                  <p className="text-xs text-emerald-300/80 mt-2 flex items-center space-x-1 animate-mega-fade-in">
                    <Sparkles className="h-3 w-3 animate-mega-pulse" />
                    <span>Use your college email address provided by the faculty</span>
                  </p>
                )}
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  <span>Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
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
                  <p className="text-xs text-cyan-300/80 mt-2 flex items-center space-x-1 animate-mega-fade-in">
                    <Cpu className="h-3 w-3 animate-mega-pulse" />
                    <span>Use the password provided by your faculty or your updated password</span>
                  </p>
                )}
              </div>

              {isSignup && (
                <div className="group">
                  <label className="block text-sm font-medium text-white/90 mb-2 flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-blue-400" />
                    <span>Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 focus:scale-105 hover:shadow-lg hover:shadow-blue-400/20"
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
                <div className="bg-red-500/20 border border-red-400/30 text-red-200 px-4 py-3 rounded-xl backdrop-blur-sm animate-mega-shake shadow-lg shadow-red-500/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-mega-pulse"></div>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 via-cyan-500 to-blue-500 text-white py-4 rounded-xl font-medium hover:from-emerald-600 hover:via-teal-600 hover:via-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 via-white/15 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-mega-shimmer"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>{isSignup ? 'Create Account' : 'Sign In'}</span>
                      <Sparkles className="h-4 w-4 animate-mega-pulse" />
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
                  className="text-emerald-300 hover:text-white font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg"
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

        {/* Enhanced Footer */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center space-x-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2 bg-emerald-900/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-mega-pulse"></div>
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-teal-900/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-mega-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span>Modern</span>
            </div>
            <div className="flex items-center space-x-2 bg-cyan-900/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-mega-pulse" style={{ animationDelay: '0.8s' }}></div>
              <span>Efficient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;