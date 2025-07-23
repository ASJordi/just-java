import type { Question } from "../types"

export const constructorsQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Cuál es el propósito principal de un constructor?",
      options: ["Destruir objetos", "Inicializar objetos", "Copiar objetos", "Comparar objetos"],
      correctAnswer: "Inicializar objetos",
    },
    {
      question: "¿Cómo se llama un constructor?",
      options: [
        "Tiene el mismo nombre que la clase",
        "Se llama 'constructor'",
        "Se llama 'init'",
        "Puede tener cualquier nombre",
      ],
      correctAnswer: "Tiene el mismo nombre que la clase",
    },
    {
      question: "¿Puede un constructor tener tipo de retorno?",
      options: ["Sí, siempre", "No, nunca", "Solo void", "Solo Object"],
      correctAnswer: "No, nunca",
    },
  ],
  intermedio: [
    {
      question: "¿Cuándo se llama automáticamente al constructor por defecto?",
      options: [
        "Siempre que se crea una clase",
        "Solo cuando no se define ningún constructor explícito",
        "Cuando se usa la palabra clave 'default'",
        "Nunca se llama automáticamente",
      ],
      correctAnswer: "Solo cuando no se define ningún constructor explícito",
    },
    {
      question: "¿Qué hace la llamada 'this()' en un constructor?",
      options: [
        "Llama al constructor de la clase padre",
        "Llama a otro constructor de la misma clase",
        "Inicializa las variables de instancia",
        "Crea una nueva instancia",
      ],
      correctAnswer: "Llama a otro constructor de la misma clase",
    },
    {
      question: "¿Cuántos constructores puede tener una clase?",
      options: ["Solo uno", "Máximo dos", "Ilimitados (sobrecarga)", "Depende del número de variables"],
      correctAnswer: "Ilimitados (sobrecarga)",
    },
  ],
  avanzado: [
    {
      question: "¿Cuál es el propósito principal de un constructor privado?",
      options: [
        "Evitar que se cree la clase",
        "Implementar el patrón Singleton",
        "Mejorar el rendimiento",
        "Ocultar variables de instancia",
      ],
      correctAnswer: "Implementar el patrón Singleton",
    },
    {
      question: "¿Cuál es el orden correcto de inicialización en Java?",
      options: [
        "Variables de instancia, constructor, bloques de inicialización",
        "Constructor, variables de instancia, bloques de inicialización",
        "Bloques de inicialización, variables de instancia, constructor",
        "Variables de instancia, bloques de inicialización, constructor",
      ],
      correctAnswer: "Variables de instancia, bloques de inicialización, constructor",
    },
    {
      question: "¿Qué sucede si no se llama explícitamente a super() en un constructor?",
      options: [
        "Se produce un error de compilación",
        "Se llama automáticamente a super()",
        "No se inicializa la clase padre",
        "Se usa el constructor por defecto del hijo",
      ],
      correctAnswer: "Se llama automáticamente a super()",
    },
  ],
}
