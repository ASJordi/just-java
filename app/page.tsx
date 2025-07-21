"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Trophy, BarChart3, Code, Database, List, Settings, Shield, GitBranch, Menu } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const javaTopics = [
    {
      name: "Strings",
      description: "Manipulación de cadenas y StringBuilder",
      icon: Code,
      color: "bg-gradient-to-br from-blue-500/10 to-blue-600/20",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200 dark:border-blue-800",
      category: "strings",
    },
    {
      name: "Arrays",
      description: "Arrays y algoritmos de ordenamiento",
      icon: Database,
      color: "bg-gradient-to-br from-green-500/10 to-green-600/20",
      iconColor: "text-green-600",
      borderColor: "border-green-200 dark:border-green-800",
      category: "arrays",
    },
    {
      name: "List Collections",
      description: "ArrayList, LinkedList y Vector",
      icon: List,
      color: "bg-gradient-to-br from-purple-500/10 to-purple-600/20",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200 dark:border-purple-800",
      category: "list",
    },
    {
      name: "POO",
      description: "Clases, herencia y polimorfismo",
      icon: Settings,
      color: "bg-gradient-to-br from-orange-500/10 to-orange-600/20",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200 dark:border-orange-800",
      category: "oop",
    },
    {
      name: "Excepciones",
      description: "Try-catch y manejo de errores",
      icon: Shield,
      color: "bg-gradient-to-br from-red-500/10 to-red-600/20",
      iconColor: "text-red-600",
      borderColor: "border-red-200 dark:border-red-800",
      category: "exceptions",
    },
    {
      name: "Streams",
      description: "API de Streams y programación funcional",
      icon: GitBranch,
      color: "bg-gradient-to-br from-violet-500/10 to-violet-600/20",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200 dark:border-violet-800",
      category: "streams",
    },
  ]

  const features = [
    {
      icon: Coffee,
      title: "Preguntas Generadas por IA",
      description:
        "Nuestra IA crea preguntas originales de Java que se adaptan a tu nivel de conocimiento y ritmo de aprendizaje",
    },
    {
      icon: BarChart3,
      title: "Aprendizaje Personalizado",
      description:
        "Diferentes niveles de dificultad y categorías específicas para enfocar tu aprendizaje en áreas específicas de Java",
    },
    {
      icon: Trophy,
      title: "Práctica Instantánea",
      description: "Comienza a practicar inmediatamente sin necesidad de registro. Acceso directo a todos los quizzes",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
              <h1 className="text-xl sm:text-2xl font-bold">JustJava</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6" role="navigation" aria-label="Navegación principal">
              <Link href="/" className="font-medium hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/categories" className="font-medium hover:text-primary transition-colors">
                Categorías
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav
              id="mobile-menu"
              className="md:hidden pb-4 border-t mt-4 pt-4"
              role="navigation"
              aria-label="Navegación móvil"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/categories"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categorías
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Full Viewport */}
        <section
          className="relative min-h-[calc(100vh-73px)] sm:min-h-[calc(100vh-81px)] flex items-center overflow-hidden"
          aria-labelledby="hero-heading"
          style={{
            minHeight: "calc(100dvh - 73px)", // Para móviles modernos
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" aria-hidden="true" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-full py-8 sm:py-12">
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  Domina <span className="text-primary">Java</span> con Quizzes{" "}
                  <span className="text-accent">Inteligentes</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  JustJava genera preguntas desafiantes sobre Strings, Arrays, Collections, POO y más conceptos de Java,
                  adaptándose a tu nivel de conocimiento para una experiencia de aprendizaje personalizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                  <Link href="/quiz/new" passHref>
                    <Button size="lg" className="gap-2 w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                      <Coffee className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                      Comenzar Quiz
                    </Button>
                  </Link>
                  <Link href="/categories">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Explorar Categorías
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                  <div className="absolute top-4 sm:top-8 lg:top-10 left-4 sm:left-8 lg:left-10 w-28 sm:w-36 lg:w-40 h-28 sm:h-36 lg:h-40 bg-white rounded-lg shadow-lg p-3 sm:p-4 rotate-6 animate-float">
                    <div className="h-2.5 sm:h-3 lg:h-4 w-20 sm:w-28 lg:w-32 bg-primary/20 rounded mb-1.5 sm:mb-2"></div>
                    <div className="h-2 sm:h-2.5 lg:h-3 w-16 sm:w-24 lg:w-28 bg-primary/20 rounded mb-2 sm:mb-3 lg:mb-4"></div>
                    <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                      <div className="h-2 sm:h-2.5 lg:h-3 w-full bg-accent/30 rounded"></div>
                      <div className="h-2 sm:h-2.5 lg:h-3 w-full bg-accent/30 rounded"></div>
                      <div className="h-2 sm:h-2.5 lg:h-3 w-full bg-accent/30 rounded"></div>
                    </div>
                    <div className="text-xs font-mono text-primary mt-1.5 sm:mt-2">String[] args</div>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 right-4 sm:right-8 lg:right-10 w-32 sm:w-44 lg:w-48 h-32 sm:h-44 lg:h-48 bg-white rounded-lg shadow-lg p-3 sm:p-4 -rotate-3 animate-bounce-slow">
                    <div className="h-2.5 sm:h-3 lg:h-4 w-20 sm:w-28 lg:w-32 bg-primary/20 rounded mb-1.5 sm:mb-2"></div>
                    <div className="h-2 sm:h-2.5 lg:h-3 w-16 sm:w-24 lg:w-28 bg-primary/20 rounded mb-2 sm:mb-3 lg:mb-4"></div>
                    <div className="grid grid-cols-2 gap-1 sm:gap-1.5 lg:gap-2">
                      <div className="h-5 sm:h-7 lg:h-8 w-full bg-accent/30 rounded"></div>
                      <div className="h-5 sm:h-7 lg:h-8 w-full bg-accent/30 rounded"></div>
                      <div className="h-5 sm:h-7 lg:h-8 w-full bg-accent/30 rounded"></div>
                      <div className="h-5 sm:h-7 lg:h-8 w-full bg-accent/30 rounded"></div>
                    </div>
                    <div className="text-xs font-mono text-accent mt-1.5 sm:mt-2">public class</div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Coffee className="h-10 sm:h-14 lg:h-16 w-10 sm:w-14 lg:w-16 text-primary" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/50" aria-labelledby="features-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Características Poderosas
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                JustJava combina IA de vanguardia con gamificación para crear una experiencia única de aprendizaje de
                Java
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-card rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Java Topics Section */}
        <section className="py-12 sm:py-16 md:py-20" aria-labelledby="topics-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 sm:mb-16">
              <h2 id="topics-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Temas Populares de Java
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Comienza con los temas más fundamentales de Java. Explora desde conceptos básicos hasta temas avanzados
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {javaTopics.map((topic) => (
                <Link key={topic.name} href={`/quiz/new?category=${topic.category}`}>
                  <Card
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border ${topic.borderColor} overflow-hidden h-full`}
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      <div
                        className={`${topic.color} p-4 sm:p-6 transition-all duration-300 group-hover:scale-105 flex-1`}
                      >
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <topic.icon
                            className={`h-6 w-6 sm:h-8 sm:w-8 ${topic.iconColor} transition-transform duration-300 group-hover:scale-110`}
                            aria-hidden="true"
                          />
                          <Badge variant="secondary" className="text-xs">
                            Quiz
                          </Badge>
                        </div>
                        <h3 className="font-bold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                          {topic.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-card">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Comenzar práctica</span>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Coffee className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Link href="/categories">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent w-full sm:w-auto">
                  <Coffee className="h-5 w-5" aria-hidden="true" />
                  Ver Todas las Categorías
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Dominar Java?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Comienza tu primer quiz de Java ahora y descubre el poder del aprendizaje generado por IA
            </p>
            <Link href="/quiz/new">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                <Coffee className="h-5 w-5" aria-hidden="true" />
                Comenzar Quiz
              </Button>
            </Link>
          </div>
        </section>
      </main>

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
    </div>
  )
}
