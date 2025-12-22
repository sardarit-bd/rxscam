import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl inline-block mb-4">
            ScamRx
          </div>
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="text-gray-600 mt-2">Check scams in seconds</p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-500 font-semibold">
              Sign in
            </Link>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center mt-8">
          <div>
            <div className="text-2xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">50K+</div>
            <div className="text-sm text-gray-600">Scans</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">10K+</div>
            <div className="text-sm text-gray-600">Detected</div>
          </div>
        </div>
      </div>
    </div>
  );
}