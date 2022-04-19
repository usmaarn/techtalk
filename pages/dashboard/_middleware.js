
import { withAuth } from "next-auth/middleware"

export default withAuth({
    callbacks: {
        authorized: ({req, token}) => {
            console.log(token)
            return !!token
        }
    },
})