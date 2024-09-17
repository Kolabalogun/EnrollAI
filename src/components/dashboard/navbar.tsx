/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuIcon } from "lucide-react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button as ButtonChakra,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentDomain } from "@/redux/features/domainSlice";
import SidebarDrawer from "./sidebar/drawer";
import { useGlobalContext } from "@/context/useGlobalContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const allDomains = useSelector((state: any) => state.addDomains.domains);
  const { onOpen } = useGlobalContext();

  const currentSelectedDomain = useSelector(
    (state: any) => state.addDomains.selectedDomain
  );

  return (
    <div className="xl:px-6 px-3 py-4 flex justify-between items-center">
      <div className="flex xl:hidden  items-center gap-3 ">
        <button
          className="rounded-full bg-secondary-500  "
          onClick={() => {
            onOpen();
          }}
        >
          <MenuIcon className="h-6 w-6   text-black" />
        </button>

        <SidebarDrawer />

        <div className="">
          {allDomains.length > 0 ? (
            <Menu>
              <MenuButton
                variant={"outline"}
                border={"none"}
                _hover={{ borderColor: "transparent" }}
                _active={{ borderColor: "transparent" }}
                fontWeight={"500"}
                as={ButtonChakra}
                rightIcon={<ChevronDownIcon className="h-4 font-medium" />}
              >
                <p
                  className={`text-sm font-semibold manrope linked cursor-pointer py-3    text-black dark:text-black  `}
                >
                  {currentSelectedDomain}
                </p>
              </MenuButton>
              <MenuList>
                {allDomains
                  .slice()
                  .reverse()
                  .map((domain: string) => (
                    <MenuItem
                      key={domain}
                      onClick={() => dispatch(setCurrentDomain(domain))}
                    >
                      <p
                        className={`text-xs font-medium cursor-pointer py-1 manrope text-black dark:text-black`}
                      >
                        {domain}
                      </p>
                    </MenuItem>
                  ))}
              </MenuList>
            </Menu>
          ) : (
            <div className=" ">
              <h1 className=" font-bold ml-3 -mt-0.5 text-2xl uppercase">
                Crawler
              </h1>
            </div>
          )}
        </div>
      </div>

      <div className="hidden xl:block">
        {allDomains.length > 0 && (
          <Menu>
            <MenuButton
              variant={"outline"}
              border={"none"}
              _hover={{ borderColor: "transparent" }}
              _active={{ borderColor: "transparent" }}
              fontWeight={"500"}
              as={ButtonChakra}
              rightIcon={<ChevronDownIcon className="h-4 font-medium" />}
            >
              <p
                className={`text-sm font-semibold manrope linked cursor-pointer py-3    text-black dark:text-black  `}
              >
                {currentSelectedDomain}
              </p>
            </MenuButton>
            <MenuList>
              {allDomains
                .slice()
                .reverse()
                .map((domain: string) => (
                  <MenuItem
                    key={domain}
                    onClick={() => dispatch(setCurrentDomain(domain))}
                  >
                    <p
                      className={`text-xs font-medium cursor-pointer py-1 manrope text-black dark:text-black`}
                    >
                      {domain}
                    </p>
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
        )}
      </div>

      {/* <div className="relative hidden md:flex items-center w-80">
        <Input
          type="text"
          placeholder="Search Dashboard"
          className="pr-10 text-xs focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Search className="absolute h-4  right-3 text-fade font-medium" />
      </div> */}
    </div>
  );
};

export default Navbar;
