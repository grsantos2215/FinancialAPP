import './index.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { ThemeProvider } from './components/theme-provider';
import { queryClient } from './lib/react-query';
import { router } from './routes';

export default function App() {
    return (
        <HelmetProvider>
            <Helmet titleTemplate="%s | financial.app" />
            <ThemeProvider defaultTheme="light" storageKey="financial-theme">
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                    <Toaster richColors />
                </QueryClientProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}
