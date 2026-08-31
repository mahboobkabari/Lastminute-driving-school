import { Header } from './Header';
import { SiteFooter } from './SiteFooter';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[72px] sm:pt-[84px]">{children}</div>
      <SiteFooter />
    </>
  );
}
