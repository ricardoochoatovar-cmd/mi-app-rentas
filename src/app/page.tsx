import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-semibold tracking-tight text-primary">
        Rently
      </h1>
      <p className="text-muted-foreground">Fase 1 completada: proyecto inicializado.</p>
      <Button>Comenzar</Button>
    </main>
  );
}
