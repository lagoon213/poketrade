import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Collection from "./collection/Collection";
import MyCollection from "./my-collection/My-collection";
import AddToCollection from "./addToCollection/AddToCollection";
import SetCardSelection from "./setCardSelection/SetCardSelection";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path={"/collection"} element={<Collection />} />
                <Route path={"/my-collection"} element={<MyCollection />} />
                <Route path={"/addtocollection"} element={<AddToCollection />} />
                <Route path="/set/:setId" element={<SetCardSelection />} />

            </Routes>
        </>
    );
}
