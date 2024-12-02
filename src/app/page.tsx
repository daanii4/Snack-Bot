export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to SnackBot Control Center</h1>
      <p className="text-lg mb-6">Manage your SnackBot and explore its features.</p>
      <div className="space-x-4">
        <a
          href="/bluetooth"
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Bluetooth
        </a>
        <a
          href="/commands"
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Commands
        </a>
        <a
          href="/visualization"
          className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
        >
          Visualization
        </a>
      </div>
    </div>
  );
}
