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
        path: '/products/physical/category', title: '전기자동차', icon: Box, type: 'link', active: false
    },
    {
        path: '/sales/orders', title: '판매현황', icon: DollarSign, type: 'link', active: false
    },
    {
        title: '중고차현황', path: '/pages/list-page', icon: Clipboard ,type: 'link', active: false
    },
    {
        title: '커뮤니티', path: '/media', icon: Camera, type: 'link', active: false
    },
    {
        title: '공지사항', path: '/menus/list-menu', icon: AlignLeft, type: 'link', active: false
    },
    {
        title: '사용자현황', path: '/users/list-user', icon: UserPlus, type: 'link', active: false
    },
    {
        title: '커뮤니티현황', path: '/vendors/list_vendors', icon: Users, type: 'link', active: false
    },
    {
        title: '보고서',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },

    {
        title: '로그아웃',path:'/auth/login', icon: LogIn, type: 'link', active: false
    }
]
