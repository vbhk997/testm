"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useState } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const SideMenuItems = {
  Home: "/",
  AboutUs: "/aboutus",
  ContactUs: "/contactus"
}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-full flex items-center relative">
      <Popover className="h-full flex">
        {({ open, close }) => (
          <>
            <div className="relative flex h-full">
              <Popover.Button
                data-testid="nav-menu-button"
                className={`relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none ${open || isOpen ? 'text-ui-fg-base' : 'hover:text-ui-fg-base'}`}
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
              >
                Home
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 top-full w-auto z-30 text-sm text-ui-fg-on-color m-0 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col bg-[rgba(3,7,18,0.5)] rounded-md p-4"
                  >
                    <ul className="flex gap-6 items-center justify-center">
                      {Object.entries(SideMenuItems).map(([name, href]) => (
                        <li key={name} className="whitespace-nowrap">
                          <LocalizedClientLink
                            href={href}
                            className="text-xl leading-10 hover:text-ui-fg-disabled"
                            onClick={() => {
                              close()
                              setIsOpen(false)
                            }}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  )
}

export default SideMenu
