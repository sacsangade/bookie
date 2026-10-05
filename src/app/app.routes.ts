import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { SidebarVerticle } from './components/layout/sidebar-verticle/sidebar-verticle';
import { Categories } from './components/pages/booking/categories/categories';
import { AddCategory } from './components/pages/booking/add-category/add-category';
import { EditCategory } from './components/pages/booking/edit-category/edit-category';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';
import { Pagenotfound } from './components/pages/pagenotfound/pagenotfound';


export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path:'dashboard',
        component:SidebarVerticle,
        title:'Home | Bookie',
        children: [
            {
            path:'',
            component:Home,
            },
        ],

    },
    {
        path:'about',
        component:SidebarVerticle,
        title:'About | Bookie',
        children: [
            {
            path:'',
            component:About,
            },
        ],

    },
    {
        path:'contact',
        component:SidebarVerticle,
        title:'Contact | Bookie',
        children: [
            {
            path:'',
            component:Contact,
            },
        ],

    },
    {
        path:'booking',
        component:SidebarVerticle,
        children: [
            {
            path:'categories',
            component:Categories,
            title:'Booking - Categories | Bookie',
            },
            {
            path:'add-category',
            component:AddCategory,
            title:'Booking - Add Category | Bookie',
            },
             {
            path:'edit-category',
            component:EditCategory,
            title:'Booking - Edit Category | Bookie',
            },
        ],
    },
    {
        path: '**',
        component:Pagenotfound,
        title:'Page Not Found | Bookie',
    },
];
