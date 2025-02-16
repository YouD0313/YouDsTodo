import { TrashIcon } from '@heroicons/react/24/outline';
import { filterTitle } from '../../constants/filterTitle';

export default function ListBox() {
  return (
    <section className="border-t-1 border-b-(--text) dark:border-t-(--melon)">
      <div className="h-[calc(100vh-18vh)] max-h-[calc(100vh-18vh)] bg-(--champagne-pink) px-(--padding-x) pt-3.5 dark:gb-(--delft-blue)">
        <div className="h-22.5">
          <span className="text-2xl">List</span>
          <ul className="grid grid-cols-3 text-center text-2xl bg-(--melon) rounded-t-2xl mt-2 cursor-pointer">
            {Object.values(filterTitle).map(title => (
              <li
                className={`filter ${title === filterTitle.All && 'rounded-tl-2xl'} ${title === filterTitle.Done && 'rounded-se-2xl'}`}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="custom-scrollbar h-[calc(100%-5.625rem)] bg-(--list-background) px-6 py-2">
          {/* 맵돌리기 */}
          {Array.from({ length: 25 }, (_, i) => i + 1).map((_, i) => (
            <div className="flex justify-between py-2" key={i}>
              <label className="w-[95%]">
                <input
                  className="accent-(--accent) text-(--white)"
                  type="checkbox"
                  name=""
                  id=""
                />
                <span className="pl-3">밥먹기</span>
              </label>
              <div>
                <TrashIcon className="size-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
