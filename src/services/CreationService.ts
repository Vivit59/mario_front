import User from "../models/security/User";

export default class CreationService {
  static async create(newUser: User) {
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("creation failed");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating user", error);
      throw error;
    }
  }
}
