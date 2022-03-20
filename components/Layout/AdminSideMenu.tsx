import { NextPage } from "next";
import { Menu } from "semantic-ui-react"
import Link from "next/link"

const AdminSideMenu: NextPage = () => {
    return (
        <>

            <Menu.Item>
                <Menu.Header>
                    <Link href="/admin">
                        Dashboard
                    </Link>
                </Menu.Header>

            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Manage Products</Menu.Header>
                <Menu.Menu>
                    <Menu.Item>
                        <Link href="admin/products">Products</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#">Add Product</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#">Manage Discount</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#">Manage Stock</Link>
                    </Menu.Item>

                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Manage Users</Menu.Header>

                <Menu.Menu>
                    <Menu.Item>
                        <Link href="#">Users</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#">Add User</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#">Manage Access</Link>
                    </Menu.Item>

                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Site Control</Menu.Header>

                <Menu.Menu>
                    <Menu.Item>
                        <Link href="#">Offers / Banners</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#">Colors</Link>
                    </Menu.Item>

                </Menu.Menu>
            </Menu.Item>
        </>
    )
}

export default AdminSideMenu;