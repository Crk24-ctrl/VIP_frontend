import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header - Simple green bar */}
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">FloraFinder</h1>
            <p className="text-sm">Identify Flora in One Click</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
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

      {/* Main Content - Plain white background */}
      <main className="flex-grow flex justify-center items-center py-16 bg-white">
        <div className="w-full max-w-md px-4">
          <h2 className="text-3xl font-medium text-center mb-8">
            Welcome <span className="text-primary">Back!</span>
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address:
              </label>
              <input type="email" id="email" className="w-full border border-[#828282] rounded-md p-3" />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <input type="password" id="password" className="w-full border border-[#828282] rounded-md p-3" />
            </div>

            <div className="pt-4 flex flex-col items-center">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-12 rounded-full hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
              <Link href="/forgot-password" className="mt-4 text-[#454545] hover:underline">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </main>

      {/* Footer - Simple white footer */}
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="font-medium mb-2">Contact us:</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-[#454545]" />
              <span className="text-[#6f6e6e]">@FloraFinder</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#454545]" />
              <span className="text-[#6f6e6e]">FloraFinder_service@outlook.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

