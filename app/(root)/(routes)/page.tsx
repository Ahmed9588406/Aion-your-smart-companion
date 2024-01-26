import { UserButton } from "@clerk/nextjs";

const LoginPage = () => {
    return(
        <div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    );
}

export default LoginPage