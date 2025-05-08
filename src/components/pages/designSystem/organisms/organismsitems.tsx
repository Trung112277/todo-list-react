import { Actions } from '@/components/feature/organisms/actions';
import { AddInput } from '@/components/feature/organisms/addInput';
import { Heading } from '@/components/feature/organisms/heading';
import { TodoLists } from '@/components/feature/organisms/todoLists';
import { useTodoOperations } from '@/hooks/useTodoOperations';
import { useFilter } from '@/hooks/useFilter';
import { useSort } from '@/hooks/useSort';
import { useDragDrop } from '@/hooks/useDragDrop';

export function OrganismsItems() {
  const {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
    updateTodos,
  } = useTodoOperations();

  const {
    filterType,
    handleFilterChange,
    getFilteredTodos,
  } = useFilter(todos);

  const {
    sortType,
    sortOrder,
    handleSortChange,
    handleToggleSortOrder,
    getSortedTodos,
  } = useSort(getFilteredTodos());

  const {
    isDragging,
    handleDragStart,
    handleDragEnd,
    handleReorderTodo,
  } = useDragDrop(todos, updateTodos);

  const displayTodos = getSortedTodos();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Actions:</h3>
        <Actions
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          sortOrder={sortOrder}
          onToggleSortOrder={handleToggleSortOrder}
        />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Add Input:</h3>
        <AddInput onAdd={addTodo} />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
        <Heading />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Todo Lists:</h3>
        <TodoLists
          todos={displayTodos}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
          onToggleTodo={toggleTodo}
          onReorderTodo={handleReorderTodo}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
}
