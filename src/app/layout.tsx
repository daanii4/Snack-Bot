import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col min-h-screen bg-gray-900 text-white">
          <header className="bg-gray-800 p-4 text-center text-2xl font-bold">
            SnackBot Control Center
          </header>
          <nav className="bg-gray-700 p-4 flex justify-center space-x-4">
            <a href="/" className="text-blue-400 hover:underline">
              Home
            </a>
            <a href="/bluetooth" className="text-blue-400 hover:underline">
              Bluetooth
            </a>
            <a href="/commands" className="text-blue-400 hover:underline">
              Commands
            </a>
            <a href="/visualization" className="text-blue-400 hover:underline">
              Visualization
            </a>
          </nav>
          <section className="flex-grow p-4">{children}</section>
          <footer className="bg-gray-800 p-2 text-center">
            © SnackBot 2024
          </footer>
        </main>
      </body>
    </html>
  );
}
