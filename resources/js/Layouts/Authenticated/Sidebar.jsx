import { Link } from "@inertiajs/react"
import SubscriptionDetail from "./SubscriptionDetail"
import { OthersMenu, UserMenu } from "./MenuList"
import MenuItem from "./MenuItem"

export default function Sidebar({ auth }) {
  return (
    <aside className="fixed z-50 w-[300px] h-full">
      <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
        <a href="/">
          <img src="/images/nauma-no-background.svg" width={150} alt="" />
        </a>
        <div className="links flex flex-col mt-[60px] h-full gap-[30px]">

          {/* Menu */}
          <div>
            <div className="text-gray-1 text-sm mb-4">Menu</div>
            {UserMenu.map((menu, i) => {
              return <MenuItem key={`${i}-${menu.text}`} link={menu.link} icon={menu.icon} text={menu.text} isActive={menu.link && route().current(menu.link)} />
            })}
          </div>
          {/* Menu */}

          {/* Others */}
          <div>
            <div className="text-gray-1 side-link mb-4">Others</div>
            {OthersMenu.map((menu, i) => {
              return <MenuItem key={`${i}-${menu.text}`} link={menu.link} icon={menu.icon} text={menu.text} isActive={menu.link && route().current(menu.link)} method={menu.method} />
            })}
          </div>
          {/* Others */}

          <SubscriptionDetail
            isPremium
          />

          {/* Subcription details */}
          {/* {auth.activePlan && (
            <SubscriptionDetail
              isPremium={auth.activePlan.name === 'Premium'}
              name={auth.activePlan.name}
              remainingActiveDays={auth.activePlan.remainingActiveDays}
              activeDays={auth.activePlan.activeDays}
            />
          )} */}
          {/* Subcription details */}

        </div>
      </div>
    </aside>
  )
}