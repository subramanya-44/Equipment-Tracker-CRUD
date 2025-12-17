// Load environment variables FIRST (before anything else)
require("dotenv").config();

// Import the configured Express app
const app = require("./app");

// Read port from environment or use default
const PORT = process.env.PORT || 5001;

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
