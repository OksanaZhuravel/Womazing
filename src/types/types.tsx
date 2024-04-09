import { InputHTMLAttributes, MouseEventHandler, ReactNode } from "react"

export interface ProductPromoProps {
  className: string
  subtitle: string
  limit: number
}

export interface ProductItemProps {
  item: ProductProps
}

export interface formDataProps {
  name: string
  email: string
  phone: string
  message?: string
}

export interface TitleProps {
  title: string
  activeTitle: string
  activeLink: string
  interim?: string
}

export interface BreadcrumbsProps {
  categories: string[]
  title: string
  className: string
}

export interface ButtonProps {
  className?: string
  type?: string
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export interface ModalProps {
  open: boolean
  onCancel: () => void
  children: ReactNode
}

export interface FormBuyer {
  name: string
  email: string
  phone: string
  message?: string
  country: string
  city: string
  street: string
  house: string
  apartment: string
  isCash: boolean
}

export interface BuyerProps {
  onFormSubmit?: (formBuyer: { id: number } & Omit<FormBuyer, "id">) => void
}

export interface ValidationRule {
  fields: string[]
  condition: (value: string) => boolean
  errorMessage: string
}

export interface FormErrors {
  [key: string]: string
}

export interface RangeProps {
  currentRange: string
}

export interface PaginationProps {
  currentPage: number
  maxPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export interface SortProps {
  onSortChange: (range: string) => void
}

export interface CartState {
  cart: Array<{
    id: number
    images?: string[]
    price: number
    discord: number | null | undefined
    title: string
    selectedSize: string
    selectedColor: string
    quantity: number
    totalSave?: number | null
    total?: number
    key?: string
  }>
}

export interface CartItem {
  id: number
  images?: string[]
  price: number
  title: string
  selectedSize: string
  selectedColor: string
  quantity: number
  discord?: number | null
  totalSave?: number | null
  total?: number
  key: string
}

export interface ProductState {
  item: ProductProps[]
  status: string
  error?: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export interface PopupFormProps {
  create: (formData: formDataProps) => void
  title: string
  text_btn?: string
  showMessage?: boolean
  showButton?: boolean
}

export interface ProductProps {
  id: number
  title: string
  description: string | null
  price: number
  discord: number | null
  quantity: number
  categories: string[]
  images: string[]
  sizes: string[]
  colors: { name: string; value: string }[]
  news: boolean
}

export interface ImageData {
  id: number
  attributes: {
    name: string
    width: number
    height: number
    url: string
  }
}

export interface SizeData {
  id: number
  attributes: {
    name: string
  }
}

export interface ColorData {
  id: number
  attributes: {
    name: string
    value: string
  }
}

export interface NewsData {
  id: number
  attributes: {
    New: boolean
    name: string
  }
}

export interface ProductData {
  id: number
  attributes: {
    title: string
    description: string | null
    price: number
    discord: number
    quantity: number
    images: {
      data: ImageData[]
    }
    categories: {
      data: CategoryData[]
    }
    sizes: {
      data: SizeData[]
    }
    colors: {
      data: ColorData[]
    }
    news: {
      data: NewsData[]
    }
  }
}

export interface ResponseData {
  data: ProductData[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface CategoryData {
  id: number
  attributes: {
    name: string
  }
}

export interface CategoryProps {
  id: number
  name: string
}

export interface CategoryState {
  categories: CategoryProps[]
  status: string
  error?: string
}

export interface CategoryResponseData {
  data: CategoryProps[]
}

export interface CouponsData {
  item: string
  sale: number
}

export interface CartItemProps {
  item: CartItem
  handleDeleteItem: (key: string) => void
  handleQuantityChange: (
    itemId: number,
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void
}

export interface CartControlsProps {
  coupon: string
  setCoupon: React.Dispatch<React.SetStateAction<string>>
  couponValid: boolean | null
  couponApplied: boolean | null
  setCouponValid: React.Dispatch<React.SetStateAction<boolean | null>>
  addCoupon: () => void
  handleUpdateCart: () => void
}

export interface CartListProps {
  cartItems: CartItem[]
  handleDeleteItem: (key: string) => void
  handleQuantityChange: (
    itemId: number,
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void
}

export interface CartTotalProps {
  couponApplied: boolean
  discountedPriceNumber: number | null
  totalPrice: number
}

export interface NavBarProps {
  className: string
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
