import './globals.css'; // This connects your CSS file!

export const metadata = {
    title: 'Celesta 2026 Registration',
    description: 'Workshop registration portal for Celesta 2026',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}