<?php

namespace App\Helpers;

class HelperComponent
{

    public static function SideBar()
    {
        return [

            [
                "single_link" => setSingleLink("dashboard", "activity", "dashboard-view", "/"),
            ],
            [
                "single_link" => setSingleLink("Pos", "printer", "pos-view", "/pos-system"),
            ],
            [
                "single_link" => setSingleLink("Cooking Status", "bell", "kitchen-view", "/cooking-orders"),
            ],
            [
                "menu" => [
                       "title" => 'Orders Management',
                       'can'=>'orders-management-dropdown',
                       "icon" => "shopping-bag",
                       "sub_menu" => [
                           setSubMenu(
                               "Daily Orders",
                               null,
                               "daily-orders-view",
                               "/daily-orders",
                           ),
                           setSubMenu(
                            "Orders",
                            null,
                            "orders-view",
                            "/orders",
                        ),



                       ]
               ]
               ],

            //   [

            //     "menu" => [
            //         "title" => 'User Management',
            //         'can'=>'user-management-dropdown',
            //         "icon" => "user",
            //         "sub_menu" => [
            //             setSubMenu(
            //                 "Users",
            //                 null,
            //                 "users-view",
            //                 "/users",
            //             ),
            //             setSubMenu(
            //                 "Roles",
            //                 null,
            //                 "roles-view",
            //                 "/roles",
            //             ),
            //             setSubMenu(
            //                 "Permissions",
            //                 null,
            //                 "permissions-view",
            //                 "/permissions",
            //             ),

            //         ]

            //  ],

            // ],

            [
                "single_link" => setSingleLink("Categories", "link", "categories-view", "/categories"),
            ],
            [
                "single_link" => setSingleLink("Products", "link", "products-view", "/products"),
            ],
            [
                "single_link" => setSingleLink("Tables", "link", "tables-view", "/tables"),
            ],

        ];
    }
}
