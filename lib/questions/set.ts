import type { Question } from "../types"

export const setQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Cuál es la característica principal de un Set?",
      options: [
        "Permite elementos duplicados",
        "No permite elementos duplicados",
        "Mantiene orden de inserción",
        "Es thread-safe",
      ],
      correctAnswer: "No permite elementos duplicados",
    },
    {
      question: "¿Qué método se usa para verificar si un elemento existe en un Set?",
      options: ["exists()", "contains()", "has()", "find()"],
      correctAnswer: "contains()",
    },
    {
      question: "¿Cómo se agrega un elemento a un Set?",
      options: ["insert()", "add()", "put()", "append()"],
      correctAnswer: "add()",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la diferencia entre HashSet y TreeSet?",
      options: [
        "HashSet mantiene orden, TreeSet no",
        "TreeSet mantiene orden natural, HashSet no",
        "HashSet permite duplicados, TreeSet no",
        "No hay diferencia",
      ],
      correctAnswer: "TreeSet mantiene orden natural, HashSet no",
    },
    {
      question: "¿Qué Set mantiene el orden de inserción?",
      options: ["HashSet", "TreeSet", "LinkedHashSet", "Ninguno"],
      correctAnswer: "LinkedHashSet",
    },
    {
      question: "¿Cuál permite elementos null?",
      options: ["HashSet", "TreeSet", "LinkedHashSet", "HashSet y LinkedHashSet"],
      correctAnswer: "HashSet y LinkedHashSet",
    },
  ],
  avanzado: [
    {
      question: "¿Cuál es la complejidad temporal de búsqueda en HashSet?",
      options: ["O(1) promedio", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1) promedio",
    },
    {
      question: "¿Cuál es la complejidad temporal de búsqueda en TreeSet?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(log n)",
    },
    {
      question: "¿Cuál es la estructura de datos subyacente de TreeSet?",
      options: ["Array", "Lista enlazada", "Tabla hash", "Árbol rojo-negro"],
      correctAnswer: "Árbol rojo-negro",
    },
  ],
}
