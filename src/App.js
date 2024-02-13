const { createBrowserRouter } = require("react-router-dom");
const { default: HeaderComponent } = require("./component/HeaderComponent");

const AppLayout =()=>(
  <HeaderComponent>

  </HeaderComponent>

)

const appRouter=createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>

}
])

export default appRouter ;