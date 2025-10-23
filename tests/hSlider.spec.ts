import { test, expect } from '../fixtures/pom.fixture';

test.describe('Horizontal Slider', () => {
    test('Horizontal Slider - Set and Verify Value', async ({ pm }) => {
        await pm.horizontalSliderPage.HorizontalSliderPage();
        await pm.horizontalSliderPage.setSliderValue(3.5);
        await pm.horizontalSliderPage.verifySliderValue(3.5);
    }
    );
});