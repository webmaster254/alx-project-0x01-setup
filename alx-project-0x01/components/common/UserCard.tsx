import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}  

export default UserCard 