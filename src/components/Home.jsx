import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div className="bg-gray-100 min-h-screen p-16">
            <h1 className="text-4xl font-bold">Manjit Singh</h1>
            <p className="text-xl font-semibold mt-2">Understanding Redux in Rract JS</p>
            <div className="space-x-8 mt-8">
                <Link to={"/"} >Home</Link>
                <Link to={"/products"} >Products</Link>
            </div>
        </div>
    )
}

export default Home;