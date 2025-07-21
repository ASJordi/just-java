import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Code,
  Database,
  Layers,
  Zap,
  Shield,
  GitBranch,
  Settings,
  List,
  Hash,
  Map,
  TicketIcon as Queue,
} from "lucide-react"
import { getQuestionCount } from "@/lib/quiz-generator"

const categories = [
  {
    id: "strings",
    name: "Strings",
    description: "Manipulación de cadenas, métodos de String, StringBuilder y expresiones regulares",
    icon: Code,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
  },
  {
    id: "arrays",
    name: "Arrays",
    description: "Arrays unidimensionales, multidimensionales, métodos de Arrays y algoritmos básicos",
    icon: Database,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
  },
  {
    id: "list",
    name: "List Collections",
    description: "ArrayList, LinkedList, Vector y sus características, rendimiento y casos de uso",
    icon: List,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
  },
  {
    id: "set",
    name: "Set Collections",
    description: "HashSet, TreeSet, LinkedHashSet y manejo de elementos únicos",
    icon: Hash,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
  },
  {
    id: "map",
    name: "Map Collections",
    description: "HashMap, TreeMap, LinkedHashMap, Hashtable y estructuras clave-valor",
    icon: Map,
    color: "bg-cyan-100 dark:bg-cyan-900",
    iconColor: "text-cyan-500",
  },
  {
    id: "queue",
    name: "Queue Collections",
    description: "ArrayDeque, LinkedList, PriorityQueue y estructuras FIFO",
    icon: Queue,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
  },
  {
    id: "oop",
    name: "Programación Orientada a Objetos",
    description: "Clases, objetos, herencia, polimorfismo, encapsulación y abstracción",
    icon: Settings,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
  },
  {
    id: "exceptions",
    name: "Manejo de Excepciones",
    description: "Try-catch, throw, throws, excepciones personalizadas y mejores prácticas",
    icon: Shield,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
  },
  {
    id: "streams",
    name: "Streams y Lambda",
    description: "API de Streams, expresiones lambda, programación funcional y operaciones de flujo",
    icon: GitBranch,
    color: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-500",
  },
  {
    id: "concurrency",
    name: "Concurrencia",
    description: "Threads, sincronización, ExecutorService, CompletableFuture y programación concurrente",
    icon: Zap,
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
  },
  {
    id: "generics",
    name: "Generics",
    description: "Tipos genéricos, wildcards, bounded types y type erasure en Java",
    icon: Layers,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
  },
  {
    id: "constructors",
    name: "Constructores",
    description: "Constructores por defecto, sobrecarga, constructor chaining y patrones de inicialización",
    icon: Settings,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
  },
  {
    id: "datatypes",
    name: "Tipos de Datos",
    description: "Tipos primitivos, wrapper classes, boxing, unboxing y conversiones automáticas",
    icon: Database,
    color: "bg-slate-100 dark:bg-slate-900",
    iconColor: "text-slate-500",
  },
  {
    id: "jdbc",
    name: "JDBC",
    description: "Java Database Connectivity, conexiones, statements, transacciones y mejores prácticas",
    icon: Database,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
  },
  {
    id: "junit",
    name: "JUnit Testing",
    description: "Framework de testing, anotaciones, assertions, ciclo de vida de tests y buenas prácticas",
    icon: Shield,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Categorías de Java</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige entre una variedad de temas de Java para poner a prueba tu conocimiento y desafiarte con preguntas
              generadas por IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const questionCount = getQuestionCount(category.id)
              return (
                <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className={`${category.color}`}>
                    <div className="flex justify-between items-start">
                      <category.icon className={`h-8 w-8 ${category.iconColor}`} />
                      <Badge variant="secondary">
                        {questionCount} Pregunta{questionCount !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{category.name}</CardTitle>
                    <CardDescription className="text-foreground/70">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Básico</Badge>
                      <Badge variant="outline">Intermedio</Badge>
                      <Badge variant="outline">Avanzado</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/quiz/new?category=${category.id}`} className="w-full">
                      <Button className="w-full" disabled={questionCount === 0}>
                        {questionCount > 0 ? "Comenzar Quiz" : "Sin preguntas disponibles"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
