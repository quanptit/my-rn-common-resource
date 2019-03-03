my-rn-common-resource: Lưu trữ tham chiếu đến cái String
## Installation

##### Thêm Vào package.json
```
"my-rn-common-resource": "git+https://gitlab.com/react-native-my-libs/my-rn-common-resource.git",
```

Chạy  lệnh sau
```
npm install
```

## Sử dụng

Cần chạy lệnh sau để tham chiếu cái function getStrings của project vào lib      
- String cần kế thừa ResourceStringCommon
- Color cần kế thừa ColorsCommon
```
setStringsRef([getStringsFunction])
```

###### sử dụng như sau: 
```javascript
getStringsCommon().OK
getColorsCommon().primaryColor
```
