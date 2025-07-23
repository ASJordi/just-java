import type { Question } from "../types"

export const streamsQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Qué versión de Java introdujo Streams?",
      options: ["Java 7", "Java 8", "Java 9", "Java 11"],
      correctAnswer: "Java 8",
    },
    {
      question: "¿Cómo se crea un Stream a partir de una List?",
      options: ["list.stream()", "Stream.of(list)", "new Stream(list)", "list.toStream()"],
      correctAnswer: "list.stream()",
    },
    {
      question: "¿Qué hace el método filter() en Streams?",
      options: ["Transforma elementos", "Filtra elementos según un predicado", "Ordena elementos", "Cuenta elementos"],
      correctAnswer: "Filtra elementos según un predicado",
    },
    {
      question: "¿Cuál es una operación terminal en Streams?",
      options: ["map()", "filter()", "collect()", "peek()"],
      correctAnswer: "collect()",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la sintaxis correcta de una expresión lambda?",
      options: ["(x) -> x * 2", "x => x * 2", "lambda x: x * 2", "function(x) { return x * 2; }"],
      correctAnswer: "(x) -> x * 2",
    },
    {
      question: "¿Qué método convierte un Stream a List?",
      options: ["toList()", "collect(Collectors.toList())", "asList()", "convertToList()"],
      correctAnswer: "collect(Collectors.toList())",
    },
    {
      question: "¿Cuál es una operación intermedia en Streams?",
      options: ["collect()", "forEach()", "map()", "reduce()"],
      correctAnswer: "map()",
    },
    {
      question: "¿Qué hace el método distinct() en Streams?",
      options: ["Ordena elementos", "Elimina elementos duplicados", "Cuenta elementos únicos", "Agrupa elementos"],
      correctAnswer: "Elimina elementos duplicados",
    },
  ],
  avanzado: [
    {
      question: "¿Qué hace el método reduce() en Streams?",
      options: [
        "Filtra elementos",
        "Transforma elementos",
        "Combina elementos en un solo resultado",
        "Ordena elementos",
      ],
      correctAnswer: "Combina elementos en un solo resultado",
    },
    {
      question: "¿Cuál es la diferencia entre map() y flatMap()?",
      options: [
        "No hay diferencia",
        "map() transforma 1:1, flatMap() aplana streams anidados",
        "flatMap() es más rápido",
        "map() solo funciona con números",
      ],
      correctAnswer: "map() transforma 1:1, flatMap() aplana streams anidados",
    },
    {
      question: "¿Qué es un Collector personalizado?",
      options: [
        "Una función lambda",
        "Una implementación de la interfaz Collector",
        "Un método de Stream",
        "No existe en Java",
      ],
      correctAnswer: "Una implementación de la interfaz Collector",
    },
    {
      question: "¿Cuál es la diferencia entre Stream.of() y Arrays.stream()?",
      options: [
        "No hay diferencia",
        "Stream.of() acepta varargs, Arrays.stream() acepta arrays",
        "Arrays.stream() es más rápido",
        "Stream.of() no existe",
      ],
      correctAnswer: "Stream.of() acepta varargs, Arrays.stream() acepta arrays",
    },
  ],
}
