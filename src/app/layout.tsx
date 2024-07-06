import './globals.css';
import { ClientComponent } from './Components/ClientComponent';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ClientComponent>
          {children}
        </ClientComponent>
      </body>
    </html>
  );
}
