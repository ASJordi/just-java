import type { Question } from "../types"
import { stringsQuestions } from "./strings"
import { arraysQuestions } from "./arrays"
import { listQuestions } from "./list"
import { setQuestions } from "./set"
import { mapQuestions } from "./map"
import { queueQuestions } from "./queue"
import { oopQuestions } from "./oop"
import { exceptionsQuestions } from "./exceptions"
import { streamsQuestions } from "./streams"
import { concurrencyQuestions } from "./concurrency"
import { genericsQuestions } from "./generics"
import { constructorsQuestions } from "./constructors"
import { datatypesQuestions } from "./datatypes"
import { jdbcQuestions } from "./jdbc"
import { junitQuestions } from "./junit"

// Exportar todas las preguntas organizadas por categoría
export const allQuestions: Record<string, Record<string, Question[]>> = {
  strings: stringsQuestions,
  arrays: arraysQuestions,
  list: listQuestions,
  set: setQuestions,
  map: mapQuestions,
  queue: queueQuestions,
  oop: oopQuestions,
  exceptions: exceptionsQuestions,
  streams: streamsQuestions,
  concurrency: concurrencyQuestions,
  generics: genericsQuestions,
  constructors: constructorsQuestions,
  datatypes: datatypesQuestions,
  jdbc: jdbcQuestions,
  junit: junitQuestions,
}

// Exportar preguntas individuales para importación específica
export {
  stringsQuestions,
  arraysQuestions,
  listQuestions,
  setQuestions,
  mapQuestions,
  queueQuestions,
  oopQuestions,
  exceptionsQuestions,
  streamsQuestions,
  concurrencyQuestions,
  genericsQuestions,
  constructorsQuestions,
  datatypesQuestions,
  jdbcQuestions,
  junitQuestions,
}
