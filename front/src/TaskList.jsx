import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchTasks, createTask, updateTask, deleteTask } from "./api"
import TaskCard from "./components/TaskCard"



const TaskList = () => {
  const queryClient = useQueryClient()
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  })

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  })

  if (isLoading) return <span>Chargement...</span>

  const todos = tasks.filter((t) => t.status === "todo")
  const inProgress = tasks.filter((t) => t.status === "in_progress")
  const done = tasks.filter((t) => t.status === "done")

  return (
    <div>
        <h1 className="text-center text-xl font-bold mb-4">TODOLIST</h1>
      <div className="flex justify-center gap-8 mt-4">
        <TaskCard
          title="À faire"
          tasks={todos}
          columnStatus="todo"
          onMove={(task) =>
            updateTaskMutation.mutate({ id: task.id, updates: { status: "in_progress" } })
          }
          onDelete={(id) => deleteTaskMutation.mutate(id)}
        />
        <TaskCard
          title="En cours"
          tasks={inProgress}
          columnStatus="in_progress"
          onMove={(task) =>
            updateTaskMutation.mutate({ id: task.id, updates: { status: "done" } })
          }
          onDelete={(id) => deleteTaskMutation.mutate(id)}
        />
        <TaskCard
          title="Terminé"
          tasks={done}
          columnStatus="done"
          onMove={(task) =>
            updateTaskMutation.mutate({ id: task.id, updates: { status: "todo" } })
          }
          onDelete={(id) => deleteTaskMutation.mutate(id)}
        />
      </div>
    </div>
  )
}

export default TaskList
