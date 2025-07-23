import type { Question } from "./types"

/**
 * Mezcla aleatoriamente los elementos de un array usando el algoritmo Fisher-Yates
 * @param array - Array a mezclar
 * @returns Nuevo array con elementos mezclados
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

/**
 * Obtiene el número de preguntas disponibles para una categoría específica
 * @param categoryQuestions - Preguntas de la categoría
 * @param difficulty - Dificultad específica (opcional)
 * @returns Número de preguntas disponibles
 */
export function getQuestionCountForCategory(
  categoryQuestions: Record<string, Question[]>,
  difficulty?: string,
): number {
  if (!difficulty) {
    // Retorna el total de preguntas para todas las dificultades
    return Object.values(categoryQuestions).reduce((total, questions) => total + questions.length, 0)
  }

  return categoryQuestions[difficulty]?.length || 0
}

/**
 * Obtiene las dificultades disponibles para una categoría
 * @param categoryQuestions - Preguntas de la categoría
 * @returns Array de dificultades disponibles
 */
export function getAvailableDifficultiesForCategory(categoryQuestions: Record<string, Question[]>): string[] {
  return Object.keys(categoryQuestions).filter(
    (difficulty) => categoryQuestions[difficulty] && categoryQuestions[difficulty].length > 0,
  )
}

/**
 * Obtiene estadísticas de dificultad para una categoría
 * @param categoryQuestions - Preguntas de la categoría
 * @returns Objeto con estadísticas por dificultad
 */
export function getDifficultyStatsForCategory(categoryQuestions: Record<string, Question[]>): Record<string, number> {
  const stats: Record<string, number> = {}
  for (const [difficulty, questions] of Object.entries(categoryQuestions)) {
    stats[difficulty] = questions.length
  }
  return stats
}

/**
 * Selecciona preguntas basadas en la categoría, dificultad y cantidad solicitada
 * @param categoryQuestions - Preguntas de la categoría
 * @param difficulty - Dificultad seleccionada
 * @param count - Número de preguntas solicitadas
 * @returns Array de preguntas seleccionadas
 */
export function selectQuestions(
  categoryQuestions: Record<string, Question[]>,
  difficulty: string,
  count: number,
): Question[] {
  let selectedQuestions: Question[] = []

  if (difficulty === "adaptativo") {
    // Para dificultad adaptativa, mezcla preguntas de todos los niveles
    const allDifficulties = ["basico", "intermedio", "avanzado"]
    const questionsPerDifficulty = Math.ceil(count / 3)

    for (const diff of allDifficulties) {
      const diffQuestions = categoryQuestions[diff] || []
      const shuffled = shuffleArray(diffQuestions)
      selectedQuestions.push(...shuffled.slice(0, questionsPerDifficulty))
    }

    // Mezcla el resultado final y toma solo la cantidad solicitada
    selectedQuestions = shuffleArray(selectedQuestions).slice(0, count)
  } else {
    // Para dificultades específicas
    const difficultyQuestions = categoryQuestions[difficulty]
    if (!difficultyQuestions || difficultyQuestions.length === 0) {
      console.warn(`No se encontraron preguntas para la dificultad ${difficulty}, usando básico como respaldo`)
      const basicQuestions = categoryQuestions["basico"] || []
      selectedQuestions = shuffleArray(basicQuestions).slice(0, count)
    } else {
      selectedQuestions = shuffleArray(difficultyQuestions).slice(0, count)
    }
  }

  // Si no tenemos suficientes preguntas, repetir algunas
  while (selectedQuestions.length < count && selectedQuestions.length > 0) {
    const remaining = count - selectedQuestions.length
    const toAdd = shuffleArray(selectedQuestions).slice(0, remaining)
    selectedQuestions.push(...toAdd)
  }

  return selectedQuestions.slice(0, count)
}

/**
 * Valida si una categoría y dificultad tienen preguntas disponibles
 * @param categoryQuestions - Preguntas de la categoría
 * @param difficulty - Dificultad a validar
 * @returns true si hay preguntas disponibles, false en caso contrario
 */
export function validateCategoryAndDifficulty(
  categoryQuestions: Record<string, Question[]> | undefined,
  difficulty: string,
): boolean {
  if (!categoryQuestions) return false

  if (difficulty === "adaptativo") {
    // Para adaptativo, verificar que al menos una dificultad tenga preguntas
    return Object.values(categoryQuestions).some((questions) => questions && questions.length > 0)
  }

  return !!(categoryQuestions[difficulty] && categoryQuestions[difficulty].length > 0)
}

/**
 * Obtiene una pregunta aleatoria de una categoría y dificultad específica
 * @param categoryQuestions - Preguntas de la categoría
 * @param difficulty - Dificultad específica
 * @returns Pregunta aleatoria o null si no hay preguntas disponibles
 */
export function getRandomQuestion(categoryQuestions: Record<string, Question[]>, difficulty: string): Question | null {
  const questions = selectQuestions(categoryQuestions, difficulty, 1)
  return questions.length > 0 ? questions[0] : null
}

/**
 * Calcula el porcentaje de aciertos
 * @param correct - Número de respuestas correctas
 * @param total - Número total de preguntas
 * @returns Porcentaje redondeado
 */
export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0
  return Math.round((correct / total) * 100)
}

/**
 * Obtiene un mensaje de retroalimentación basado en el porcentaje de aciertos
 * @param percentage - Porcentaje de aciertos
 * @returns Mensaje de retroalimentación
 */
export function getFeedbackMessage(percentage: number): string {
  if (percentage >= 90) {
    return "¡Excelente! ¡Eres un verdadero experto en Java!"
  } else if (percentage >= 70) {
    return "¡Buen trabajo! ¡Conoces bien Java!"
  } else if (percentage >= 50) {
    return "¡Buen esfuerzo! ¡Sigue aprendiendo!"
  } else {
    return "¡Sigue practicando! ¡Mejorarás con el tiempo!"
  }
}
