import { Request, Response } from 'express';

import request from 'superagent'

export default class PayAuthService {

    static async checkAuthViaPayment(data: any): Promise<Boolean> {

        const obiBank = "https://gw-dev.obiebank.banfico.com/";
        const paymentConsentAPI = obiBank + "obie-pisp/v3.1/pisp/domestic-payment-consents";

        const consentResponse = await request
        .post(paymentConsentAPI)
        .set({
            'accept': 'application/json; charset=utf-8',
            'charset': 'utf-8',
            'x-fapi-financial-id': 'asdasd',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJSeHpPWmc5dW42dTZyNE50T014elNVbUR6cFZwU3gyaVhha25aWUNxUnRJIn0.eyJleHAiOjE2MDczMjM0NzUsImlhdCI6MTYwNzI5NDY3NSwianRpIjoiNmQ2YWU2ZWYtNjhkZS00ZWIzLWFmNzMtM2M1YTQyODNkN2Q5IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLm9iaWViYW5rLmJhbmZpY28uY29tL2F1dGgvcmVhbG1zL3Byb3ZpZGVyIiwiYXVkIjoiUFNEVUstTkNBLVBJU1AwMVRFU1QiLCJzdWIiOiI3YTk5ZGFkNC1iOTc0LTQyNGYtYmUwZS1hZDQ2Njk0OTQyNjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJQU0RVSy1OQ0EtUElTUDAxVEVTVCIsInNlc3Npb25fc3RhdGUiOiJlMDRiZmM0NS1lNzgwLTRmNjQtYmU0Yi0zNGI5MGRlNjgyNzAiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIHBheW1lbnRzIiwic3ViIjoic2VydmljZS1hY2NvdW50LXBzZHVrLW5jYS1waXNwMDF0ZXN0IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcHNkdWstbmNhLXBpc3AwMXRlc3QiLCJjbGllbnRfaWQiOiJQU0RVSy1OQ0EtUElTUDAxVEVTVCJ9.dgNxm5qpydle1g6jyKkLXDN0jocLzvqLUd8c46X61kZvhPYhL_rxhczlcnxVSFX8rfrdYkx3GQHGJQTIyOGNbM4ynEv-pWQtqIjp8AtDezmK9sL5whIsh4Juc2l1B6eneKnFYZ1YyU2Q1MgZBR4lvbazwq651lqAN0TFQ0XAAw1RLwgIRPoEFb3XYGfVWIaFrOXAU-DGdsXBvSOd48PaBfQcPq0PLylOn0efg8AQ1zD8FIVhZXmAW0tUk7BSyQV2ne9-rZ1wBwwMpkKf7qfh8QEn_xD2L9KU-_0mGsSdfmbQ5s-jxlO3jb7RyQz1QMnbiweqvYJ6e3SEej6OKtP4RQ',
            'x-idempotency-key': 'asdasd',
            'x-jws-signature': 'asdasd',
            'Content-Type': 'application/json; charset=utf-8'
        })
        .send({
            "Data": {
              "Initiation": {
                "InstructionIdentification": "ACME412",
                "EndToEndIdentification": "FRESCO.21302.GFX.20",
                "InstructedAmount": {
                  "Amount": "165.88",
                  "Currency": "GBP"
                },
                "CreditorAccount": {
                  "SchemeName": "UK.OBIE.SortCodeAccountNumber",
                  "Identification": "100997368272",
                  "Name": "ACME Inc",
                  "SecondaryIdentification": "0002"
                },
                "RemittanceInformation": {
                  "Reference": "FRESCO-101",
                  "Unstructured": "Internal ops code 5120101"
                }
              }
            },
            "Risk": {
              "PaymentContextCode": "EcommerceGoods",
              "MerchantCategoryCode": "5967",
              "MerchantCustomerIdentification": "053598653254",
              "DeliveryAddress": {
                "AddressLine": [
                  "Flat 7",
                  "Acacia Lodge"
                ],
                "StreetName": "Acacia Avenue",
                "BuildingNumber": "27",
                "PostCode": "GU31 2ZZ",
                "TownName": "Sparsholt",
                "CountySubDivision": [
                  "Wessex"
                ],
                "Country": "UK"
              }
            }
          });
        

        console.log(consentResponse);

        console.log("status =", consentResponse.status);

        return true;
    }

}