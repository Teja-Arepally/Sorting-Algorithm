function sortNumbers() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    // Bubble Sort Algorithm
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    document.getElementById("sorted-numbers").textContent = `[ ${numbers.join(", ")} ]`;
}
