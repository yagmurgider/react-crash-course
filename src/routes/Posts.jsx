import '../App.css'
import PostsList from '../components/PostsList.jsx'
import { Outlet } from 'react-router-dom';


function Posts() {
  return (
      <>
          <Outlet/>
          <main>
              <PostsList></PostsList>
          </main>
      </>
  );
}

export default Posts;
