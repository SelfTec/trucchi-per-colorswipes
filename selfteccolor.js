/**
 * SelftecColor - Basic Color Conversion Utility
 * Author: Selftec
 * License: Custom
 */

const SelftecColor = {
    /**
     * Converts a HEX color to an RGB object.
     * @param {string} hex - HEX color string (e.g., "#FF5733" or "FF5733").
     * @returns {{r: number, g: number, b: number} | null} - RGB object or null if invalid.
     */
    hexToRgb(hex) {
        if (typeof hex !== 'string') return null;
        
        hex = hex.replace(/^#/, '');

        if (hex.length !== 6) {
            console.error('[SelftecColor] Invalid HEX format.');
            return null;
        }

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        if ([r, g, b].some(isNaN)) {
            console.error('[SelftecColor] Invalid HEX values.');
            return null;
        }

        return { r, g, b };
    }
};

// Example usage:
// console.log(SelftecColor.hexToRgb('#FF5733')); // Output: { r: 255, g: 87, b: 51 }

module.exports = SelftecColor;
