import Link from "next/link"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-8 sm:py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
            <span className="text-lg sm:text-xl font-bold">JustJava</span>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
            role="navigation"
            aria-label="Enlaces del pie de página"
          >
            <Link
              href="/about"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Acerca de
            </Link>
            <Link
              href="/privacy"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <a
              href="mailto:dev@asjordi.dev"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
        <div className="mt-6 sm:mt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} JustJava. Desarrollado con ☕ por{" "}
            <a
              href="https://asjordi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              ASJordi
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
