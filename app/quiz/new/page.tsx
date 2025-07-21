"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, ArrowRight, Clock, BarChart3 } from "lucide-react"

export default function NewQuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedCategory = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState(preselectedCategory || "")
  const [selectedDifficulty, setSelectedDifficulty] = useState(preselectedCategory ? "intermedio" : "intermedio")
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10)
  const [selectedTimeLimit, setSelectedTimeLimit] = useState(60)

  const categories = [
    { id: "strings", name: "Strings", icon: '""' },
    { id: "arrays", name: "Arrays", icon: "[]" },
    { id: "list", name: "List", icon: "List" },
    { id: "set", name: "Set", icon: "Set" },
    { id: "map", name: "Map", icon: "Map" },
    { id: "queue", name: "Queue", icon: "Queue" },
    { id: "oop", name: "POO", icon: "class" },
    { id: "exceptions", name: "Excepciones", icon: "try" },
    { id: "streams", name: "Streams", icon: "→" },
    { id: "concurrency", name: "Concurrencia", icon: "⚡" },
    { id: "generics", name: "Generics", icon: "<T>" },
    { id: "constructors", name: "Constructores", icon: "new" },
    { id: "datatypes", name: "Tipos de Datos", icon: "int" },
    { id: "jdbc", name: "JDBC", icon: "DB" },
    { id: "junit", name: "JUnit", icon: "@Test" },
  ]

  const difficulties = [
    { id: "basico", name: "Básico", description: "Conceptos fundamentales y sintaxis básica" },
    { id: "intermedio", name: "Intermedio", description: "Desafíos de programación intermedios" },
    { id: "avanzado", name: "Avanzado", description: "Conceptos avanzados y resolución de problemas" },
    { id: "adaptativo", name: "Adaptativo", description: "Ajusta la dificultad según tu rendimiento" },
  ]

  const questionCounts = [5, 10, 15, 20]
  const timeLimits = [30, 60, 90, 120, 0] // 0 means no time limit

  const startQuiz = () => {
    if (!selectedCategory) {
      alert("Por favor selecciona una categoría antes de comenzar el quiz")
      return
    }

    console.log("Starting quiz with:", {
      category: selectedCategory,
      difficulty: selectedDifficulty,
      count: selectedQuestionCount,
      time: selectedTimeLimit,
    })

    router.push(
      `/quiz/play?category=${selectedCategory}&difficulty=${selectedDifficulty}&count=${selectedQuestionCount}&time=${selectedTimeLimit}`,
    )
  }

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

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Crea tu Quiz de Java</h1>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Selecciona Categoría</CardTitle>
                <CardDescription>Elige un tema de Java para tus preguntas del quiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className="h-auto py-4 flex flex-col gap-2"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="text-lg font-mono">{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Selecciona Dificultad</CardTitle>
                <CardDescription>Elige qué tan desafiante quieres que sea tu quiz</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty.id}
                      variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
                      className="h-auto py-4 px-4 flex flex-col gap-2 justify-start items-start text-left min-h-[100px] sm:min-h-[120px]"
                      onClick={() => setSelectedDifficulty(difficulty.id)}
                    >
                      <span className="font-bold text-sm sm:text-base">{difficulty.name}</span>
                      <span className="text-xs sm:text-sm font-normal leading-relaxed text-left whitespace-normal break-words">
                        {difficulty.description}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Número de Preguntas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {questionCounts.map((count) => (
                      <Button
                        key={count}
                        variant={selectedQuestionCount === count ? "default" : "outline"}
                        onClick={() => setSelectedQuestionCount(count)}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Límite de Tiempo (segundos)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {timeLimits.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTimeLimit === time ? "default" : "outline"}
                        onClick={() => setSelectedTimeLimit(time)}
                      >
                        {time === 0 ? "Sin Límite" : time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="gap-2" onClick={startQuiz} disabled={!selectedCategory}>
                Comenzar Quiz
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-4 text-center">
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
