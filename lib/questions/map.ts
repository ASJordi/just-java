import type { Question } from "../types"

export const mapQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Cuál es la característica principal de un Map?",
      options: [
        "Almacena solo valores",
        "Almacena pares clave-valor",
        "Permite claves duplicadas",
        "Es una lista ordenada",
      ],
      correctAnswer: "Almacena pares clave-valor",
    },
    {
      question: "¿Qué método se usa para obtener un valor de un Map?",
      options: ["getValue()", "get()", "retrieve()", "find()"],
      correctAnswer: "get()",
    },
    {
      question: "¿Qué método se usa para agregar un par clave-valor?",
      options: ["add()", "put()", "insert()", "set()"],
      correctAnswer: "put()",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la diferencia entre HashMap y Hashtable?",
      options: [
        "HashMap es sincronizado, Hashtable no",
        "Hashtable es sincronizado, HashMap no",
        "HashMap permite claves duplicadas",
        "No hay diferencia",
      ],
      correctAnswer: "Hashtable es sincronizado, HashMap no",
    },
    {
      question: "¿Qué Map mantiene el orden de inserción?",
      options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
      correctAnswer: "LinkedHashMap",
    },
    {
      question: "¿Qué sucede si se inserta una clave que ya existe en un Map?",
      options: [
        "Se lanza una excepción",
        "Se ignora la operación",
        "Se reemplaza el valor anterior",
        "Se crea una entrada duplicada",
      ],
      correctAnswer: "Se reemplaza el valor anterior",
    },
  ],
  avanzado: [
    {
      question: "¿Cuál es la complejidad temporal de búsqueda en HashMap?",
      options: ["O(1) promedio", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1) promedio",
    },
    {
      question: "¿Cuál es la complejidad temporal de búsqueda en TreeMap?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(log n)",
    },
    {
      question: "¿A partir de qué versión de Java, HashMap usa árboles para buckets con muchas colisiones?",
      options: ["Java 7", "Java 8", "Java 9", "Java 11"],
      correctAnswer: "Java 8",
    },
  ],
}
