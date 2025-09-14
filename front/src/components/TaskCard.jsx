import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTask } from "../api"

const TaskCard = ({ title, tasks = [], onMove, onDelete, columnStatus }) => {
  const queryClient = useQueryClient()
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const addTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  })

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return
    addTaskMutation.mutate({ title: newTaskTitle, status: columnStatus })
    setNewTaskTitle("")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Ajouter une tâche"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="mb-2"
        />
         <ul className="mt-4 space-y-2 max-h-96 overflow-y-auto">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center border rounded-md p-2 hover:bg-gray-100 transition-colors" >
              {task.title}
            <div className="flex gap-2">
              {onMove && (
                <Button size="sm" className="bg-green-500 text-white" onClick={() => onMove(task)}>
                  -
                </Button>
              )}
                <Button size="sm" variant="destructive" onClick={() => onDelete(task.id)}>
                  X
                </Button>
              </div>
            </li>
              ))}
            </ul>

        <Button className="mt-4" onClick={handleAddTask}>Ajouter</Button>
      </CardContent>
    </Card>
  )
}
export default TaskCard;