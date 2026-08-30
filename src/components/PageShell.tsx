import { Header } from './Header';
import { SiteFooter } from './SiteFooter';

export function PageShell({ children }: { children: React.ReactNode }) { return <><Header/><div className="pt-[76px]">{children}</div><SiteFooter/></>; }
