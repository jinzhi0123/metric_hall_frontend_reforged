import axios from "axios";

export async function editUsername(username: string, userid: number, jwt: string): Promise<void> {
    await axios(
        {
            url: `https://api.maiquer.tech/api/user/updateNickName?userId=${userid}&nickname=${username}`,
            headers: {
                Authorization: jwt
            },
            method: "PUT"
        }
    ).then(

    )
}

export async function editSignature(sign: string, userid: number, jwt: string): Promise<void> {
    await axios({
        url: `https://api.maiquer.tech/api/user/updateSignature?userId=${userid}&signature=${sign}`,
        method: "PUT",
        headers: {
            Authorization: jwt
        }
    })
}

export async function editAvatar(url: string, userId: number, jwt: string): Promise<void> {
    await axios({
        url: `https://api.maiquer.tech/api/user/updateAvatar?userId=${userId}&avatar=${url}`,
        headers: {
            Authorization: jwt
        },
        method: "PUT"
    })
}

export async function editBackground(url: string, userId: number, jwt: string): Promise<void> {
    await axios({
        url: `https://api.maiquer.tech/api/user/updateBackImg?userId=${userId}&backImg=${url}`,
        headers: {
            Authorization: jwt
        },
        method: "PUT"
    })
}