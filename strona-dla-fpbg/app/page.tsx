export default function Home() {
  // Szkielet startowy strony FPbG; docelowe sekcje trafią tu w kolejnych krokach.
  return (
    <main className="bg-sand text-primary">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6 px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Fundacja Przyjaźń bez Granic
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          Szkielet nowej strony jest gotowy
        </h1>
        <p className="max-w-3xl text-lg text-primary/80">
          Minimalny układ startowy zgodny z architekturą FPbG; w kolejnych
          zadaniach wypełnimy go docelowymi sekcjami, danymi i komponentami RWD.
        </p>
        <div className="mt-4 h-px w-24 bg-accent" />
      </section>
    </main>
  );
}
