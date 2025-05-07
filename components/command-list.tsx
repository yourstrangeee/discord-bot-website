interface CommandProps {
  commands: {
    name: string
    desc: string
  }[]
}

export default function CommandList({ commands }: CommandProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {commands.map((cmd, i) => (
        <div
          key={i}
          className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-blue-500/50 transition-colors"
        >
          <p className="font-medium text-white">{cmd.name}</p>
          <p className="text-gray-400 text-sm">{cmd.desc}</p>
        </div>
      ))}
    </div>
  )
}
