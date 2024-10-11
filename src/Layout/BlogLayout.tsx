import { Outlet } from "react-router";

const BlogLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] w-full my-20">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;
