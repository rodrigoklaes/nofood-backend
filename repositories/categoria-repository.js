'use strict'

require('../models/categoria-model');

const base = require('../bin/base/repository-base');


class CategoriaRepository {
  constructor() {
    this._base = new base('Categoria')
  }

  async create(data) {
    return await this._base.create(data);
  }

  async update(id, data) {
    return await this._base.update(id,data);
  }

  async find() {
    return await this._base.find();
  }

  async findById(id) {
    return await this._base.findById(id);
  }

  async delete(id) {
    return await this._base.delete(id);
  }
}

module.exports = CategoriaRepository;
