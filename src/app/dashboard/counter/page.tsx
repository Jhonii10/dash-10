import { Counter } from '@/components'

export const metadata = {
  title: "Contador",
  description: "Productos en el carro de compras",
};

export default function CounterPage() {

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
       <Counter />
    </main>
  )
}
