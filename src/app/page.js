import Image from "next/image";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <div className="flex justify-center items-start h-screen overflow-y-auto bg-gray-50 ">
      <TodoList />
    </div>
  );
}
