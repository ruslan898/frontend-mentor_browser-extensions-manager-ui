import Header from './ui/header/Header';
import Menubar from './ui/menubar/Menubar';
import styles from './App.module.scss';

export default function App() {
  const { app, content } = styles;

  return (
    <main className={app}>
      <div className="container">
        <Header />
        <section className={content}>
          <Menubar />
          <ul className="card-grid"></ul>
        </section>
      </div>
    </main>
  );
}
