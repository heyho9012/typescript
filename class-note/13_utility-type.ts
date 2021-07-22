//  utility type

interface Product {
  id: number;
  name: number;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
  // ...
// }

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 툭정 상품의 상세 정보를 나타내기 위함 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
// PICK<Type, Keys>
function  displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
  // ...
}
// OMIT<Type, Keys>
// function  displayProductDetail(shoppingItem: Omit<Product, 'brand' | 'stock'>) {
  // ...
// }

// interface UpdateProduct {
//   id: number;
//   name: number;
//   price: number;
//   brand: string;
//   stock: number;
// }

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
} 
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile

// #3
// type UserProfileUpdate = {
//   [P in keyof UserProfile]?: UserProfile[P]
// }

// #4
type Subset<T> = {
  [P in keyof T]?: T[P] 
}

