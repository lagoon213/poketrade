import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Collection from "./collection/Collection";
import MyCollection from "./my-collection/My-collection";
import AdToCollection from "./add-to-collection/Add-to-collection";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path={"/collection"} element={<Collection />} />
                <Route path={"/my-collection"} element={<MyCollection />} />
                <Route path={"/addtocollection"} element={<AdToCollection />} />
            </Routes>
        </>
    );
}
