import { AppProvider } from "./context/AppProvider";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return(
   <AppProvider>
     <AppRoutes />
   </AppProvider> 
    ) 
}

