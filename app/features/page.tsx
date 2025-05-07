import { Shield, Gift, UserPlus, UserCog, Terminal, Ticket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureCardInteractive from "@/components/feature-card-interactive"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Powerful Features</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your Bot Name comes packed with everything you need to manage and enhance your Discord server
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
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
          />
        </div>

        <div className="text-center">
          <Link href="/commands">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore All Commands
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
