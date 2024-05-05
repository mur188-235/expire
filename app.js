function myClick() {
    var days = prompt("Enter the number of days:");
    
    if (days !== null && days !== "") {
      var currentDate = new Date();
      var expirationDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000);
      
      var formattedExpirationDate = expirationDate.toLocaleDateString();
      
      alert("Expiration Date: " + formattedExpirationDate);
    } else {
      alert("Please enter a valid number of days.");
    }}