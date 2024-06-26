import { useLocation } from "react-router-dom";

export default function UserPage() {
    const location = useLocation();
    const data = location.state;
    return (
        <div className="main__container">
            <h1><em>Name:</em> <u>{data.name}</u></h1>
            <p><em>Email:</em> <u>{data.email}</u></p>
            <p><em>City:</em> <u>{data.address.city}</u></p>
            <p><em>Street:</em> <u>{data.address.street}</u></p>
            <p><em>Zipcode:</em> <u>{data.address.zipcode}</u></p>
        </div>
    );
}