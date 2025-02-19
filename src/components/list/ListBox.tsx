import { filterTitle } from '../../constants/filterTitle';
import { useState } from 'react';
import Todo from '../todo/Todo';
import type { List } from '../../App';
import type { TFilter } from '../../types/filter';

interface ListBoxProps {
  lists: List[];
  onUpdate: (updated: List) => void;
  onDelete: (deleted: List) => void;
}

export default function ListBox({ lists, onUpdate, onDelete }: ListBoxProps) {
  const [filter, setFilter] = useState<TFilter>('All');

  const todos = filtering(lists, filter);

  return (
    <section className='border-t-1 border-b-(--border-b) dark:border-t-(--melon)'>
      <div className='h-[calc(100vh-18vh)] max-h-[calc(100vh-18vh)] bg-(--background) px-(--padding-x) pt-3.5 dark:bg-(--delft-blue)'>
        <div className='h-22.5'>
          <span className='text-2xl dark:text-(--white)'>List</span>
          <ul className='grid grid-cols-3 text-center text-2xl bg-(--melon) rounded-t-2xl mt-2 cursor-pointer'>
            {Object.values(filterTitle).map((title, i) => (
              <li
                className={`p-2 border-1 border-(--border) dark:border-(--melon) ${title === filterTitle.All ? 'rounded-tl-2xl' : ''} ${title === filterTitle.Done ? 'rounded-se-2xl' : ''}
                ${filter === title && 'bg-(--delft-blue)'}
                `}
                key={`${title}-${i}`}
                onClick={() => setFilter(title)}
              >
                <span className={`${filter === title ? 'text-(--white)' : ''}`}>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='custom-scrollbar h-[calc(100%-5.625rem)] bg-(--list-background) px-6 py-2 dark:bg-(--delft-blue) dark:border-1 dark:border-(--melon)'>
          <ul>
            {todos.map(list => (
              <Todo
                onUpdate={onUpdate}
                onDelete={onDelete}
                list={list}
                key={list.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function filtering(todos: List[], filter: TFilter) {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter(item => item.status === filter);
}
