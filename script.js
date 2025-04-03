// Placeholder for theme toggle
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    alert("Theme toggle feature coming soon!");
  });
  
  // Sign in button
  document.getElementById("signInBtn").addEventListener("click", function () {
    alert("Redirecting to sign in page...");
  });
  
  // Discover button
  function findSchemes() {
    alert("Finding personalized schemes based on eligibility...");
  }
  
  // Chat icon click
  function openChat() {
    alert("Opening chatbot...");
  }
  function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    if (tabName === 'categories') {
      tabs[0].classList.add('active');
      alert('Showing schemes by Categories...');
    } else if (tabName === 'states') {
      tabs[1].classList.add('active');
      alert('Showing schemes by States/UTs...');
    } else if (tabName === 'ministries') {
      tabs[2].classList.add('active');
      alert('Showing schemes by Central Ministries...');
    }
    function switchTab(tabName) {
      document.querySelectorAll('.tab-content').forEach(tab => {
          tab.classList.remove('active');
      });
  
      document.getElementById(tabName).classList.add('active');
  }
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Categories page loaded successfully!");
});
function highlightStep(element) {
  element.style.transform = "scale(1.05)";
  element.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
}

function resetStep(element) {
  element.style.transform = "scale(1)";
  element.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
}

  }
  document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundImage = "url('new-background.jpg')"; // Replace with another image dynamically
});

    
