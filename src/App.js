import React from "react";
import {
  Outlet,
  Link,
  Route,
  BrowserRouter,
  Routes,
  useRoutes,
} from "react-router-dom";

// Components
import UserList from "./components/UserList";
import UserDetailModal from "./components/UserDetailModal";
import UserForm from "./components/UserForm";
import UserLogin from "./components/UserLogin";
// import UserLogin from "./UserLogin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">User List</Link>
            </li>
            <li>
              <Link to="/users/add">Add User</Link>
            </li>
            <li>
              <Link to="/users/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/users"
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route index element={<UserList />} />
            <Route path="/users/add" element={<UserForm />} />
            <Route path="/users/login" element={<UserLogin />} />
          </Route>
          <Route path="user/:userId" element={<UserDetailModal />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
