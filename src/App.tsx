import React from "react";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
