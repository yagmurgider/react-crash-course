import './App.css'
import PostsList from './components/PostsList'
import MainHeader from "./components/MainHeader.jsx";
import { useState } from 'react';

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function hideModalHandler() {
        setModalIsVisible(false);
    }
    function showModalHandler() {
        setModalIsVisible(true);
    }

  return (
      <>
          <MainHeader onCreatePost={showModalHandler}/>
          <main>
              <PostsList
                  isPosting={modalIsVisible}
                  onStopPosting={hideModalHandler}
              ></PostsList>
          </main>
      </>
  );
}

export default App;
