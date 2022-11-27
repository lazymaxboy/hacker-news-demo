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
