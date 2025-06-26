// pages/login.js
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-light mb-6">Sign In</h2>

        <div className="mb-4">
          <input type="email" placeholder="Email" className="w-full border-b border-gray-300 pb-2 focus:outline-none" />
        </div>

        <div className="mb-6">
          <input type="password" placeholder="Password" className="w-full border-b border-gray-300 pb-2 focus:outline-none" />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <a href="/register" className="underline hover:text-gray-700">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
