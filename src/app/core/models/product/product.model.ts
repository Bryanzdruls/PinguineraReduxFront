export interface IProductModel {
  providerId: string
  copyId: string
  title: string
  author: string
  stock: number
  publicationYear:number;
  finalPrice: number
  type: string
}

export interface IProductModelResponse {
  providerId: string
  copyId: string
  title: string
  author: string
  stock: number
  finalPrice: number
  copyType: string
}
