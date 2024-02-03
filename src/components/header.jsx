// import { useNavigate } from 'react-router-dom';

import { Home, Banknote, CreditCard, Moon, Sun } from 'lucide-react';

import { NavLink } from './nav-link';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export function Header() {
    const { setTheme } = useTheme();
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <Banknote className="h-6 w-6" />

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to="/">
                        <Home className="h-4 w-4" />
                        Início
                    </NavLink>
                    <NavLink to="/cards">
                        <CreditCard className="h-4 w-4" />
                        Cartões
                    </NavLink>
                    <NavLink to="/transactions">
                        <Banknote className="h-4 w-4" />
                        Transações
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <ThemeToggle />
                        <AccountMenu /> */}
                </div>
            </div>
        </div>
    );
}
