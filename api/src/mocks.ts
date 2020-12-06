import { createDeviceMock, createUserMock } from "./utils/createMock"

export async function startMocks() {
    //Users
    createUserMock({ account: "000010", balance: 9.98, email: "suelima@email.com", fullName: "Suellen", password: "123456" })
    createUserMock({ account: "000020", balance: 9.98, email: "freire@email.com", fullName: "Darlan", password: "123456" })
    createUserMock({ account: "000030", balance: 9.98, email: "conrado@email.com", fullName: "Conrado", password: "123456" })
    createUserMock({ account: "000040", balance: 9.98, email: "leo@email.com", fullName: "Leonardo", password: "123456" })
    createUserMock({ account: "000050", balance: 9.98, email: "raquel@email.com", fullName: "Raquel", password: "123456" })
    createUserMock({ account: "000060", balance: 9.98, email: "marcio@email.com", fullName: "Marcio", password: "123456" })

    //Devices
    createDeviceMock({ serialNumber: "N319A0F0210", name: "Porta da Padaria", description: "Esse dispositivo é responsável por abrir a porta da padaria", status: false })
    createDeviceMock({ serialNumber: "A267BAZF551", name: "Cofre do Banco XPTO", description: "Esse dispositivo é responsável por abrir o cofre do banco XPTO", status: false })
    createDeviceMock({ serialNumber: "G491A05441A", name: "Passaporte Fulano de Tal", description: "Esse dispositivo é responsável por conceder acesso como passaporte para Fulano de Tal", status: false })
    
}