import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"
import Button from "../../button"

const HeaderActions = () => {
  return (
    <div>
      <Button variant='icon'>
        <HiOutlineShoppingCart/>
      </Button>
      <Button variant='icon'>
        <HiOutlineUser/>
      </Button>
    </div>
  )
}

export default HeaderActions