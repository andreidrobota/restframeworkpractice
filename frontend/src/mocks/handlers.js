import { rest } from "msw"

const baseURL = "https://reactchallenge-b201ad870555.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 3,
                "username": "AndreiDr",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 3,
                "profile_image": "https://res.cloudinary.com/dvbu7yreb/image/upload/v1/media/images/Placeholder_jjfvap"
            }

            ))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
]

