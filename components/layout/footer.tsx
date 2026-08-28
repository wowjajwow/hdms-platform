import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <p className="font-semibold text-white">{siteConfig.name}</p>
        <p className="mt-2">{siteConfig.description}</p>
        <address className="mt-4 not-italic text-zinc-500">{siteConfig.address}</address>
        <p className="mt-6">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
