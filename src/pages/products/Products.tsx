import { NavLink, Outlet } from "react-router-dom";

export function Products() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1>Products Page</h1>
      <div className="flex gap-4">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-900 flex items-center justify-center rounded-lg w-32 h-10"
              : "bg-red-900 flex items-center justify-center rounded-lg w-32 h-10"
          }
        >
          <button>Product One</button>
        </NavLink>
        <NavLink
          to={"/products/product-two"}
          className={({ isActive }) =>
            isActive
              ? "bg-blue-900 flex items-center justify-center rounded-lg w-32 h-10"
              : "bg-red-900 flex items-center justify-center rounded-lg w-32 h-10"
          }
        >
          <button>Product Two</button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
