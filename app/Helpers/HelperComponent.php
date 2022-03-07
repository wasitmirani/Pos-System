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
                "single_link" => setSingleLink("Pending Orders", "bell", "kitchen-view", "/cooking-orders"),
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
                        )


                       ]
               ]
               ],

              [

                "menu" => [
                    "title" => 'Reports',
                    'can'=>'user-management-dropdown',
                    "icon" => "trending-up",
                    "sub_menu" => [
                        setSubMenu(
                            "Daily Sales",
                            null,
                            "daily-sales-view",
                            "/daily-sales",
                        ),
                        setSubMenu(
                            "Monthly Sales",
                            null,
                            "monthly-sales-view",
                            "/monthly-sales",
                        ),

                    ]

             ],

            ],

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
