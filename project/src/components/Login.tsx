import React, { useState } from 'react';
import { Book, User, UserCheck, Eye, EyeOff, Sparkles, Zap, Star } from 'lucide-react';
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Moving Geometric Shapes */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/50 animate-pulse delay-1500"></div>
        <div className="absolute bottom-32 right-32 w-5 h-5 bg-pink-400/40 rotate-45 animate-spin delay-2000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/3 left-1/6 animate-float">
          <Sparkles className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute top-2/3 right-1/6 animate-float-delayed">
          <Zap className="h-6 w-6 text-blue-300/30" />
        </div>
        <div className="absolute top-1/2 left-1/12 animate-float-slow">
          <Star className="h-5 w-5 text-purple-300/25" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-2xl">
                <Book className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            NBKR Institute of Science and Technology
          </h1>
          <p className="text-blue-200/80 text-lg font-medium">Computer Networks Lab Evaluation System</p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>

        {/* Login Form */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Form Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
          
          <div className="relative z-10">
            {!isSignup && (
              <div className="flex mb-6 bg-white/5 rounded-xl p-1 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => {
                    setUserType('faculty');
                    resetForm();
                  }}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    userType === 'faculty'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
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
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    userType === 'student'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
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
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div className="group">
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15"
                  placeholder={userType === 'student' ? 'Enter your college email' : 'Enter your email'}
                />
                {userType === 'student' && !isSignup && (
                  <p className="text-xs text-blue-300/80 mt-2 flex items-center space-x-1">
                    <Sparkles className="h-3 w-3" />
                    <span>Use your college email address provided by the faculty</span>
                  </p>
                )}
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {userType === 'student' && !isSignup && (
                  <p className="text-xs text-blue-300/80 mt-2 flex items-center space-x-1">
                    <Zap className="h-3 w-3" />
                    <span>Use the password provided by your faculty or your updated password</span>
                  </p>
                )}
              </div>

              {isSignup && (
                <div className="group">
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-500/20 border border-red-400/30 text-red-200 px-4 py-3 rounded-xl backdrop-blur-sm animate-shake">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Please wait...</span>
                    </>
                  ) : (
                    <>
                      <span>{isSignup ? 'Sign Up' : 'Login'}</span>
                      <Sparkles className="h-4 w-4" />
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
                  className="text-blue-300 hover:text-white font-medium transition-colors duration-300 relative group"
                >
                  <span className="relative z-10">
                    {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                  </span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Secure • Modern • Efficient
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;