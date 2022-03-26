export default class UserInfo {
  constructor(
    public readonly name: string,
    public readonly userid: number,
    public readonly backgd_url: string,
    public readonly avtr_url: string,
    public readonly email: string,
    public readonly phone: string
  ) {}
}
