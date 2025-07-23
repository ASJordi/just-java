import type { Question } from "../types"

export const concurrencyQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Cómo se crea un Thread en Java?",
      options: ["Extendiendo Thread", "Implementando Runnable", "Ambas formas son válidas", "Usando ExecutorService"],
      correctAnswer: "Ambas formas son válidas",
    },
    {
      question: "¿Qué método se llama para iniciar un Thread?",
      options: ["run()", "start()", "execute()", "begin()"],
      correctAnswer: "start()",
    },
    {
      question: "¿Qué palabra clave se usa para sincronización?",
      options: ["sync", "synchronized", "lock", "atomic"],
      correctAnswer: "synchronized",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la diferencia entre wait() y sleep()?",
      options: [
        "No hay diferencia",
        "wait() libera el lock, sleep() no",
        "sleep() libera el lock, wait() no",
        "Ambos liberan el lock",
      ],
      correctAnswer: "wait() libera el lock, sleep() no",
    },
    {
      question: "¿Qué interfaz se usa para tareas que devuelven un resultado?",
      options: ["Runnable", "Callable", "Future", "Task"],
      correctAnswer: "Callable",
    },
    {
      question: "¿Qué es volatile en Java?",
      options: [
        "Una variable que puede cambiar",
        "Una variable visible para todos los threads",
        "Una variable inmutable",
        "Una variable local",
      ],
      correctAnswer: "Una variable visible para todos los threads",
    },
  ],
  avanzado: [
    {
      question: "¿Qué es un deadlock?",
      options: [
        "Un thread que nunca termina",
        "Dos o más threads bloqueados esperándose mutuamente",
        "Un thread que consume mucha CPU",
        "Un error de compilación",
      ],
      correctAnswer: "Dos o más threads bloqueados esperándose mutuamente",
    },
    {
      question: "¿Qué es el patrón Producer-Consumer?",
      options: [
        "Un patrón de diseño para herencia",
        "Un patrón para comunicación entre threads",
        "Un patrón para manejo de excepciones",
        "No existe en Java",
      ],
      correctAnswer: "Un patrón para comunicación entre threads",
    },
    {
      question: "¿Cuál es la diferencia entre CountDownLatch y CyclicBarrier?",
      options: [
        "No hay diferencia",
        "CountDownLatch es de un solo uso, CyclicBarrier es reutilizable",
        "CyclicBarrier es más rápido",
        "CountDownLatch no existe",
      ],
      correctAnswer: "CountDownLatch es de un solo uso, CyclicBarrier es reutilizable",
    },
  ],
}
