import {useRoutes} from "react-router-dom"
import CaseView from "../views/CaseView"
import OpenView from "../views/OpenView";
import "./Router.css";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <CaseView/>
            },
            {
                path: "/open/:id",
                element: <OpenView/>,
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