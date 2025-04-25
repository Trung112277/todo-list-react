import { TodoItem } from '../molecules/todoItem';
import { Todo } from '../../../types/todo';

interface TodoListsProps {
  todos: Todo[];
}

export function TodoLists({ todos }: TodoListsProps) {
  return (
    <ul className="flex flex-col gap-5">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo.text} 
          dueDate={todo.dueDate} 
          createdAt={todo.createdAt} 
        />
      ))}
    </ul>
  );
}