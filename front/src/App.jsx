import React from 'react';
import TaskList from './TaskList'
import HomePage from './HomePage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient()
function App() {


  return (
   <QueryClientProvider client={queryClient}>
      {/* <HomePage /> */}
      <TaskList />
    </QueryClientProvider>
  )
}

export default App
