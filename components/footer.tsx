import Link from "next/link"
import Image from "next/image"
import { DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-2 rounded-full overflow-hidden">
                <Image src="/your-bot-logo.png" alt="Your Bot Logo" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
                Your Bot Name™
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              The ultimate multipurpose antinuke Discord bot with powerful moderation tools and utility features.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="bot-support-server" className="text-gray-400 hover:text-white">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/commands" className="text-gray-400 hover:text-white">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-gray-400 hover:text-white">
                  Premium
                </Link>
              </li>
              <li>
                <a href="bot-support-server" className="text-gray-400 hover:text-white">
                  Support Server
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Your Bot Name™ Bot. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
