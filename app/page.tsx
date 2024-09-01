import { trpc } from '@/trpc/server'
import ClientGreeting from './ClientGreeting'

export default async function Home() {
  const data = await trpc.hello({ text: 'Kaung' })

  return (
    <main>
      <h3>Hello Tickets System</h3>

      {data.greeting}

      <ClientGreeting />
    </main>
  )
}
