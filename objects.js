var invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    this.unpaid.push( { name: name, amount: amount });
  },
  totalDue: function() {
    for (var i = 0, total = 0; i < this.unpaid.length; i++) {
      total += Number(this.unpaid[i].amount);
    }
    return total;
  },
  totalPaid: function() {
    for (var i = 0, total = 0; i < this.paid.length; i++) {
      total += Number(this.paid[i].amount);
    }
    return total;
  },
  payInvoice: function(name) {
    var updated_unpaid = [];
    for (var i = 0; i < this.unpaid.length; i++) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid[i]);
      } else {
        updated_unpaid.push(this.unpaid[i]);
      }
    }
    this.unpaid = updated_unpaid;
  }
};

