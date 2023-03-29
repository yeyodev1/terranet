export default function ({ store, redirect, route }) {
  const userRole = store.state.user.user
  if (userRole === null && route.fullPath.includes('/admin')) {
    console.log('estamos en el redirect')
    return redirect('/')
  }
}
