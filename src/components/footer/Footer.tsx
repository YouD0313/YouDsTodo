import { ChangeEvent, useState } from 'react';
import type { List } from '../../App';

interface FooterProps {
  onAdd: (todo: List) => void;
}

export default function Footer({ onAdd }: FooterProps) {
  const [todo, setTodo] = useState<string>('');
  const handleChangeText = (e: ChangeEvent) => {
    const target = e.target as HTMLFormElement;
    setTodo(target.value);
  };

  const handleListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 16);
    onAdd({ id, todo, status: 'Active' });
    setTodo('');
  };

  return (
    <footer className='bg-(--background) w-full h-[10vh] absolute bottom-0 px-(--padding-x) flex items-center dark:bg-(--delft-blue)'>
      <form
        className='w-full h-9 flex items-center'
        onSubmit={handleListSubmit}
      >
        <input
          type='text'
          className='w-[85%] h-full bg-(--white)  pl-3 rounded-l-2xl outline-0 text-(--delft-blue)'
          value={todo}
          onChange={handleChangeText}
        />
        <button className='w-[15%] h-full bg-(--melon) rounded-r-2xl cursor-pointer'>
          <span className='text-xl'>Add</span>
        </button>
      </form>
    </footer>
  );
}
