import { INavbarData } from "./helper";

export const navbarData: INavbarData[] =  [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Tổng quan'
    },
    {
        routeLink: 'sanpham',
        icon: 'fal fa-cube',
        label: 'Sản Phẩm',
        items: [
            {
                routeLink: 'sanpham/lsdmsp',
                label: 'Danh mục sản phẩm',
            },
            {
                routeLink: 'sanpham/lsdmnsp',
                label: 'Danh mục nhóm sản phẩm',
                items: [
                    {
                        routeLink: 'sanpham/doanvat',
                        label: 'Đồ ăn vặt'
                    },
                    {
                        routeLink: 'sanpham/nuocgk',
                        label: 'Nước giải khát'
                    }
                ]
            }
        ]
    },
    {
        routeLink: 'kho',
        icon: 'fal fa-warehouse',
        label: 'Kho',
        items: [
            {
                routeLink: 'kho/lskho',
                label: 'Danh sách kho',
            }
           
        ]
    },
    {
        routeLink: 'user',
        icon: 'fal fa-user',
        label: 'Người dùng',
        expanded: true,
        items: [
            {
                routeLink: 'user/lsuser',
                label: 'Danh sách người dùng'
            },
            {
                routeLink: 'user/role',
                label: 'Phân quyền'
            }
        ]
    },
    {
        routeLink: 'donhang',
        icon: 'fal fa-truck',
        label: 'Đơn Hàng'
    },
    {
        routeLink: 'chinhanh',
        icon: 'fal fa-building',
        label: 'Chi nhánh',
    },
    {
        routeLink: 'nhacungcap',
        icon: 'fal fa-handshake',
        label: 'Nhà cung cấp'
    },
    {
        routeLink: 'taichinh',
        icon: 'fal fa-chart-bar',
        label: 'Tài chính'
    },
];
