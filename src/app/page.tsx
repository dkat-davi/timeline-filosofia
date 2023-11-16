import Card from './components/card'
import './styles/antiguidade.css'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-10 py-24">
      <h1 className="w-full py-10 text-start text-4xl font-bold">
        Linha do Tempo da Filosofia
      </h1>
      <Card
        title="Filosofia Antiga (VII a.c a V d.C.)"
        path="./periodo/antiguidade"
      />
      <Card
        title="Filosofia Medieval (XV a XVIII d.c)"
        path="./periodo/medieval"
      />
      <Card
        title="Filosofia Moderna (XV a XVIII d.c)"
        path="./periodo/moderna"
      />
      <Card
        title="Filosofia Contemporânea (XVII a XX d.c)"
        path="./periodo/contemporanea"
      />
    </main>
  )
}
