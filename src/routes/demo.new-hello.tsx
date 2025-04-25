import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo/new-hello')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello from "/demo/new-hello!</div>
}
