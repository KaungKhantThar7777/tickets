'use client'
import { trpc } from '@/trpc/client'
import React from 'react'

const ClientGreeting = () => {
  const { data } = trpc.hello.useQuery({ text: 'KKT' })
  if (!data?.greeting) return <div>Loading...</div>
  return <div>{data.greeting}</div>
}

export default ClientGreeting
