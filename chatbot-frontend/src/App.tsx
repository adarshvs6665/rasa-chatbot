import logo from "./logo.svg";
import "./App.css";
import CustomChatBotUsingMUI from "./components/CustomChatBotUsingMUI/CustomChatBotUsingMUI";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";

const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Home />
                {/* custom component for chatbot  */}
                

            </div>
        </QueryClientProvider>
    );
};

export default App;
