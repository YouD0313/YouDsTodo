import {
  MoonIcon,
  SunIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import useOutsideClick from '../../hooks/useOutsideClick';
import type { TTheme } from '../../App';

interface DrawerMenuProps {
  onToggle: (boolean: boolean) => void;
  onDeleteAll: () => void;
  onToggleTheme: (theme: TTheme) => void;
  theme: TTheme;
}

export default function DrawerMenu({
  onToggle,
  onDeleteAll,
  onToggleTheme,
  theme,
}: DrawerMenuProps) {
  const ref = useOutsideClick({ onHandleClick: () => onToggle(false) });

  const handleToggleTheme = (theme: TTheme) => {
    onToggleTheme(theme);
  };

  return (
    <nav className={`w-full absolute z-10 flex justify-end`}>
      <div
        ref={ref}
        className={`w-[80%] h-screen bg-(--white) z-10 dark:bg-(--delft-blue)`}
      >
        <div className='h-[8vh] p-4 flex justify-end items-center'>
          <XMarkIcon
            className='size-7 cursor-pointer dark:stroke-(--white)'
            onClick={() => onToggle(false)}
          />
        </div>
        <div className='h-[calc(100vh-8vh)]'>
          <ul className='px-(--padding-x)'>
            <li
              className={`menu-list relative`}
              onClick={() =>
                handleToggleTheme(theme === 'dark' ? 'light' : 'dark')
              }
            >
              <span className='dark:text-(--white)'>Mode</span>
              {theme === 'dark' ? (
                <SunIcon className='size-5 dark:stroke-(--white)' />
              ) : (
                <MoonIcon className='size-5 dark:stroke-(--white)' />
              )}
            </li>
            <li className={`menu-list`} onClick={onDeleteAll}>
              <span className='dark:text-(--white)'>Clear</span>
              <TrashIcon className='size-5 dark:stroke-(--white)' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
