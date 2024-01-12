var Person = function (firstAndLast) {
  // Cambia solo el código debajo de esta línea
  // Completa el método de abajo e implementa los otros de manera similar
  let firstName = "";
  let lastName = "";

  this.getFirstName = () => `${firstName}`;

  this.getLastName = () => `${lastName}`;

  this.getFullName = () => `${firstName} ${lastName}`;

  this.setFirstName = (first) => {
    if (typeof first == 'string') {
      firstName = first;
    } else {
      return `Error!, first Must be a String`;
    }
  }

  this.setLastName = (last) => {
    if (typeof last == 'string') {
      lastName = last;
    } else {
      return `Error!, last Must be a String`;
    }
  }

  this.setFullName = (firstAndLast) => {
    if (typeof firstAndLast == 'string') {
      const names = firstAndLast.split(' ');
      firstName = names[0];
      lastName = names[1];
    }
    else {
      return `Error!, FullName Must be a String`;
    }
  }

  this.setFullName(firstAndLast);

};

var bob = new Person('Bob Ross');
bob.getFullName();