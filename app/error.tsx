"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Coffee, RefreshCw, Home, AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Illustration */}
            <div className="relative mb-8">
              <div className="relative w-full h-[250px] bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center rotate-12 animate-bounce-slow">
                  <Coffee className="h-8 w-8 text-primary opacity-50" />
                </div>

                <div className="text-center">
                  <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <div className="text-2xl font-mono text-muted-foreground">{"// Error inesperado"}</div>
                </div>
              </div>
            </div>

            {/* Error Message Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center justify-center gap-2 text-red-600">
                  <AlertTriangle className="h-8 w-8" />
                  ¡Algo salió mal!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Ha ocurrido un error inesperado en la aplicación. Nuestro equipo ha sido notificado automáticamente.
                </p>

                {process.env.NODE_ENV === "development" && (
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 font-mono text-sm text-left">
                    <div className="text-red-600 font-semibold mb-2">Error Details:</div>
                    <div className="text-red-500 text-xs break-all">{error.message || "Unknown error occurred"}</div>
                    {error.digest && <div className="text-red-400 text-xs mt-2">Digest: {error.digest}</div>}
                  </div>
                )}

                <p className="text-muted-foreground">
                  Puedes intentar recargar la página o volver al inicio para continuar.
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 w-full sm:w-auto" onClick={reset}>
                <RefreshCw className="h-5 w-5" />
                Intentar de Nuevo
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                  <Home className="h-5 w-5" />
                  Volver al Inicio
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="ghost" className="gap-2 w-full sm:w-auto">
                  <Coffee className="h-5 w-5" />
                  Ver Categorías
                </Button>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>
                Si el problema persiste, puedes{" "}
                <Link href="/" className="text-primary hover:underline">
                  contactar soporte
                </Link>{" "}
                o intentar más tarde.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
