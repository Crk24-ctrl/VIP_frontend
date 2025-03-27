import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">FloraFinder</h1>
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

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Welcome to Flora<span className="text-primary">Finder</span>!
          </h2>

          <div className="flex justify-center gap-4 mb-12">
            {/* Sign Up button with Link */}
            <Link href="/signup">
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition">
                Sign Up
              </button>
            </Link>
            {/* Sign in button with Link to login page */}
            <Link href="/login">
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition">
                Sign in
              </button>
            </Link>
          </div>

          <div className="max-w-md mx-auto mb-16">
            <Image src="/image.png" alt="Description" width={600} height={400} className="rounded-lg" />
          </div>

          <h2 className="text-4xl font-bold mb-8">
            What's Flora<span className="text-primary">Finder</span>?
          </h2>

          <p className="max-w-4xl mx-auto text-lg leading-relaxed">
            FloraFinder is your go-to plant identification app! Simply snap a photo of any plant, and our advanced AI
            will instantly tell you what it is. Whether you're a gardening enthusiast, a nature lover, or just curious
            about the plants around you, FloraFinder makes plant identification quick and easy. Explore, learn, and grow
            your plant knowledge with just one tap!
          </p>
        </div>
      </div>
    </main>
  )
}

