import { Todo } from '../App';

type TodoItemType = {
  changeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  filteredTodo: Todo[];
};

const TodoItem = ({ filteredTodo, changeTodo, deleteTodo }: TodoItemType) => {
  return (
    <ul className='flex flex-wrap w-full'>
      {filteredTodo.map((item) => (
        <li className='w-[20%]' key={item.id}>
          <h3 className='font-bold'>{item.title}</h3>
          <button
            className='mr-2 font-bold text-green-800'
            onClick={() => changeTodo(item.id)}
          >
            완료
          </button>
          <button
            className='font-bold text-red-800'
            onClick={() => deleteTodo(item.id)}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
