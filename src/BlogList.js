const BlogList = ({ blogs, title, handleDelete }) => {
  //   let blogs = props.blogs;
  //   let title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <div className="home">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
