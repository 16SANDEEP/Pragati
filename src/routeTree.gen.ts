import { RootRoute, FileRoute } from '@tanstack/react-router'
import { Layout } from '@/routes/__root'
import { Index } from '@/routes/index'
import { AuthPage } from '@/routes/auth'

const RootRouteImport = new RootRoute({
  component: Layout,
})

const IndexRoute = new FileRoute({
  getParentRoute: () => RootRouteImport,
  path: '/',
  component: Index,
})

const AuthRouteImport = new FileRoute({
  getParentRoute: () => RootRouteImport,
  path: '/auth',
  component: AuthPage,
})

export const routeTree = RootRouteImport.addChildren([
  IndexRoute,
  AuthRouteImport,
])
