import './globals.css'

export const metadata = {
  title: 'LearnOS — Student Dashboard',
  description: 'Your personal learning command center',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-base min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}