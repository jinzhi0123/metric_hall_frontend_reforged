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