import Button from '../button/Button';
import styles from './Menubar.module.scss';

export default function Menubar() {
  const { menubar, title, menubarList } = styles;

  return (
    <nav className={menubar}>
      <h1 className={title}>Extensions List</h1>
      <ul className={menubarList}>
        <li>
          <Button>All</Button>
        </li>
        <li>
          <Button>Active</Button>
        </li>
        <li>
          <Button>Inactive</Button>
        </li>
      </ul>
    </nav>
  );
}
