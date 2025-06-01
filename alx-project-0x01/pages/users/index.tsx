import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                {
                    users?.map(({ id, name, username, email }: UserProps, key: number) => (
                        <div key={key}>
                        <UserCard id={id} name={name} username={username} email={email} />
                        {posts.map(({ title, body, userId, id }: PostProps, key: number) => (
                            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
                        ))}
                        </div>
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
