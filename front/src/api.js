const API_URL = "http://127.0.0.1:8000/api/tasks/"

// GET all tasks
export const fetchTasks = async () => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error("Erreur au niveau de fetchTasks")
  return res.json()
}


export const createTask = async (newTask) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  })
  if (!res.ok) throw new Error("Erreur au niveau de createTask")
  return res.json()
}


export const updateTask = async ({ id, updates }) => {
  const res = await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  })
  if (!res.ok) throw new Error("Erreur au niveau de updateTask")
  return res.json()
}

// DELETE task
export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}${id}/`, { method: "DELETE" })
  if (!res.ok) throw new Error("Erreur au niveau de deleteTask")
  return id
}
