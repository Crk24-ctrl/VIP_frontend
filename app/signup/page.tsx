import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-primary w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-white text-3xl font-bold">FloraFinder</h1>
            <p className="text-white text-sm">Identify Flora in One Click</p>
          </div>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li>
                <Link href="/" className="hover:underline">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:underline">
                  Account Page
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-none p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Create an account</h2>

          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Name:" className="w-full px-4 py-3 border border-gray-400 rounded" />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address:"
                className="w-full px-4 py-3 border border-gray-400 rounded"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number:"
                className="w-full px-4 py-3 border border-gray-400 rounded"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password:"
                className="w-full px-4 py-3 border border-gray-400 rounded"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password:"
                className="w-full px-4 py-3 border border-gray-400 rounded"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p>
              Already have an account?
              <Link href="/login" className="text-primary font-medium ml-1">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4">
        <div className="container mx-auto">
          <h3 className="text-xl font-semibold mb-4">Contact us:</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-gray-600">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>@FloraFinder</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>FloraFinder_service@outlook.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

