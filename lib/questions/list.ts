import type { Question } from "../types"

export const listQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Qué método se usa para agregar un elemento al final de una List?",
      options: ["append()", "add()", "insert()", "push()"],
      correctAnswer: "add()",
    },
    {
      question: "¿Cómo se obtiene un elemento en una posición específica?",
      options: ["get(index)", "elementAt(index)", "item(index)", "at(index)"],
      correctAnswer: "get(index)",
    },
    {
      question: "¿Cuál es la capacidad inicial por defecto de ArrayList?",
      options: ["10", "16", "32", "100"],
      correctAnswer: "10",
    },
    {
      question: "¿Qué método se usa para eliminar un elemento por índice?",
      options: ["delete(index)", "remove(index)", "erase(index)", "pop(index)"],
      correctAnswer: "remove(index)",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la diferencia principal entre ArrayList y LinkedList?",
      options: [
        "ArrayList usa arrays dinámicos, LinkedList usa nodos enlazados",
        "ArrayList es más lento para acceso aleatorio",
        "LinkedList no permite duplicados",
        "No hay diferencia significativa",
      ],
      correctAnswer: "ArrayList usa arrays dinámicos, LinkedList usa nodos enlazados",
    },
    {
      question: "¿Cuál es mejor para inserción frecuente en el medio de la lista?",
      options: ["ArrayList", "LinkedList", "Vector", "Son equivalentes"],
      correctAnswer: "LinkedList",
    },
    {
      question: "¿Qué implementación de List es thread-safe por defecto?",
      options: ["ArrayList", "LinkedList", "Vector", "Ninguna"],
      correctAnswer: "Vector",
    },
    {
      question: "¿Qué sucede cuando ArrayList alcanza su capacidad máxima?",
      options: [
        "Lanza una excepción",
        "Se redimensiona automáticamente",
        "Sobrescribe elementos existentes",
        "Se convierte en LinkedList",
      ],
      correctAnswer: "Se redimensiona automáticamente",
    },
  ],
  avanzado: [
    {
      question: "¿Cuál es la complejidad temporal de acceso por índice en ArrayList?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1)",
    },
    {
      question: "¿Cuál es la complejidad temporal de inserción al inicio en LinkedList?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1)",
    },
    {
      question: "¿En qué factor se incrementa la capacidad de ArrayList cuando se redimensiona?",
      options: ["1.5x", "2x", "1.5x (aprox)", "Depende de la JVM"],
      correctAnswer: "1.5x (aprox)",
    },
    {
      question: "¿Cuál es la complejidad de eliminar un elemento en el medio de ArrayList?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: "O(n)",
    },
  ],
}
