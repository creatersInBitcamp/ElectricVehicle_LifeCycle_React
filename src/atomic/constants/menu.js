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
        path: '/admin/dashboard', title: '종합현황', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        path: '/admin/elecCar', title: '전기자동차', icon: Box, type: 'link', active: false
    },
    {
        path: '/admin/orders', title: '판매현황', icon: DollarSign, type: 'link', active: false
    },
    {
        title: '중고차현황', path: '/admin/usedCar', icon: Clipboard ,type: 'link', active: false
    },
    {
        title: '커뮤니티', path: '/admin/community', icon: Camera, type: 'link', active: false
    },
    {
        title: '공지사항', path: '/admin/notice', icon: AlignLeft, type: 'link', active: false
    },
    {
        title: '사용자현황', path: '/admin/users', icon: UserPlus, type: 'link', active: false
    },
    {
        title: '서비스현황', path: '/service', icon: Users, type: 'link', active: false
    },
    {
        title: '보고서',path:'/admin/reports', icon: BarChart, type: 'link', active: false
    }
]
