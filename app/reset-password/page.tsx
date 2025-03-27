import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function ResetPasswordPage() {
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
          <h2 className="text-3xl font-medium text-center mb-4">Reset your password</h2>

          <p className="text-center text-gray-600 mb-8">New password must be different than previous ones</p>

          <form className="space-y-6">
            <div>
              <label htmlFor="new-password" className="block mb-2">
                Enter new password :
              </label>
              <input type="password" id="new-password" className="w-full border border-[#828282] rounded-md p-3" />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block mb-2">
                Confirm new password:
              </label>
              <input type="password" id="confirm-password" className="w-full border border-[#828282] rounded-md p-3" />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-8 rounded-full hover:bg-primary/90 transition-colors"
              >
                Reset Password
              </button>
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

