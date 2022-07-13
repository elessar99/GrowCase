import {useRoutes} from "react-router-dom"
import HomeView from "../views/HomeView"

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <HomeView/>
            },


            {
                path: '*',
                element: <div style={{backgroundColor : "grey",
                height: '100vh',display:"flex",justifyContent:"center",alignItems:"center",zIndex:"-10"}}>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router