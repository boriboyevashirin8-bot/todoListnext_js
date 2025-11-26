"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Pencil, Trash2, Check } from "lucide-react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditingValue(tasks[index]);
  };

  const saveEdit = () => {
    if (!editingValue.trim() || editingIndex === null) return;
    const updated = [...tasks];
    updated[editingIndex] = editingValue;
    setTasks(updated);
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card className="shadow-xl rounded-2xl p-5">
        <h1 className="text-3xl font-bold mb-5">To-Do List</h1>

        <div className="flex gap-3 mb-5">
          <Input
            placeholder="Write a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="p-3"
          />
          <Button onClick={addTask} className="px-6 py-3 rounded-2xl bg-blue-600 text-white">
            Add
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {tasks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-2xl shadow"
            >
              {editingIndex === index ? (
                <Input
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
              ) : (
                <p className="text-lg">{item}</p>
              )}

              <div className="flex gap-3">
                {editingIndex === index ? (
                  <Button onClick={saveEdit} className="p-2 rounded-full bg-green-500 text-white">
                    <Check size={18} />
                  </Button>
                ) : (
                  <Button
                    onClick={() => startEditing(index)}
                    className="p-2 rounded-full border"
                  >
                    <Pencil size={18} />
                  </Button>
                )}

                <Button
                  onClick={() => deleteTask(index)}
                  className="p-2 rounded-full bg-red-500 text-white"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
