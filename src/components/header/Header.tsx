import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="h-[8vh] p-4 flex justify-between items-center bg-(--background) dark:bg-(--delft-blue)">
      <span className="w-fit text-3xl dark:text-(--white)">YouD's TODO</span>
      <Bars3Icon className="size-7 fill-(--text) dark:fill-(--white)" />
    </header>
  );
}
