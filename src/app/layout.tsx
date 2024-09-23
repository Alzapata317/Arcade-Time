import './globals.css';
import { ClientComponent } from './Components/ClientComponent';
import { AppProvider } from '../../context/AppContext.js';
import ScrollToTop from './Components/ScrollToTop';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
          <ScrollToTop />
          <AppProvider>
            <ClientComponent>
                {children}
            </ClientComponent>
          </AppProvider>
      </body>
    </html>
  );
}
