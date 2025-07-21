import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Heart,
  Code,
  Zap,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Lightbulb,
  Target,
  Users,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Coffee className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">JustJava</h1>
              </div>
            </Link>
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/categories" className="font-medium hover:text-primary">
              Categorías
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Coffee className="h-16 w-16 text-primary" />
                <h1 className="text-5xl font-bold">JustJava</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Una plataforma de aprendizaje interactiva diseñada para ayudarte a dominar Java a través de quizzes
                inteligentes y personalizados.
              </p>
            </div>

            {/* About JustJava */}
            <div className="space-y-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    ¿Qué es JustJava?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-lg">
                    JustJava es una aplicación web moderna que revoluciona la forma de aprender Java. Utilizando
                    inteligencia artificial y un diseño centrado en el usuario, ofrecemos una experiencia de aprendizaje
                    personalizada que se adapta a tu ritmo y nivel de conocimiento.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">IA Inteligente</h3>
                      <p className="text-sm text-muted-foreground">
                        Preguntas generadas dinámicamente que se adaptan a tu progreso
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Aprendizaje Enfocado</h3>
                      <p className="text-sm text-muted-foreground">
                        15 categorías específicas desde conceptos básicos hasta avanzados
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Para Todos</h3>
                      <p className="text-sm text-muted-foreground">
                        Desde principiantes hasta desarrolladores experimentados
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Code className="h-8 w-8 text-primary" />
                    Características Principales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          ✨
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Categorías Especializadas</h4>
                          <p className="text-sm text-muted-foreground">
                            15 categorías que cubren desde Strings y Arrays hasta Concurrencia y JDBC
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          🎯
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Dificultad Adaptativa</h4>
                          <p className="text-sm text-muted-foreground">
                            Niveles básico, intermedio, avanzado y modo adaptativo
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          ⏱️
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Flexibilidad Total</h4>
                          <p className="text-sm text-muted-foreground">
                            Configura número de preguntas y límites de tiempo según tus necesidades
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          📊
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Seguimiento de Progreso</h4>
                          <p className="text-sm text-muted-foreground">
                            Estadísticas detalladas y retroalimentación inmediata
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          🚀
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Sin Registro</h4>
                          <p className="text-sm text-muted-foreground">
                            Comienza a practicar inmediatamente sin necesidad de crear cuenta
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          🌙
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Modo Oscuro</h4>
                          <p className="text-sm text-muted-foreground">
                            Interfaz adaptable para sesiones de estudio prolongadas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Developer Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="h-8 w-8 text-red-500" />
                  Sobre el Desarrollador
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">ASJordi</h3>
                      <p className="text-muted-foreground">
                        Desarrollador Full Stack apasionado por la educación tecnológica y la creación de herramientas
                        que faciliten el aprendizaje de programación. Con experiencia en desarrollo web moderno y una
                        visión clara de cómo la tecnología puede transformar la educación.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tecnologías Utilizadas en JustJava:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Next.js 15</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">Shadcn/ui</Badge>
                        <Badge variant="outline">Lucide Icons</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground italic">
                        "Mi objetivo es hacer que el aprendizaje de Java sea accesible, divertido y efectivo para
                        desarrolladores de todos los niveles. JustJava representa mi compromiso con la educación
                        tecnológica de calidad."
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 min-w-[200px]">
                    <h4 className="font-semibold">Conecta conmigo:</h4>
                    <div className="space-y-3">
                      <a
                        href="https://asjordi.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Sitio Web</div>
                          <div className="text-sm text-muted-foreground">asjordi.dev</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a
                        href="https://github.com/ASJordi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <div>
                          <div className="font-medium">GitHub</div>
                          <div className="text-sm text-muted-foreground">@ASJordi</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a
                        href="https://linkedin.com/in/asjordi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-sm text-muted-foreground">@asjordi</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a
                        href="mailto:dev@asjordi.dev"
                        className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">dev@asjordi.dev</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="text-center">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar tu viaje en Java?</h3>
                <p className="text-muted-foreground mb-6">
                  Únete a miles de desarrolladores que ya están mejorando sus habilidades con JustJava
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quiz/new">
                    <Button size="lg" className="gap-2">
                      <Coffee className="h-5 w-5" />
                      Comenzar Quiz
                    </Button>
                  </Link>
                  <Link href="/categories">
                    <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                      <Code className="h-5 w-5" />
                      Explorar Categorías
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">JustJava</span>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                Acerca de
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacidad
              </Link>
              <a href="mailto:dev@asjordi.dev" className="text-muted-foreground hover:text-primary">
                Contacto
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} JustJava. Desarrollado con ☕ por{" "}
            <a
              href="https://asjordi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              ASJordi
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
