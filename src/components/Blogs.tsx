import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1400px] w-full flex flex-col gap-5 ">
        <NavLink to="/blogs/:1">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:2">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:3">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:4">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:5">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:6">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:7">
          <p>First Article</p>
        </NavLink>
        <NavLink to="/blogs/:8">
          <p>First Article</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Blogs;
