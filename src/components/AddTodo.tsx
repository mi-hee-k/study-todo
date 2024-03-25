type AddTodoType = {
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  titleInput: string;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddTodo = ({ addTodo, titleInput, changeInput }: AddTodoType) => {
  return (
    <form
      className='flex items-center w-[400px] text-center p-2 mb-8'
      onSubmit={addTodo}
    >
      <input
        type='text'
        value={titleInput}
        onChange={changeInput}
        placeholder='할 일'
        className='px-4 py-1 mr-4 rounded-md bg-slate-200'
      />
      <button className='px-4 py-1 bg-yellow-500 rounded-md'>등록</button>
    </form>
  );
};

export default AddTodo;
