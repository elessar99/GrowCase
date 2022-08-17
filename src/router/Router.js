import {Navigate, useRoutes} from "react-router-dom"
import CaseView from "../views/CaseView"
import ItemWithdrawal from "../views/ItemWithdrawal";
import OpenView from "../views/OpenView";
import Request from "../views/Request";
import WlDeposit from "../views/WlDeposit";
import WlWithdrawal from "../views/WlWithdrawal";
import Inventory from "../views/Inventory";
import "./Router.css";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <CaseView/>
            },
            {
                path: '/inventory',
                element: <Inventory/>
            },
            {
                path: "/open/:id",
                element: <OpenView/>,
            },
            {
                path: '/request/',
                element: <Request/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="wl_deposit" />
                    },
                    {
                        path:'wl_deposit',
                        element:<WlDeposit/>
                    },
                    {
                        path:'wl_withdrawal',
                        element:<WlWithdrawal />
                    },
                    {
                        path:'item_withdrawal',
                        element:<ItemWithdrawal />
                    },
                ]

            },
            {
                path: '*',
                element: <div className="notFound">
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router