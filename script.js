document.addEventListener('DOMContentLoaded', function () {
    // Get counter element, button, upgrade button, and upgrade cost element
    const counterElement = document.getElementById('counter');
    const upgradeCostElement = document.getElementById('upgradeCost');
    const incrementBtn = document.getElementById('incrementBtn');
    const upgradeBtn = document.getElementById('upgradeBtn');
  
    // Initialize counter value, upgrade cost, and auto-increment interval
    let counterValue = 0;
    let upgradeCost = 10;
    let autoIncrementInterval;
  
    // Update counter display
    function updateCounter() {
      counterElement.textContent = counterValue;
      upgradeCostElement.textContent = upgradeCost;
    }
  
    // Increment counter value when button is clicked
    incrementBtn.addEventListener('click', function () {
      counterValue++;
      updateCounter();
    });
  
    // Upgrade function to buy automatic increment
    upgradeBtn.addEventListener('click', function () {
      if (counterValue >= upgradeCost) {
        counterValue -= upgradeCost;
        upgradeCost *= 2; // Increase upgrade cost for the next upgrade
        updateCounter();
        // Start automatic increment after buying the upgrade
        autoIncrementInterval = setInterval(function () {
          counterValue++;
          updateCounter();
        }, 1000); // Automatic increment every 1000ms (1 second)
      } else {
        alert("Not enough points to buy the upgrade!");
      }
    });
  
    // Initial update
    updateCounter();
  });
  