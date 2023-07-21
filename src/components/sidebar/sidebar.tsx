import React from "react"
import type { MenuProps } from "antd"
import { Menu } from "antd"
import { menuActions, useAppDispatch, useAppSelector } from "store"

type MenuItem = Required<MenuProps>["items"][number]

export const Sidebar: React.FC = () => {
  const route = useAppSelector((state) => state.menu.route)
  const dispatch = useAppDispatch()

  const items: MenuItem[] = route.map(({ id, title }) => ({
    label: title,
    key: id,
  }))

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(menuActions.onChangeRoute(Number(e.key)))
  }

  return (
    <Menu
      onClick={onClick}
      style={{ width: "20vw" }}
      defaultSelectedKeys={[route[0]?.id]}
      mode="inline"
      items={items}
    />
  )
}
