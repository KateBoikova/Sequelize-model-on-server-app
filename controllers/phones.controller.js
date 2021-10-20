const { Phone } = require('./../models');
const _ = require('lodash');

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
        limit: 5,
      },
    });
    res.status(200).send(foundPhones);
  } catch (e) {
    next(e);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const [foundPhone] = await Phone.findAll({
      raw: true,
      where: { id: phoneId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (foundPhone) {
      res.status(200).send(foundPhone);
    } else {
      res.status(404).send('Phone not found');
    }
  } catch (e) {
    next(e);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPhone = await Phone.create(body);
    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(200).send(preparedPhone);
  } catch (e) {
    next(e);
  }
};
