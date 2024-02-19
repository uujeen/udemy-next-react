import classes from './PostList.module.css';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import { useState } from 'react';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(item) {
    setPosts((prev) => [item, ...prev]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((item) => (
          <Post key={item.author} body={item.body} author={item.author} />
        ))}
      </ul>
    </>
  );
}
export default PostList;
