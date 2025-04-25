import { TodoItem } from '../molecules/todoItem';
import { Todo } from '../../../types/todo';

interface TodoListsProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}
export function TodoLists({ todos, onDeleteTodo, onEditTodo }: TodoListsProps) {
  return (
    <ul className="flex flex-col gap-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.text}
          dueDate={todo.dueDate}
          createdAt={todo.createdAt}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
      ))}
    </ul>
  );
}
