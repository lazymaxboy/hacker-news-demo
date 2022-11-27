# Redux Middlewares

- middleware cho phép chúng ta can thiệp vào giữa thời điểm dispatch một action và thời điểm action đến được reducer. Chúng ta có thể thấy sự thay đổi của flow khi có sử dụng middleware qua hình dưới:

![alt](https://images.viblo.asia/5c72ff3e-859a-457a-ae11-e1392baa90af.gif)
![alt](https://images.viblo.asia/8ff8bd43-308a-47da-b382-891adae237d2.gif)

## Sử dụng Middleware

- Để sử dụng được Middleware chúng ta cần sử dụng function applyMiddleware của redux khi khởi tạo store

```js
// index.js
import { createStore, applyMiddleware } from 'redux';
import 'yourMiddleware' from 'your-middleware';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(yourMiddleware));
```

# Redux Thunk

- Redux Thunk là một Middleware cho phép bạn viết các Action trả về một function thay vì một plain javascript object bằng cách trì hoãn việc đưa action đến reducer.
- Redux Thunk được sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập đến Store hoặc đơn giản là việc lấy dữ liệu như Ajax request.

## setup

```js
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

// The thunk middleware was automatically added
```

# RTK Query

- `RTK Query` là một addon trong bộ thư viện Redux Toolkit. Nó giúp chúng ta thực hiện data fetching một cách đơn giản hơn thay vì sử dụng createAsyncThunk để thực hiện async action.

# Private route

## EX: hiển thị con của thành phần hoặc điều hướng để đăng nhập.

```js
const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

- use

```js
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

- or:

```js
const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// use

<Route element={<PrivateWrapper />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>;
```
