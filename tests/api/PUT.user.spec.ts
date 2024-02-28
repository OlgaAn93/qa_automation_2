import { test, expect } from '@playwright/test';
import Ajv, { JSONSchemaType } from 'ajv';

test.describe('Update user', () => {
    test('Update user', async ({ request }) => {
        const response = await request.put("/users/2", {
            data: {
                "name": "Test",
                "job": "Software developer"
            }
        })
        expect(response.status()).toBe(200);

        const text = await response.text();
        expect(text).toContain('Test')

        console.log(await response.json()); 
    })
});