"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Coffee, Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Illustration */}
            <div className="relative mb-8">
              <div className="relative w-full h-[300px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Floating Coffee Cups */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center rotate-12 animate-bounce-slow">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute top-12 right-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center -rotate-12 animate-float">
                  <Coffee className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute bottom-8 left-16 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center rotate-45 animate-bounce-slow">
                  <Coffee className="h-7 w-7 text-primary/70" />
                </div>

                {/* Main 404 Display */}
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</div>
                  <div className="text-2xl font-mono text-muted-foreground">{"// Página no encontrada"}</div>
                </div>
              </div>
            </div>

            {/* Error Message Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center justify-center gap-2">
                  <Search className="h-8 w-8 text-primary" />
                  ¡Oops! Página no encontrada
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Parece que la página que buscas se ha perdido en el código. Tal vez fue refactorizada o nunca existió.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-red-500">{"Error: NullPointerException"}</div>
                  <div className="text-muted-foreground">{"  at JustJava.findPage(url)"}</div>
                  <div className="text-muted-foreground">{"  at Router.navigate(path)"}</div>
                </div>
                <p className="text-muted-foreground">
                  No te preocupes, puedes volver al inicio y continuar explorando nuestros quizzes de Java.
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Home className="h-5 w-5" />
                  Volver al Inicio
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                  <Coffee className="h-5 w-5" />
                  Ver Categorías
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="gap-2 w-full sm:w-auto"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5" />
                Página Anterior
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">¿Buscabas algo específico?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/quiz/new" className="text-primary hover:underline">
                  Crear Quiz
                </Link>
                <Link href="/categories" className="text-primary hover:underline">
                  Categorías
                </Link>
                <Link href="/quiz/new?category=strings" className="text-primary hover:underline">
                  Quiz de Strings
                </Link>
                <Link href="/quiz/new?category=oop" className="text-primary hover:underline">
                  Quiz de POO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
