import { test, expect, defineConfig } from '@playwright/test';

class BasePage {
    static async pause(milliseconds) {
        await page.waitForTimeout(milliseconds);
    }

    static logInfo(message) {
        logger.log(message);
    }
}

export default BasePage;