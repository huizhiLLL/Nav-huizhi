import { useSettings } from "@/hooks/use-settings";
import Link from "next/link";

export function Footer() {
  const { settings } = useSettings('basic');

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4">
          {/* 左侧版权信息 */}
          {(
            <div className="text-sm text-muted-foreground order-first md:order-none flex items-center gap-1">
              <img src="/logo.svg" alt="Pintree Logo" className="h-4 w-4" />
              Powered by{' '}
              <Link
                href="https://pintree.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/90 transition-colors"
              >
                Pintree
              </Link>
            </div>
          )}

          {/* 中间版权信息 */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <span>{settings.copyrightText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}