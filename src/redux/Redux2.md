# Redux Middlewares

- middleware cho phép chúng ta can thiệp vào giữa thời điểm dispatch một action và thời điểm action đến được reducer. Chúng ta có thể thấy sự thay đổi của flow khi có sử dụng middleware qua hình dưới:

![alt](https://images.viblo.asia/5c72ff3e-859a-457a-ae11-e1392baa90af.gif)

# Redux Thunk

# RTK Query

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
