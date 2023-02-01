export type FormInputs  = {
    username: string
    password: string
    firstName?: string
    lastName?: string

}


export type Product =  {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating: number
  quantity?: number
}
