import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: '종합현황', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: '전기자동차', icon: Box, type: 'sub', active: false, children: [
            {
                title: 'Physical', type: 'sub', active: false, children: [
                    { path: '/products/physical/category', title: 'Category', type: 'link' },
                    { path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
                    { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
                    { path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
                    { path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
                ]
            }
        ]
    },
    {
        title: '판매현황', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/transactions', title: 'Transactions', type: 'link' },
        ]
    },
    {
        title: '중고차현황', icon: Clipboard , type: 'sub', active: false, children: [
            { path: '/pages/list-page', title: 'List Page', type: 'link' },
            { path: '/pages/create-page', title: 'Create Page', type: 'link' },
        ]
    },
    {
        title: '커뮤니티', path: '/media', icon: Camera, type: 'link', active: false
    },
    {
        title: '공지사항', icon: AlignLeft, type: 'sub', active: false, children: [
            { path: '/menus/list-menu', title: 'List Menu', type: 'link' },
            { path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
        ]
    },
    {
        title: '사용자현황', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },
    {
        title: '커뮤니티현황', icon: Users, type: 'sub', active: false, children: [
            { path: '/vendors/list_vendors', title: 'Vendor List', type: 'link' },
            { path: '/vendors/create-vendors', title: 'Create Vendor', type: 'link' },
        ]
    },
    {
        title: '보고서',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },

    {
        title: '로그아웃',path:'/auth/login', icon: LogIn, type: 'link', active: false
    }
]
