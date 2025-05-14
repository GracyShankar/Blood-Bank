// Map Initialization
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 40.7128, lng: -74.0060 }, // New York City
  });

  // Sample blood bank locations
  const bloodBanks = [
    { lat: 40.7128, lng: -74.0060, title: "NYC Blood Bank" },
    { lat: 40.7306, lng: -73.9352, title: "Brooklyn Blood Center" },
    { lat: 40.7589, lng: -73.9851, title: "Manhattan Donor Hub" },
  ];

  bloodBanks.forEach(bank => {
    new google.maps.Marker({
      position: { lat: bank.lat, lng: bank.lng },
      map: map,
      title: bank.title,
    });
  });
}

// Search Form Validation
const searchForm = document.getElementById("search-form");
const bloodGroupInput = document.getElementById("blood-group");
const cityInput = document.getElementById("city");
const bloodGroupError = document.getElementById("blood-group-error");
const cityError = document.getElementById("city-error");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  bloodGroupError.style.display = "none";
  cityError.style.display = "none";

  if (!bloodGroupInput.value) {
    bloodGroupError.style.display = "block";
    isValid = false;
  }

  if (!cityInput.value.trim()) {
    cityError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert(`Searching for ${bloodGroupInput.value} donors in ${cityInput.value}`);
    // Mock search result update
    document.getElementById("search-results").innerHTML = `
      <div class="card donor-card">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="Donor" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">John Smith</h5>
          <p class="card-text">Blood Group: ${bloodGroupInput.value}<br>Location: ${cityInput.value}</p>
        </div>
      </div>
    `;
  }
});

// Register Form Validation
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const registerBloodGroupInput = document.getElementById("register-blood-group");
const registerCityInput = document.getElementById("register-city");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const registerBloodGroupError = document.getElementById("register-blood-group-error");
const registerCityError = document.getElementById("register-city-error");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  nameError.style.display = "none";
  emailError.style.display = "none";
  registerBloodGroupError.style.display = "none";
  registerCityError.style.display = "none";

  if (!nameInput.value.trim()) {
    nameError.style.display = "block";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (!registerBloodGroupInput.value) {
    registerBloodGroupError.style.display = "block";
    isValid = false;
  }

  if (!registerCityInput.value.trim()) {
    registerCityError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    registerForm.reset();
  }
});