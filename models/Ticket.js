const shortid = require("shortid");

class Ticket {
  /**
   * Ticket Constructor.
   * @param {string} username
   * @param {nubmer} price
   */
  constructor(username, price) {
    this.id = shortid.generate();
    this.username = username;
    this.price = username;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
