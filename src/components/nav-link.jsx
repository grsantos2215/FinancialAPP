import { ComponentProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavLink(props) {
    const { pathname } = useLocation();

    return <Link {...props} data-current={pathname === props.to} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[current=true]:text-foreground" />;
}
