import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
    return (
        <div>
            <Header />
            <main>
                {
                    users?.map(({ id, name, username, email }: UserProps, key: number) => (
                        <UserCard id={id} name={name} username={username} email={email} key={key} />
                    ))
                }
            </main>
        </div>
    )
}



export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return {
        props: {
            users
        }
    }
}

export default Users
