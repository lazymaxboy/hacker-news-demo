# Redux

## Redux là gì ?

- Redux được xem là một thư viện được thiết kế để quản lý state trong các project JavaScript. Redux đảm bảo rằng mỗi **component** đều có quyền truy cập trực tiếp vào state của project mà không cần phải truyền **props** xuống các **component** con hoặc sử dụng các hàm callback để truyền data lên các **component** cha.

### Khi nào cần redux

- Khi project ngày càng lớn, với ngày càng nhiều **component**, việc chỉ sử dụng duy nhất React để quản lý state sẽ trở nên rất phức tạp.
- Redux có một store nơi chứa tất cả các state. Nếu một state thay đổi ở component A, nó sẽ được phản ánh lên store, và những component cần biết đến sự thay đổi state này ở component A có thể subcribe lên store.

![alt](https://images.viblo.asia/fcf84f2c-9440-49e7-a946-6a526b1d878f.png)

- Component A gửi thay đổi state lên store, nếu component B và C cần state này thì chúng có thể lấy trực tiếp từ store.

## Main concepts

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

- Vì Redux sử dụng **dispatch()** để thay đổi state. Tuy nhiên method này chỉ dùng để thông báo có sự thay đổi, thực tế nó không thay đổi state, các reducer mới là thứ nắm vai trò này.

- Reducer là những function lấy state hiện tại và action vừa được dispatch để trả về state mới.

```js
const handleLogin(state, action) => {
    state.auth = action.payload;
    return state;
};
```

- Khi build những ứng dụng lớn, chúng ta nên sử dụng method **combineReducers()** của Redux để kết hợp tất cả các reducer lại thành một list các reducer, mỗi một reducer xử lý state của một feature cụ thể.

```js
const rootReducer = combineReducers({
  signUp: signUp,
  signIn: signIn,
  editProfile: editProfile,
});
```

- Các reducer neên được việc dưới dạng pure function. Một số đặc điểm của chúng:

* Không gọi tới API hoặc DB
* Các giá trị trả về chỉ được phụ thuộc vào gía trị của tham số truyền vào.
* Các tham số phải immutable

### Store

- Store chính là trái tim của Redux. Đây là "single source of truth" nắm giữ toàn bộ state của app và cung cấp những method để thao tác với state, dispatch action, ... Mỗi action được dispatch sẽ trả về state mới cho store bằng reducer.

```js
import { createStore } from‘ redux’;

let store = createStore(indexReducer);
let signInInfo = {
    username: 'example',
    password: 'Aa@123456'
};

store.dispatch(signIn(signInInfo));
```

## Mô hình hoạt động

### Các khái niệm:

- **Application State**: hay còn gọi là Redux Store chứa trạng thái của ứng dụng bao gồm dữ liệu từ máy chủ, kết quả tương tác/hành động của người dùng, dữ liệu từ thiết bị (GPS, Clock, Accelerometer…)

- **Local State**: là trạng thái nội tại của component, sự thay đổi bất kỳ trong Local State không làm ảnh hưởng đến Application State

- **Presentation Component**: là component chỉ có nhiệm vụ hiển thị, nhận tương tác từ người dùng.

- **Container Component**: là component bao bọc Stateless/Presentation component và truyền dữ liệu cho các component này bằng props.

- **Stateless Component**: đây là một phiên bản của Presentation Component nhưng không chứa state, thông thường được viết bằng hàm đơn thuần, mọi thứ đều được truyền thông qua function’s arguments (props).

### Nguyên tắc trong việc hình thành redux:

1. Tất cả các trạng thái của ứng dụng đều được lưu trữ từ 1 kho.
2. Các trạng thái đều chỉ phải read-only
3. Các thay đổi phải thông qua pure functions.

### Cấu trúc hướng điều kiển trong redux:

![alt](https://images.viblo.asia/0065ffba-31b9-4e77-972f-87aa397f966b.png)

- Redux dựa theo cấu trúc flux do facebook đề xuất, theo mô hình data flow một hướng, nhằm tránh có cuộc gọi chồng chéo.
- Tất các trạng thái đều được lưu giữ một nơi là store, các view sẽ lấy các thay đổi từ store để hiển thị.
- Các sự kiện từ view phải gửi action để update trạng thái trong store.
- Reducer dựa vào các action để update state trong store.
- State là plain javascript object, không được biến đổi nó trực tiếp mà phải thông tạo object mới cho reducer trả về.

## Redux toolkit

- Gói `ReduxToolkit` được thiết kế để trở thành cách tiêu chuẩn để viết logic `Redux`.
- Ban đầu nó được tạo ra để giúp giải quyết ba mối quan tâm chung về `Redux`:

* Cấu hình store Redux quá phức tạp
* Phải thêm rất nhiều pakages để Redux làm việc
* Redux yêu cầu quá nhiều code bản mẫu

![alt](https://images.viblo.asia/63913ebe-03db-408d-8957-378e4c2eac4b.png)

### Ưu diểm

- Khả năng dự báo về kết quả. (Predictability of outcome)
- Khả năng maintain bảo trì: Nghiêm ngặt trong cấu trúc làm cho code trở nên dễ dàng bảo trì hơn.
- Khả năng tổ chức: Redux chặt chẽ hơn về việc tổ chức code, điều đó làm cho code trở nên nhất quán và dễ dàng hơn khi làm việc nhóm.
- Server rendering: Nó rất hữu ích đặc biệt là cho việc khởi tạo render, người dùng sẽ có trải nghiệm tốt hơn hoặc cho việc tối ưu bộ mấy tìm kiếm.
- Developer tools: Developer có thể theo dõi mọi thứ xảy ra trong ứng dụng từ các actions đến sự thay đổi của state

### Cách sử dụng
