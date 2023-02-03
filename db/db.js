const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create and save a ticket.
   * @param {string} username Owner of the ticket.
   * @param {number} price Price of the ticket.
   * @returns {Ticket} Returns the ticket object.
   */
  create(username, price) {
    const ticket = new Ticket();
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * Create multiple ticket.
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @return {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * Return all tickets.
   * @returns
   */
  find() {
    return this.tickets;
  }

  /**
   * Get a single ticket by id.
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  // TODO: Need to continue from lecture 17. 46:00

  updateById() {}

  deleteById() {}
  draw() {}
}

module.exports = new MyDB();
