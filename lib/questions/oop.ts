import type { Question } from "../types"

export const oopQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Cuáles son los pilares de la POO?",
      options: [
        "Encapsulación, Herencia, Polimorfismo",
        "Encapsulación, Herencia, Polimorfismo, Abstracción",
        "Clases, Objetos, Métodos",
        "Variables, Métodos, Constructores",
      ],
      correctAnswer: "Encapsulación, Herencia, Polimorfismo, Abstracción",
    },
    {
      question: "¿Qué palabra clave se usa para la herencia en Java?",
      options: ["inherits", "extends", "implements", "super"],
      correctAnswer: "extends",
    },
    {
      question: "¿Qué modificador de acceso es más restrictivo?",
      options: ["public", "protected", "private", "default"],
      correctAnswer: "private",
    },
    {
      question: "¿Cómo se crea un objeto de una clase?",
      options: ["new ClassName()", "create ClassName()", "ClassName.new()", "make ClassName()"],
      correctAnswer: "new ClassName()",
    },
  ],
  intermedio: [
    {
      question: "¿Qué es el polimorfismo?",
      options: [
        "Tener múltiples clases",
        "Un objeto puede tomar múltiples formas",
        "Usar múltiples métodos",
        "Crear múltiples objetos",
      ],
      correctAnswer: "Un objeto puede tomar múltiples formas",
    },
    {
      question: "¿Cuál es la diferencia entre sobrecarga y sobreescritura?",
      options: [
        "No hay diferencia",
        "Sobrecarga es mismo método diferentes parámetros, sobreescritura es redefinir método heredado",
        "Sobrecarga es en herencia, sobreescritura no",
        "Son sinónimos",
      ],
      correctAnswer: "Sobrecarga es mismo método diferentes parámetros, sobreescritura es redefinir método heredado",
    },
    {
      question: "¿Qué palabra clave se usa para llamar al constructor padre?",
      options: ["parent()", "super()", "base()", "this()"],
      correctAnswer: "super()",
    },
    {
      question: "¿Qué significa 'final' en una clase?",
      options: [
        "La clase no puede ser instanciada",
        "La clase no puede ser heredada",
        "La clase es abstracta",
        "La clase es privada",
      ],
      correctAnswer: "La clase no puede ser heredada",
    },
  ],
  avanzado: [
    {
      question: "¿Cuál es la diferencia entre abstract class e interface?",
      options: [
        "No hay diferencia",
        "Abstract class puede tener métodos concretos, interface no",
        "Interface puede tener métodos concretos desde Java 8",
        "B y C son correctas",
      ],
      correctAnswer: "B y C son correctas",
    },
    {
      question: "¿Qué es la encapsulación?",
      options: [
        "Ocultar la implementación interna",
        "Crear múltiples objetos",
        "Heredar de otra clase",
        "Usar interfaces",
      ],
      correctAnswer: "Ocultar la implementación interna",
    },
    {
      question: "¿Cuántos constructores puede tener una clase?",
      options: ["Solo uno", "Máximo dos", "Ilimitados", "Depende del tipo"],
      correctAnswer: "Ilimitados",
    },
    {
      question: "¿Qué sucede si una clase no define constructor explícitamente?",
      options: [
        "Error de compilación",
        "Se crea constructor por defecto automáticamente",
        "La clase no se puede instanciar",
        "Se hereda el constructor de Object",
      ],
      correctAnswer: "Se crea constructor por defecto automáticamente",
    },
  ],
}
