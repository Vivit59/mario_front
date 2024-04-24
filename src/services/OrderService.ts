export default class OrderService {
  static async order(newOrder: any) {
    try {
      const response = await fetch("http://localhost:8080/order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
      if (!response.ok) {
        throw new Error("order failed");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating order", error);
      throw error;
    }
  }
}
