import { useState } from 'react';
import { nanoid } from 'nanoid';
import initialData from '../../data.json';
import Header from './ui/header/Header';
import Menubar from './ui/menubar/Menubar';
import Card from './ui/card/Card';
import styles from './App.module.scss';

export type CardInfo = {
  description: string;
  isActive: boolean;
  logo: string;
  name: string;
  id: string;
};

export type Filter = 'all' | 'active' | 'inactive';

export default function App() {
  const [data, setData] = useState<CardInfo[]>(() =>
    initialData.map((item) => ({ ...item, id: nanoid() })),
  );
  const [filter, setFilter] = useState<Filter>('all');
  const { app, content, cardGrid } = styles;

  function toggleActive(id: string) {
    setData((prevVal) =>
      prevVal.map((item) => {
        return item.id === id ? { ...item, isActive: !item.isActive } : item;
      }),
    );
  }

  function deleteItem(id: string) {
    setData((prevVal) =>
      prevVal.filter((item) => {
        return item.id !== id;
      }),
    );
  }

  function filterItems(filter: Filter) {
    if (filter === 'active') {
      return data.filter((item) => item.isActive === true);
    } else if (filter === 'inactive') {
      return data.filter((item) => item.isActive === false);
    } else {
      return data;
    }
  }

  const displayedItems = filterItems(filter);

  return (
    <main className={app}>
      <div className="container">
        <Header />
        <section className={content}>
          <Menubar setFilter={setFilter} filterVal={filter} />
          <ul className={cardGrid}>
            {displayedItems.map((item) => {
              return (
                <li key={item.id}>
                  <Card
                    {...item}
                    toggleActive={toggleActive}
                    deleteItem={deleteItem}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
