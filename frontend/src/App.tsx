import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyles"
import { AuthProvider } from "./contexts/AuthContext"
import { BedroomProvider } from "./contexts/BedroomContext"
import { RouteWeb } from "./routes"

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <BedroomProvider>
            <RouteWeb />
        </BedroomProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
