import { test, expect } from '@playwright/test';
import Ajv, { JSONSchemaType } from 'ajv';

let email = process.env.DEFAULT_USERNAME1 || '';
let password = process.env.DEFAULT_PASSWORD1 || '';

test.describe('Registration', () => {
    test('Register and save token', async ({ request }) => {
        let authToken: string;
        interface MyData {
            id: number
            token: string
        }
        const schema: JSONSchemaType<MyData> = {
            type: 'object',
            properties: {
                id: { type: 'number' },
                token: { type: 'string' },
            },
            required: ['id', 'token'],
        };
        const response = await request.post("/register", {
            data: {
                "email": email,
                "password": password
            }
        })
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        authToken = responseBody.token;
        process.env.AUTH_TOKEN = authToken;
        expect(responseBody["id"]).toBeDefined();
        expect(responseBody["token"]).toBeDefined();

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const isValid = validate(response);

        if (isValid) {
            console.log('JSON data is valid');
        } else {
            console.error('JSON data is invalid:', validate.errors);
        }
    })
});