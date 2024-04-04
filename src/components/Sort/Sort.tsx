import { useDispatch, useSelector } from "react-redux"
import { CategoryProps, SortProps } from "../../types/types"
import { useEffect, useState } from "react"
import { AppDispatch, RootState } from "../../state/store"
import { fetchCategoriesAll } from "../../state/categories/categoriesSlice"
import { defaultCategories } from "../../api/defolt"

const Sort = ({ onSortChange }: SortProps) => {
  const categories = useSelector((state: RootState) => {
    if (!state.categories.categories) {
      return defaultCategories
    }
    return state.categories.categories
  })
  const dispatch = useDispatch<AppDispatch>()
  const [category, setCategory] = useState<CategoryProps[]>([])

  useEffect(() => {
    dispatch(fetchCategoriesAll())
  }, [dispatch])

  useEffect(() => {
    setCategory([{ id: 0, name: "Все" }, ...categories])
  }, [categories])

  const [activeItems, setActiveItems] = useState([
    true,
    ...Array.from({ length: category.length - 1 }).map(() => false),
  ])

  const handleSort = (index: number) => {
    const newActiveItems = Array.from({ length: category.length }).map(
      (_isActive, i) => i === index,
    )
    setActiveItems(newActiveItems)
    const range = category[index].name.toString()
    onSortChange(range)
  }

  return (
    <>
      <section className="sort">
        <div className="sort__container">
          <ul className="sort__list">
            {category.map((item, index) => (
              <li
                key={item.id}
                className={
                  activeItems[index] ? "sort__item active" : "sort__item"
                }
                onClick={() => handleSort(index)}
              >
                <span className="sort__text">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sort
