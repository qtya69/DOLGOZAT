/*
* File: script.js
* Author: Traxler Koppány
* Copyright: 2025, Traxler Koppány
* Group: Szoft IN
* Date: 2025-04-27
* Github: https://github.com/qtya69/
* Licenc: MIT
*/

function calculateSurface() {
    const radius = parseFloat(document.getElementById('radius').value);
    const length = parseFloat(document.getElementById('length').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(radius) || isNaN(length) || radius <= 0 || length <= 0) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Érvénytelen adatok!</div>`;
        return;
    }

    // szamolas
    const surfaceArea = 2 * Math.PI * radius * (radius + length);
    resultDiv.innerHTML = `
        <div class="alert alert-success">
            Felszín: ${surfaceArea.toFixed(2)}
        </div>
    `;
}