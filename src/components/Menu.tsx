import Link from "next/link"
import { menuItems } from "./menuItems"
import Image from "next/image"

export const Menu = () => {
  return(
    <div className="mt-4 text-sm">
      {menuItems.map((item, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="hidden lg:block text-gray-400 font-light">{item.title}</span>
          {item.items.map((item, index) => (
            <Link 
              href={item.href} 
              key={index}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
              >
              <div className="flex items-center gap-2">
                <Image src={item.icon} alt="icon" width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu