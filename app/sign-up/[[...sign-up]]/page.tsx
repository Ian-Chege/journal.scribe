import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignUp afterSignInUrl="/new-user" redirectUrl="/new-user" />
    </div>
  )
}

export default SignUpPage
