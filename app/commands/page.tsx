"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Gift, UserPlus, UserCog, EyeOff, Ticket, Terminal } from "lucide-react"
import CommandList from "@/components/command-list"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function CommandsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const antinukeCommands = [
    { name: "antinuke", desc: "Shows all antinuke commands with details" },
    { name: "antinuke enable", desc: "Enables and auto-setup the antinuke system" },
    { name: "antinuke disable", desc: "Disables and reset the antinuke system" },
    { name: "antinuke whitelist", desc: "Shows all antinuke whitelist commands" },
    { name: "antinuke whitelist add", desc: "Add a user in antinuke whitelist for specific antinuke events" },
    { name: "antinuke whitelist remove", desc: "Remove a user from antinuke whitelist for all events" },
    { name: "antinuke whitelist reset", desc: "Resets the whole antinuke whitelist database of current guild" },
    { name: "antinuke whitelist show", desc: "Shows all whitelisted users data of this guild" },
    { name: "antinuke owner", desc: "Shows all extra owner commands with details" },
    { name: "antinuke owner add", desc: "Add an antinuke extra owner for this guild" },
    { name: "antinuke owner remove", desc: "Remove an antinuke extra owner for this guild" },
    { name: "antinuke owner reset", desc: "Reset all antinuke extra owners for this guild" },
    { name: "antinuke owner show", desc: "Show all antinuke extra owners for this guild" },
  ]

  const moderationCommands = [
    { name: "kick", desc: "Kick a user from the server" },
    { name: "ban", desc: "Ban a user from the server" },
    { name: "unban", desc: "Unban a banned user from the server" },
    { name: "unbanall", desc: "Unbans all banned members of the guild" },
    { name: "mute", desc: "Timeouts someone for specific time" },
    { name: "unmute", desc: "Remove server timeout from a muted member" },
    { name: "nickname", desc: "Set/Reset someone's server nickname" },
    { name: "roleicon", desc: "Changes the icon for the role" },
    { name: "warn", desc: "Warn a user" },
    { name: "warn check", desc: "Check warnings of a user" },
    { name: "warn reset", desc: "Reset warnings of a user" },
    { name: "role", desc: "Shows all role commands with details" },
    { name: "role add", desc: "Add a role to a user" },
    { name: "role remove", desc: "Remove a role from a user" },
    { name: "role humans", desc: "Gives a role to all the humans in the server" },
    { name: "role bots", desc: "Gives a role to all the bots in the server" },
    { name: "role all", desc: "Gives a role to all the members in the server" },
    { name: "role create", desc: "Create a new role with custom settings" },
    { name: "role delete", desc: "Delete a role from the server" },
    { name: "role edit", desc: "Edit a role's properties (name, color, hoist, mentionable)" },
    { name: "role info", desc: "Get information about a role" },
    { name: "lockall", desc: "Locks all channels of the server" },
    { name: "snipe", desc: "Shows the latest deleted/edited message" },
    { name: "lock", desc: "Locks a unlocked channel" },
    { name: "unlockall", desc: "Unlocks all channels of the server" },
    { name: "unlock", desc: "Unlocks a unlocked channel" },
    { name: "hideall", desc: "Hides all channels of the server" },
    { name: "hide", desc: "Hides a unhidden channel" },
    { name: "unhideall", desc: "Unhides all channels of the server" },
    { name: "unhide", desc: "Unhides a hidden channel" },
    { name: "clone", desc: "Makes a clone of current channel & deletes the old one" },
    { name: "purge", desc: "Clears the specific amount of messages" },
    { name: "purge embeds", desc: "Clears the messages containing embeds" },
    { name: "purge files", desc: "Clears the messages containing files" },
    { name: "purge images", desc: "Clears the messages containing images" },
    { name: "purge user", desc: "Clears the messages of a specific user" },
    { name: "purge emojis", desc: "Clears the messages having emojis" },
    { name: "purge contains", desc: "Clears the messages containing a specifix string" },
    { name: "purge bots", desc: "Clears the messages sent by bot" },
    { name: "purge all", desc: "Clears all messages" },
  ]

  const giveawayCommands = [
    { name: "giveaway start", desc: "Start a new giveaway" },
    { name: "giveaway end", desc: "End a giveaway" },
    { name: "giveaway reroll", desc: "Reroll a giveaway winner" },
    { name: "giveaway list", desc: "List all active giveaways" },
  ]

  const selfRoleCommands = [
    { name: "selfrole", desc: "Shows all selfrole commands" },
    { name: "selfrole create", desc: "Make a selfrole panel with customizable buttons or dropdown menu" },
    { name: "selfrole delete", desc: "Delete a selfrole panel by using message id" },
    { name: "selfrole edit", desc: "Edit a selfrole panel embed" },
    { name: "selfrole list", desc: "Display a list of selfrole panels" },
  ]

  const customRoleCommands = [
    { name: "customrole", desc: "Shows all customrole commands" },
    { name: "customrole reqrole", desc: "Set the required role for using custom roles" },
    { name: "customrole create", desc: "Create a custom alias for assigning and removing roles" },
    { name: "customrole delete", desc: "Delete a custom role alias" },
    { name: "customrole config", desc: "Display a list of custom aliases" },
  ]

  const ignoreCommands = [
    { name: "ignore", desc: "Shows all ignore commands with details" },
    { name: "ignore command add", desc: "Add any bot's command in ignore list for this server" },
    { name: "ignore command remove", desc: "Remove any bot's command from ignore list for this server" },
    { name: "ignore command show", desc: "Shows a list of ignored commands for this server" },
    { name: "ignore module add", desc: "Add any bot's command group in ignore list for this server" },
    { name: "ignore module remove", desc: "Remove any bot's command group from ignore list for this server" },
    { name: "ignore module show", desc: "Shows a list of ignored command groups for this server" },
    { name: "ignore channel add", desc: "Add any text channel in ignore list for this server" },
    { name: "ignore channel remove", desc: "Remove a text channel from ignore list for this server" },
    { name: "ignore channel show", desc: "Shows a list of ignored channels for this server" },
    { name: "ignore bypasser add", desc: "Add a user in ignore bypassers list" },
    { name: "ignore bypasser remove", desc: "Remove a user from ignore bypassers list" },
    { name: "ignore bypasser show", desc: "Shows a list of ignore bypasser users of this server" },
  ]

  const ticketCommands = [
    { name: "ticket", desc: "Shows all ticket commands with details" },
    { name: "ticket panel setup", desc: "Start the ticket system setup process" },
    { name: "ticket panel config", desc: "Configure a ticket panel settings" },
    { name: "ticket panel list", desc: "List all ticket panels in the server" },
    { name: "ticket panel delete", desc: "Delete a ticket panel" },
    { name: "ticket add", desc: "Add a user to current ticket" },
    { name: "ticket remove", desc: "Remove a user from the current ticket" },
    { name: "ticket rename", desc: "Rename the current ticket channel" },
    { name: "ticket close", desc: "Close the current ticket" },
    { name: "ticket lock", desc: "Lock the ticket channel" },
    { name: "ticket unlock", desc: "Unlock the ticket channel" },
    { name: "ticket resetdata", desc: "Resets all ticket database of this guild" },
  ]

  const utilityCommands = [
    { name: "setprefix", desc: "Set the custom prefix of bot for this server" },
    { name: "avatar", desc: "Shows a user's avatar" },
    { name: "banner user", desc: "Shows a user's banner" },
    { name: "banner server", desc: "Shows current guild's banner" },
    { name: "profile", desc: "View, customize, and showcase your profile with badges & achievements!" },
    { name: "afk", desc: "Set your afk status" },
    { name: "ping", desc: "Shows the bot's latency and shard status" },
    { name: "stats", desc: "Shows the bot's statistics" },
    { name: "steal", desc: "Steal an emoji or sticker usign this command" },
    { name: "uptime", desc: "Shows the bot's uptime info" },
    { name: "invite", desc: "Get invite link of bot and support server" },
    { name: "userinfo", desc: "Shows detailed information of a user" },
    { name: "roleinfo", desc: "Shows detailed information of a server role" },
    { name: "serverinfo", desc: "Shows detailed information about the server" },
    { name: "membercount", desc: "Shows total membercount of the server" },
    { name: "autorole", desc: "Shows all autorole commands with details" },
    { name: "autorole config", desc: "Configure which roles to assign automatically" },
    { name: "autorole toggle", desc: "Enable/disable automatic role assignment" },
    { name: "trigger create", desc: "Create a new trigger" },
    { name: "trigger edit", desc: "Edit an existing trigger's response" },
    { name: "trigger delete", desc: "Delete an existing trigger" },
    { name: "trigger show", desc: "Shows all existing triggers list" },
    { name: "list", desc: "Shows all list commands" },
    { name: "list boosters", desc: "Shows list of server boosters" },
    { name: "list bans", desc: "Shows list of banned members of the server" },
    { name: "list inrole", desc: "Shows list of members that are in the specified role" },
    { name: "list emojis", desc: "Shows list of all emojis in the server with ids" },
    { name: "list roles", desc: "Shows list of all roles in the server with ids" },
    { name: "list bots", desc: "Shows list of all bots in the server" },
    { name: "list admins", desc: "Shows list of all administrators of the server" },
    { name: "list mods", desc: "Shows list of all moderators of the server" },
  ]

  const filterCommands = (commands) => {
    if (!searchQuery) return commands
    return commands.filter(
      (cmd) =>
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.desc.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Bot Commands</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore all 192 commands available with Your Bot Name
          </p>

          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search commands..."
              className="pl-10 bg-gray-800/50 border-gray-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="antinuke" className="w-full">
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <TabsList className="inline-flex w-auto min-w-full md:w-full mb-8 bg-gray-800/50 p-1 rounded-lg">
              <TabsTrigger
                value="antinuke"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <Shield className="h-4 w-4" /> <span>Antinuke</span>
              </TabsTrigger>
              <TabsTrigger
                value="moderation"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <Shield className="h-4 w-4" /> <span>Moderation</span>
              </TabsTrigger>
              <TabsTrigger
                value="giveaway"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <Gift className="h-4 w-4" /> <span>Giveaway</span>
              </TabsTrigger>
              <TabsTrigger
                value="selfroles"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <UserPlus className="h-4 w-4" /> <span>Self-Roles</span>
              </TabsTrigger>
              <TabsTrigger
                value="customrole"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <UserCog className="h-4 w-4" /> <span>Custom Roles</span>
              </TabsTrigger>
              <TabsTrigger
                value="ignore"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <EyeOff className="h-4 w-4" /> <span>Ignore</span>
              </TabsTrigger>
              <TabsTrigger
                value="ticket"
                className="flex-1 flex items-center justify-center gap-2 data-[state=active]:bg-blue-600"
              >
                <Ticket className="h-4 w-4" /> <span>Ticket</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="antinuke" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="mr-2 h-6 w-6 text-purple-500" /> Antinuke Commands
            </h2>
            <CommandList commands={filterCommands(antinukeCommands)} />
          </TabsContent>

          <TabsContent value="moderation" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="mr-2 h-6 w-6 text-purple-500" /> Moderation Commands
            </h2>
            <CommandList commands={filterCommands(moderationCommands)} />
          </TabsContent>

          <TabsContent value="giveaway" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Gift className="mr-2 h-6 w-6 text-pink-500" /> Giveaway Commands
            </h2>
            <CommandList commands={filterCommands(giveawayCommands)} />
          </TabsContent>

          <TabsContent value="selfroles" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <UserPlus className="mr-2 h-6 w-6 text-cyan-500" /> Self-Roles Commands
            </h2>
            <CommandList commands={filterCommands(selfRoleCommands)} />
          </TabsContent>

          <TabsContent value="customrole" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <UserCog className="mr-2 h-6 w-6 text-indigo-500" /> Custom Role Commands
            </h2>
            <CommandList commands={filterCommands(customRoleCommands)} />
          </TabsContent>

          <TabsContent value="ignore" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <EyeOff className="mr-2 h-6 w-6 text-amber-500" /> Ignore Commands
            </h2>
            <CommandList commands={filterCommands(ignoreCommands)} />
          </TabsContent>

          <TabsContent value="ticket" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Ticket className="mr-2 h-6 w-6 text-green-500" /> Ticket Commands
            </h2>
            <CommandList commands={filterCommands(ticketCommands)} />
          </TabsContent>

          <TabsContent value="utility" className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Terminal className="mr-2 h-6 w-6 text-blue-500" /> Utility Commands
            </h2>
            <CommandList commands={filterCommands(utilityCommands)} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
