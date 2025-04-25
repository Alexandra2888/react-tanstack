import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello from hello route!</div>
}
