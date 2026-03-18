import type { Filter } from '../../App';
import Button from '../button/Button';
import styles from './Menubar.module.scss';

type MenubarProps = {
  setFilter: (filter: Filter) => void;
  filterVal: Filter;
};

export default function Menubar({ setFilter, filterVal }: MenubarProps) {
  const { menubar, title, menubarList } = styles;

  return (
    <nav className={menubar}>
      <h1 className={title}>Extensions List</h1>
      <ul className={menubarList}>
        <li>
          <Button onClick={() => setFilter('all')} isActive={filterVal === 'all'}>
            All
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setFilter('active')}
            isActive={filterVal === 'active'}
          >
            Active
          </Button>
        </li>
        <li>
          <Button
            onClick={() => setFilter('inactive')}
            isActive={filterVal === 'inactive'}
          >
            Inactive
          </Button>
        </li>
      </ul>
    </nav>
  );
}
