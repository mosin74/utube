import HomeComponent from "./component/HomeComponent";

const { createBrowserRouter } = require("react-router-dom");
const { default: HeaderComponent } = require("./component/HeaderComponent");

const AppLayout =()=>(
  <>
  <HeaderComponent/>
  <HomeComponent/>
  </>

)

const appRouter=createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>

}
])

export default appRouter ;