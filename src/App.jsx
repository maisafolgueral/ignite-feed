// JSX = JavaScript + XML (HTML)
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Maisa Folgueral" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat velit eius earum amet accusamus eligendi fugiat perferendis reiciendis dolorum iusto soluta labore cupiditate dolorem, magni voluptas, nemo natus id exercitationem!" 
          />
          <Post 
            author="Diego Fernandes" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione ipsa quod ipsum atque aperiam exercitationem ducimus quis, perferendis a! Magni tempore molestias, ab harum expedita eius quisquam enim aliquam!" 
          />
        </main>
      </div>
    </div>
  )
}

