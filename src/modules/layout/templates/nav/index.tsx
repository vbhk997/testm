// Nav.tsx
import { listRegions } from "@lib/data";
import NavClient from "./navclient";
import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AboutUs from "@modules/layout/components/about-us"
import Offering from "@modules/layout/components/offering"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <NavClient regions={regions} />
          
          {/* Large Screen Navbar */}
          <div className="hidden lg:flex items-center justify-between w-full h-full">
            <div className="flex-1 basis-0 h-full flex items-center">
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base"
                data-testid="nav-store-link"
              >
                MyMedha
              </LocalizedClientLink>
            </div>

            <div className="flex items-center h-full">
              <div className="txt-compact-xlarge-plus h-full flex items-center gap-6">
                <SideMenu regions={regions} />
                <AboutUs regions={regions} />
                <Offering regions={regions} />
              </div>
            </div>

            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/search"
                    scroll={false}
                    data-testid="nav-search-link"
                  >
                    Search
                  </LocalizedClientLink>
                )}
                <LocalizedClientLink
                  className="txt-compact-xlarge-plus hover:text-ui-fg-base"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  Account
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
