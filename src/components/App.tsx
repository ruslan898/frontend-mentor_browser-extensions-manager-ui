import Header from './ui/header/Header';
import Menubar from './ui/menubar/Menubar';
import Card from './ui/card/Card';
import styles from './App.module.scss';

export default function App() {
  const { app, content, cardGrid } = styles;

  return (
    <main className={app}>
      <div className="container">
        <Header />
        <section className={content}>
          <Menubar />
          <ul className={cardGrid}>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
