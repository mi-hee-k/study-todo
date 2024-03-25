import { Todo } from '../App';
import TodoItem from './TodoItem';

type TodoListType = {
  todos: Todo[];
  changeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  isDone: boolean;
};

const TodoList = ({ todos, changeTodo, deleteTodo, isDone }: TodoListType) => {
  const filteredTodo = isDone
    ? todos.filter((item) => item.done === true)
    : todos.filter((item) => item.done === false);
  return (
    <div className='w-full mb-8'>
      <h2 className='mb-4 text-xl font-bold text-slate-700'>
        {isDone ? '완료👌' : '진행중...😊'}
      </h2>

      <TodoItem
        filteredTodo={filteredTodo}
        changeTodo={(id) => changeTodo(id)}
        deleteTodo={(id) => deleteTodo(id)}
      />
    </div>
  );
};

export default TodoList;
