import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class HorizontalSliderPage extends BasePage {
    async HorizontalSliderPage() {
        await this.goToUrl('/horizontal_slider');
    }
    async setSliderValue(value: number) {
        const slider = this.locator('xpath=//*[@id=\"content\"]/div/div/input');
        const sliderValue = this.locator('#range');
        const currentValue = parseFloat(await sliderValue.textContent() || '0');
        const steps = (value - currentValue) / 0.5; // assuming each step is 0.5
        for (let i = 0; i < Math.abs(steps); i++) {
            if (steps > 0) {
                await slider.press('ArrowRight');
            } else {
                await slider.press('ArrowLeft');
            }
        }
    }
    async verifySliderValue(value: number) {
        const sliderValue = this.locator('#range');
        const currentValue = parseFloat(await sliderValue.textContent() || '0');
        expect(currentValue).toBeCloseTo(value, 5);
    }
} 
