# Redux

## Redux là gì ?

- Redux được xem là một thư viện được thiết kế để quản lý state trong các project JavaScript. Redux đảm bảo rằng mỗi **component** đều có quyền truy cập trực tiếp vào state của project mà không cần phải truyền **props** xuống các **component** con hoặc sử dụng các hàm callback để truyền data lên các **component** cha.

### Khi nào cần redux

- Khi project ngày càng lớn, với ngày càng nhiều **component**, việc chỉ sử dụng duy nhất React để quản lý state sẽ trở nên rất phức tạp.
- Redux có một store nơi chứa tất cả các state. Nếu một state thay đổi ở component A, nó sẽ được phản ánh lên store, và những component cần biết đến sự thay đổi state này ở component A có thể subcribe lên store.

![alt](https://images.viblo.asia/fcf84f2c-9440-49e7-a946-6a526b1d878f.png)

- Component A gửi thay đổi state lên store, nếu component B và C cần state này thì chúng có thể lấy trực tiếp từ store.

## Main concepts

![alt](https://images.viblo.asia/0065ffba-31b9-4e77-972f-87aa397f966b.png)

### Action

- Action đơn giản là những Event được tạo ra bằng việc sử funcion và gửi data từ app lên store. Data có thể được gửi bằng nhiều cách như submit form, gọi API hoặc thao tác của User. Mỗi action của Redux để có một thuộc tính **type** để miêu tả loại action và thuộc tính **payload** chưa thông tinh được gửi lên store. Một ví dụ đơn giản về action:

```js
// action
{
    type: SIGN_IN,
    payload: {
        username: 'example',
        password: 'Aa@123456'
    }
}

// function tạo ra action trên
function signIn(data) {
    return {
        type: SIGN_IN,
        payload: data
    }
}

```

- Để gọi một action từ bất cứ đầu trong app, Redux sử dụng method **dispatch()** để gửi action tới Redux store để xử lý thay đổi state:

```js
dispatch(userLogin(data));
```

### Reducer

- Vì Redux sử dụng dispatch() để thay đổi state. Tuy nhiên method này chỉ dùng để thông báo có sự thay đổi, thực tế nó không thay đổi state, các reducer mới là thứ nắm vai trò này.

- Reducer là những function lấy state hiện tại và action vừa được dispatch để trả về state mới.

### Store
