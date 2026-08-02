import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <p className="font-semibold text-white">{siteConfig.name}</p>
        <p className="mt-2">{siteConfig.description}</p>
        <p className="mt-6">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
