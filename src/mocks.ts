import { createUserMock } from "./utils/createMock"

export async function startMocks () {
    createUserMock({account: "000000", balance: 9.98, email: "suelima@email.com", fullName: "Suellen", password: "123456" })
    createUserMock({account: "000010", balance: 9.98, email: "freire@email.com", fullName: "Darlan", password: "123456" })
    createUserMock({account: "000020", balance: 9.98, email: "conrado@email.com", fullName: "Conrado", password: "123456" })
    createUserMock({account: "000030", balance: 9.98, email: "leo@email.com", fullName: "Leonardo", password: "123456" })
    createUserMock({account: "000040", balance: 9.98, email: "raquel@email.com", fullName: "Raquel", password: "123456" })
    createUserMock({account: "000050", balance: 9.98, email: "marcio@email.com", fullName: "Marcio", password: "123456" })
}