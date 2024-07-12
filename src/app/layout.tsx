import './globals.css';
import { ClientComponent } from './Components/ClientComponent';
import { AppProvider } from '../../context/AppContext.js';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
          <AppProvider>
            <ClientComponent>
                {children}
            </ClientComponent>
          </AppProvider>
      </body>
    </html>
  );
}
