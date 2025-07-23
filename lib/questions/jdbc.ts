import type { Question } from "../types"

export const jdbcQuestions: Record<string, Question[]> = {
  basico: [
    {
      question: "¿Qué significa JDBC?",
      options: [
        "Java Database Connection",
        "Java Database Connectivity",
        "Java Data Base Controller",
        "Java Database Component",
      ],
      correctAnswer: "Java Database Connectivity",
    },
    {
      question: "¿Cuál es el primer paso para conectarse a una base de datos?",
      options: ["Crear un Statement", "Cargar el driver JDBC", "Ejecutar una consulta", "Crear un ResultSet"],
      correctAnswer: "Cargar el driver JDBC",
    },
    {
      question: "¿Qué interfaz representa una conexión a la base de datos?",
      options: ["Statement", "ResultSet", "Connection", "DriverManager"],
      correctAnswer: "Connection",
    },
  ],
  intermedio: [
    {
      question: "¿Cuál es la diferencia entre Statement y PreparedStatement?",
      options: [
        "No hay diferencia",
        "PreparedStatement es precompilado y previene SQL injection",
        "Statement es más rápido",
        "PreparedStatement solo funciona con MySQL",
      ],
      correctAnswer: "PreparedStatement es precompilado y previene SQL injection",
    },
    {
      question: "¿Qué método se usa para ejecutar una consulta SELECT?",
      options: ["execute()", "executeUpdate()", "executeQuery()", "select()"],
      correctAnswer: "executeQuery()",
    },
    {
      question: "¿Cómo se navega por los resultados de un ResultSet?",
      options: ["Con un bucle for", "Con el método next()", "Con el método get()", "Automáticamente"],
      correctAnswer: "Con el método next()",
    },
  ],
  avanzado: [
    {
      question: "¿Qué método se usa para ejecutar INSERT, UPDATE o DELETE?",
      options: ["execute()", "executeUpdate()", "executeQuery()", "update()"],
      correctAnswer: "executeUpdate()",
    },
    {
      question: "¿Cuál es la ventaja principal de usar Connection Pooling?",
      options: [
        "Mejor seguridad",
        "Mejor rendimiento al reutilizar conexiones",
        "Menos código",
        "Compatibilidad con más bases de datos",
      ],
      correctAnswer: "Mejor rendimiento al reutilizar conexiones",
    },
    {
      question: "¿Qué método se usa para confirmar una transacción?",
      options: ["save()", "commit()", "confirm()", "apply()"],
      correctAnswer: "commit()",
    },
  ],
}
