import React, { FC } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from '@nextui-org/react'
import '../../src/style.css'
import MvhLogo from '../utilsComponents/MvhLogo'

const AppNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const menuItems: Array<string> = [
    'Booking',
    'Back to Home',
    'Reviews',
    'My booking',
  ]
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className=''>
        <NavbarContent className=''>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='md:hidden sm:block'
          />
          <NavbarBrand>
            <MvhLogo className='h-14 w-14 object-fit pex' />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page'>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Link href='#'>Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color='primary' href='#' variant='flat'>
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                className='w-full p-1 border-spacing-2'
                href='#'
                size='lg'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
export default AppNavbar
