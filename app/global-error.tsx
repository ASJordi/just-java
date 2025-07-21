"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, RefreshCw, AlertTriangle } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center gap-2">
                <Coffee className="h-8 w-8 text-orange-500" />
                <h1 className="text-2xl font-bold">JustJava</h1>
              </div>
            </div>
          </header>

          <main className="flex-1 flex items-center justify-center py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                {/* Error Illustration */}
                <div className="relative mb-8">
                  <div className="relative w-full h-[200px] bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                      <div className="text-xl font-mono text-gray-600">{"// Error crítico del sistema"}</div>
                    </div>
                  </div>
                </div>

                {/* Error Message Card */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-3xl flex items-center justify-center gap-2 text-red-600">
                      <AlertTriangle className="h-8 w-8" />
                      Error Crítico
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-gray-600">
                      Ha ocurrido un error crítico en la aplicación que impide su funcionamiento normal.
                    </p>

                    <div className="bg-red-50 rounded-lg p-4 font-mono text-sm text-left">
                      <div className="text-red-600 font-semibold mb-2">System Error:</div>
                      <div className="text-red-500 text-xs break-all">
                        {error.message || "Critical system error occurred"}
                      </div>
                      {error.digest && <div className="text-red-400 text-xs mt-2">Error ID: {error.digest}</div>}
                    </div>

                    <p className="text-gray-600">Por favor, recarga la página para intentar recuperar la aplicación.</p>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gap-2 w-full sm:w-auto bg-orange-500 hover:bg-orange-600"
                    onClick={reset}
                  >
                    <RefreshCw className="h-5 w-5" />
                    Recargar Aplicación
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto bg-transparent"
                    onClick={() => (window.location.href = "/")}
                  >
                    <Coffee className="h-5 w-5" />
                    Ir al Inicio
                  </Button>
                </div>

                {/* Help Text */}
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                  <p>Si el problema persiste, por favor contacta al soporte técnico.</p>
                </div>
              </div>
            </div>
          </main>

          <footer className="bg-gray-50 border-t py-8">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">JustJava</span>
              </div>
              <div className="flex gap-8">
                <a href="/about" className="text-gray-500 hover:text-orange-500">
                  Acerca de
                </a>
                <a href="/privacy" className="text-gray-500 hover:text-orange-500">
                  Privacidad
                </a>
                <a href="mailto:dev@asjordi.dev" className="text-gray-500 hover:text-orange-500">
                  Contacto
                </a>
              </div>
              <div className="mt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} JustJava. Desarrollado con ☕ por{" "}
                <a
                  href="https://asjordi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline font-medium"
                >
                  ASJordi
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
