"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AdminDashboard() {
  const [newImage, setNewImage] = useState("")
  const [newProject, setNewProject] = useState({ title: "", description: "" })

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would add the image to your database or storage
    console.log("Adding image:", newImage)
    setNewImage("")
  }

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would add the project to your database
    console.log("Adding project:", newProject)
    setNewProject({ title: "", description: "" })
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Image</h2>
          <form onSubmit={handleAddImage}>
            <Input
              type="text"
              placeholder="Image URL"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="mb-4"
            />
            <Button type="submit">Add Image</Button>
          </form>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
          <form onSubmit={handleAddProject}>
            <Input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="mb-4"
            />
            <Textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="mb-4"
            />
            <Button type="submit">Add Project</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

