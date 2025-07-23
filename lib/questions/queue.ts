import type { Question } from "../types"

export const queueQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Cuál es el principio de funcionamiento de una Queue?",
      options: ["LIFO (Last In, First Out)", "FIFO (First In, First Out)", "Random access", "Priority based"],
      correctAnswer: "FIFO (First In, First Out)",
    },
    {
      question: "¿Qué método se usa para agregar un elemento a una Queue?",
      options: ["add() u offer()", "push()", "insert()", "put()"],
      correctAnswer: "add() u offer()",
    },
    {
      question: "¿Qué método se usa para remover un elemento de una Queue?",
      options: ["remove() o poll()", "pop()", "delete()", "take()"],
      correctAnswer: "remove() o poll()",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la diferencia entre poll() y remove() en Queue?",
      options: [
        "No hay diferencia",
        "poll() retorna null si está vacía, remove() lanza excepción",
        "remove() retorna null si está vacía, poll() lanza excepción",
        "poll() es más rápido",
      ],
      correctAnswer: "poll() retorna null si está vacía, remove() lanza excepción",
    },
    {
      question: "¿Cuál es la implementación más común de Queue?",
      options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Stack"],
      correctAnswer: "ArrayDeque",
    },
    {
      question: "¿Qué permite hacer un Deque que no permite una Queue normal?",
      options: [
        "Insertar al final",
        "Insertar y remover en ambos extremos",
        "Acceso aleatorio",
        "Ordenamiento automático",
      ],
      correctAnswer: "Insertar y remover en ambos extremos",
    },
  ],
  avanzado: [
    {
      question: "¿Qué característica especial tiene PriorityQueue?",
      options: [
        "Es thread-safe",
        "Mantiene elementos ordenados por prioridad",
        "Permite elementos duplicados",
        "Es más rápida que otras implementaciones",
      ],
      correctAnswer: "Mantiene elementos ordenados por prioridad",
    },
    {
      question: "¿Cuál es la complejidad temporal de inserción en PriorityQueue?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: "O(log n)",
    },
    {
      question: "¿Qué estructura de datos usa PriorityQueue internamente?",
      options: ["Array", "Lista enlazada", "Heap binario", "Árbol rojo-negro"],
      correctAnswer: "Heap binario",
    },
  ],
}
