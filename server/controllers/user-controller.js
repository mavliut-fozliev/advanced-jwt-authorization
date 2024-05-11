class UserController {
  async registration() {
    try {
      // Logic
    } catch (error) {
      console.log("Server Error", error);
    }
  }

  async login() {
    try {
      // Logic
    } catch (error) {
      console.log("Server Error", error);
    }
  }

  async logout() {
    try {
      // Logic
    } catch (error) {
      console.log("Server Error", error);
    }
  }

  async activate() {
    try {
      // Logic
    } catch (error) {
      console.log("Server Error", error);
    }
  }

  async refresh() {
    try {
      // Logic
    } catch (error) {
      console.log("Server Error", error);
    }
  }

  async getUsers(req, res) {
    try {
      res.json(["123", "456"]);
    } catch (error) {
      console.log("Server Error", error);
    }
  }
}

module.exports = new UserController();
