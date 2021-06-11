import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push('/');
    });

  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Body</label>
        <textarea
          cols="30"
          rows="7"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog Author</label>
        {/* <select name="" id="">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> */}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding... </button>}
      </form>
    </div>
  );
};

export default Create;
