import { useEffect, useState } from 'react';
import DrawerMenu from './components/drawer-menu/DrawerMenu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListBox from './components/list/ListBox';
import type { TFilter } from './types/filter';

export interface List {
  id: string;
  todo: string;
  status: TFilter;
}

export type TTheme = 'dark' | 'light';

function App() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const [lists, setLists] = useState<List[]>(() => readTodosFromLocalStorage());

  const handleToggle = (isOpen: boolean) => {
    setMenuToggle(isOpen);
  };
  const handleAdd = (todo: List) => {
    const dupleCheck = lists.filter(list => list.todo === todo.todo);
    if (dupleCheck.length === 0) {
      setLists([...lists, todo]);
    }
  };
  const handleUpdate = (updated: List) => {
    setLists(lists.map(list => (list.id === updated.id ? updated : list)));
  };
  const handleDelete = (deleted: List) => {
    setLists(lists.filter(list => list.id !== deleted.id));
  };
  const handleDeleteAll = () => {
    setLists([]);
  };

  const [theme, setTheme] = useState<TTheme>(() =>
    readIsDarkModeFromLocalStorage(),
  );

  const handleToggleTheme = (theme: TTheme) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
    localStorage.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(lists));
  }, [lists]);

  return (
    <main className={`h-screen relative min-w-80 overflow-hidden `}>
      {Boolean(menuToggle) && (
        <DrawerMenu
          onToggle={(isOpen: boolean) => handleToggle(isOpen)}
          onDeleteAll={handleDeleteAll}
          onToggleTheme={handleToggleTheme}
          theme={theme}
        />
      )}
      <div className={`h-full ${menuToggle ? 'brightness-50' : ''}`}>
        <Header onHandleToggle={(isOpen: boolean) => handleToggle(isOpen)} />
        <ListBox
          lists={lists}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <Footer onAdd={handleAdd} />
      </div>
    </main>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function readIsDarkModeFromLocalStorage() {
  return localStorage.theme === 'dark' ? 'dark' : 'light';
}

export default App;
