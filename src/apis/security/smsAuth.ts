import axios from "axios";

export async function smsSend(phone: string): Promise<boolean> {
    let res = false;
    await axios
        .post(`https://api.maiquer.tech/api/sms/smsCodeSend?phone=${phone}`)
        .then(() => {
            res = true;
        });
    return res;
}

export async function smsAuth(userid: number, phone: string, code: string): Promise<{ success: boolean, message: string }> {
    let success = false;
    let message = ""
    await axios
        .post(`https://api.maiquer.tech/api/sms/login/${userid}?phone=${phone}&code=${code}`)
        .then((response) => {
            if (response.data.code == 0) {
                success = true;
            }
            message = response.data.message
        });
    return {success, message};
}
