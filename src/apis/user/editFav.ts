import axios from "axios";

export async function addFavourite(evaId: number, userId: number, jwt: string): Promise<void> {
    await axios({
        url: `https://api.maiquer.tech/api/user/addLikeEva?userId=${userId}&evaId=${evaId}`,
        headers: {
            Authorization: jwt
        },
        method:"POST",
    })
}

export async function delFavourite(evaId: number, userId: number, jwt: string): Promise<void> {
    await axios({
        url: `https://api.maiquer.tech/api/user/deleteLikeEva?userId=${userId}&evaId=${evaId}`,
        headers: {
            Authorization: jwt
        },
        method:"POST",
    })
}