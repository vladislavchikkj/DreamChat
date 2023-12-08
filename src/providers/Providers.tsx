"use client";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
      </Provider>
    </QueryClientProvider>
  );
}
