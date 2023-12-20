document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('calorie-calculator');

    calculatorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve input values
        const exercise = document.getElementById('exercise').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const duration = parseInt(document.getElementById('duration').value, 10);
        const intensity = document.getElementById('intensity').value;

        // Define MET values for exercises
        const metValues = {
            'running': { 'low': 7, 'medium': 10, 'high': 12.5 },
            'cycling': { 'low': 4, 'medium': 6, 'high': 8 },
            'swimming': { 'low': 5.8, 'medium': 9.8, 'high': 11 }
            // Add other exercises and intensities as needed
        };

        if (metValues[exercise] && metValues[exercise][intensity]) {
            const met = metValues[exercise][intensity];
            const caloriesBurned = calculateCalories(met, weight, duration);
            document.getElementById('result').textContent = caloriesBurned.toFixed(2);
        } else {
            document.getElementById('result').textContent = 'Invalid input';
        }
    });

    function calculateCalories(met, weight, duration) {
        // Convert duration to hours
        const durationInHours = duration / 60;
        return met * weight * durationInHours;
    }
});
