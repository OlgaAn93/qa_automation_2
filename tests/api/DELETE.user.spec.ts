import { test, expect } from '@playwright/test';
import Ajv, { JSONSchemaType } from 'ajv';

test.describe('Delete user', () => {
    test.only('Delete user', async ({ request }) => {
        const response = await request.delete("/users/2")
        expect(response.status()).toBe(204);
    })
});