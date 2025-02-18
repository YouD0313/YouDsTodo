import { TrashIcon } from '@heroicons/react/24/outline';
import type { List } from '../../App';
import type { TFilter } from '../../types/filter';

interface TodoProps {
  onUpdate: (updated: List) => void;
  onDelete: (deleted: List) => void;
  list: List;
}

export default function Todo({ onUpdate, onDelete, list }: TodoProps) {
  const { id, todo, status } = list;

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const checked = target.checked;
    const status: TFilter = checked ? 'Done' : 'Active';
    onUpdate({ ...list, status });
  };
  const handleDelete = () => onDelete(list);

  return (
    <li className='flex justify-between py-2'>
      <input
        className='accent-(--accent)'
        type='checkbox'
        id={id}
        checked={status === 'Done'}
        onChange={handleIsChecked}
      />
      <label htmlFor={id} className='w-full'>
        <span
          className={`pl-3 ${status === 'Done' ? 'text-(--light-grey) line-through  dark:text-(--grey)' : 'dark:text-(--white)'}`}
        >
          {todo}
        </span>
      </label>
      <button className={`h-fit cursor-pointer`} onClick={handleDelete}>
        <TrashIcon
          className={`size-5 ${status === 'Done' ? 'stroke-(--light-grey) dark:stroke-(--grey)' : 'dark:stroke-(--white)'}`}
        />
      </button>
    </li>
  );
}
