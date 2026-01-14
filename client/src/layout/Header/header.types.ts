export interface HeaderNavItem {
  label: string;
  route: string;
}

export interface HeaderProps {
  appName: string;
  navItems: HeaderNavItem[];
  demoBadgeLabel: string;
}
