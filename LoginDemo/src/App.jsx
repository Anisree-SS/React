import Register from "./FormData"
var isLogin=true;
function App() {
  return (
    <>
      <div className="container">
        <Register isRegister={isLogin}/>
      </div>
    </>
  )
}
export default App;
