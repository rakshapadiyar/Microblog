import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //an array of objects
  const [blogs, setBlogs] = useState([
    { title: "My new Website1", body: "lorem ipsum.", author: "raksha", id: 1 },
    { title: "My new Website2", body: "lorem ipsum.", author: "raksha", id: 2 },
    { title: "My new Website3", body: "lorem ipsum.", author: "raksha", id: 3 },
  ]);

  const handleDelete = (id) => {
    const filteredArray = blogs.filter((blog) => id !== blog.id);
    setBlogs(filteredArray);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
