import { TodoItem } from '../molecules/todoItem';
import { Todo } from '../../../types/todo';

interface TodoListsProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
  onToggleTodo: (id: string) => void;
}
export function TodoLists({
  todos,
  onDeleteTodo,
  onEditTodo,
  onToggleTodo,
}: TodoListsProps) {
  return (
    <ul className="flex flex-col gap-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.text}
          dueDate={todo.dueDate}
          createdAt={todo.createdAt}
          completed={todo.completed}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
          onToggle={onToggleTodo} completedAt={''}        />
      ))}
    </ul>
  );
}
