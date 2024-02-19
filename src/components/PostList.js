import classes from './PostList.module.css';
import NewPost from './NewPost';
import Post from './Post';

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Develop" body="React is awesome!" />
        <Post author="Product" body="React is awesome!" />
      </ul>
    </>
  );
}
export default PostList;
