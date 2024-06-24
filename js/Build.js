class Build {
  apartments = [];
  maxCount = null;

  constructor(max) {
    this.maxCount = max;
  }

  addApartment(apartment) {
    this.validateApartment(apartment)

    if (this.apartments.length >= this.maxCount) {
      throw new Error('Cannot add more!')
    }
    this.apartments.push(apartment);
  }

  validateApartment(apartment) {
    if (this.apartments.some(app => app === apartment)) {
      throw new Error('This apartment already exists here!')
    }
  }

}

export default Build;