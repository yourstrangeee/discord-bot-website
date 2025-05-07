import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Gift, UserPlus, UserCog, Terminal, Ticket, Server, Users, CommandIcon } from "lucide-react"
import FeatureCardInteractive from "@/components/feature-card-interactive"
import StatCard from "@/components/stat-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
              <Image src="/your-bot-logo.png" alt="Your Bot Logo" fill className="object-cover" priority />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
              Your Bot Name
            </span>{" "}
            Discord Bot
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            The ultimate multipurpose antinuke bot with powerful moderation tools and utility features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
        </div>

        <div className="pb-24 md:pb-16"></div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-2 px-2 sm:gap-8 sm:px-4">
            <StatCard
              icon={<Server className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />}
              value="3,806+"
              label="Servers"
            />
            <StatCard icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />} value="1.13M+" label="Users" />
            <StatCard
              icon={<CommandIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />}
              value="192"
              label="Commands"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your Bot Name comes packed with everything you need to manage and enhance your Discord server
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <FeatureCardInteractive
              icon={<Shield className="h-6 w-6" />}
              title="Moderation Tools"
              description="Advanced moderation commands to keep your server safe and clean"
              commands={[
                { name: "kick", desc: "Kick a user from the server" },
                { name: "ban", desc: "Ban a user from the server" },
                { name: "unban", desc: "Unban a banned user from the server" },
                { name: "unbanall", desc: "Unbans all banned members of the guild" },
                { name: "mute", desc: "Timeouts someone for specific time" },
                { name: "unmute", desc: "Remove server timeout from a muted member" },
                { name: "warn", desc: "Warn a user" },
                { name: "warn check", desc: "Check warnings of a user" },
                { name: "warn reset", desc: "Reset warnings of a user" },
                { name: "lock", desc: "Locks a unlocked channel" },
                { name: "unlock", desc: "Unlocks a unlocked channel" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />

            <FeatureCardInteractive
              icon={<Shield className="h-6 w-6" />}
              title="Antinuke Protection"
              description="Protect your server from raids, nukes, and malicious actions"
              commands={[
                { name: "antinuke", desc: "Shows all antinuke commands with details" },
                { name: "antinuke enable", desc: "Enables and auto-setup the antinuke system" },
                { name: "antinuke disable", desc: "Disables and reset the antinuke system" },
                { name: "antinuke whitelist", desc: "Shows all antinuke whitelist commands" },
                { name: "antinuke whitelist add", desc: "Add a user in antinuke whitelist for specific events" },
                { name: "antinuke whitelist remove", desc: "Remove a user from antinuke whitelist for all events" },
                { name: "antinuke owner", desc: "Shows all extra owner commands with details" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />

            <FeatureCardInteractive
              icon={<Gift className="h-6 w-6" />}
              title="Giveaway System"
              description="Create and manage giveaways with customizable requirements"
              commands={[
                { name: "giveaway start", desc: "Start a new giveaway" },
                { name: "giveaway end", desc: "End a giveaway" },
                { name: "giveaway reroll", desc: "Reroll a giveaway winner" },
                { name: "giveaway list", desc: "List all active giveaways" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />

            <FeatureCardInteractive
              icon={<UserPlus className="h-6 w-6" />}
              title="Self-Roles"
              description="Let members assign themselves roles through reactions or commands"
              commands={[
                { name: "selfrole", desc: "Shows all selfrole commands" },
                { name: "selfrole create", desc: "Make a selfrole panel with customizable buttons or dropdown menu" },
                { name: "selfrole delete", desc: "Delete a selfrole panel by using message id" },
                { name: "selfrole edit", desc: "Edit a selfrole panel embed" },
                { name: "selfrole list", desc: "Display a list of selfrole panels" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />

            <FeatureCardInteractive
              icon={<UserCog className="h-6 w-6" />}
              title="Custom Roles"
              description="Create and manage custom roles with unique permissions"
              commands={[
                { name: "customrole", desc: "Shows all customrole commands" },
                { name: "customrole reqrole", desc: "Set the required role for using custom roles" },
                { name: "customrole create", desc: "Create a custom alias for assigning and removing roles" },
                { name: "customrole delete", desc: "Delete a custom role alias" },
                { name: "customrole config", desc: "Display a list of custom aliases" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />

            <FeatureCardInteractive
              icon={<Ticket className="h-6 w-6" />}
              title="Ticket System"
              description="Comprehensive ticket system for support and user inquiries"
              commands={[
                { name: "ticket", desc: "Shows all ticket commands with details" },
                { name: "ticket panel setup", desc: "Start the ticket system setup process" },
                { name: "ticket panel config", desc: "Configure a ticket panel settings" },
                { name: "ticket panel list", desc: "List all ticket panels in the server" },
                { name: "ticket add", desc: "Add a user to current ticket" },
                { name: "ticket close", desc: "Close the current ticket" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />

            <FeatureCardInteractive
              icon={<Terminal className="h-6 w-6" />}
              title="Utility Commands"
              description="Helpful utility commands to enhance server management"
              commands={[
                { name: "setprefix", desc: "Set the custom prefix of bot for this server" },
                { name: "avatar", desc: "Shows a user's avatar" },
                { name: "banner", desc: "Shows a user's or server's banner" },
                { name: "profile", desc: "View, customize, and showcase your profile" },
                { name: "afk", desc: "Set your afk status" },
                { name: "ping", desc: "Shows the bot's latency and shard status" },
                { name: "stats", desc: "Shows the bot's statistics" },
              ]}
              className="border-blue-700/30 hover:border-blue-500/50 hover:shadow-blue-500/10"
            />
          </div>

          <div className="mt-16 text-center">
            <Link href="/commands">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore All Commands</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">Premium Perks</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance your Discord server with these exclusive premium features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Prefix-less Commands</h3>
              </div>
              <p className="text-gray-400">Toggle to use commands without specifying a prefix</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Advanced Self-Roles</h3>
              </div>
              <p className="text-gray-400">Set up self-roles fully customizable with buttons & dropdowns</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Multiple Ticket Panels</h3>
              </div>
              <p className="text-gray-400">Set up more than 1 customized ticket panel</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Custom Aliases</h3>
              </div>
              <p className="text-gray-400">Create over 20 custom aliases for role assignment or removal</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Premium Badge</h3>
              </div>
              <p className="text-gray-400">Receive a Premium Badge in our Discord Server</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Premium Role</h3>
              </div>
              <p className="text-gray-400">Get a Premium Role in our Discord Server</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="bot-support-server" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to enhance your Discord server?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join over 3,800 servers and 1.13 million users already using Your Bot Name
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
        </div>
      </section>
    </main>
  )
}
