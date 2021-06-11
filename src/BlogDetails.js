import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  // console.log(id);
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id, {
      method: "DELETE",
    }).then(()=>{
      history.push('/');
    })
  }

  return (
    <div>
      {isPending && <h3>Loading ...</h3>}
      {error && <h3>{error}</h3>}
      {blog && (
        <article className="blog-details">
          <h2>{blog.title}</h2>
          <br />
          <p>Written on {blog.author}</p>
          <br />
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
