class Apartment {
  residents = [];

  addResident(person) {
    this.validatePerson(person)
    this.residents.push(person);
    return this.residents
  }

  validatePerson(person) {
    if (this.residents.some(res => res.name === person.name)) throw new Error('This person already lives here!')
  }
}

export default Apartment;