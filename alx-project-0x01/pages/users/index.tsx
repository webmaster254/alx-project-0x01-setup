import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserData, UserProps } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ users }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: users.length + 1 });
    };
    
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <h1 className="text-2xl font-semibold">User Content</h1>
            <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
            <main className="p-4">
                {
                    users?.map(({ id, name, username, email }: UserProps, key: number) => (
                        <div key={key}>
                        <UserCard id={id} name={name} username={username} email={email} />
                       
                        </div>
                    ))
                }
            </main>

            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
            )}
        </div>
    )
}



export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await postsResponse.json()

    return {
        props: {
            users,
            posts
        }
    }
}

export default Users;
