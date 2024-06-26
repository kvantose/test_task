import { data } from "./data.js";
import "./UserPage.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Home() {
  return (
    <>
      <div className="user__page__container">
        {data.map((user) => (
          <div className="user__page__card" key={user.id}>
            <img src={user.avatar} alt={user.username} />
            <div className="user__page__card__info">
              <p>{user.username}</p>
              <p>{user.biography}</p>
              <div className="contacts__container">
                <EmailIcon />
                <p>{user.email}</p>
              </div>
              <div className="contacts__container">
                <PhoneIcon />
                <p>{user.tel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
