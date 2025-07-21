export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary/20 rounded animate-pulse"></div>
            <div className="h-6 w-24 bg-primary/20 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="h-16 w-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-6 w-6 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4 text-muted-foreground">Cargando JustJava...</h2>
          <p className="text-sm text-muted-foreground mt-2">Preparando tu experiencia de aprendizaje</p>
        </div>
      </main>
    </div>
  )
}
