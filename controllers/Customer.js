import {Customer, Certificate} from '../models';
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 5;

const generatePasswordHash = (plainTextPassword) =>
  bcrypt.hashSync(plainTextPassword, SALT_ROUNDS);

const createCustomer = (req, res) =>
    Customer
    .create({
        name: req.body.name,
        email: req.body.email,
        password: generatePasswordHash(req.body.password)
    })
    .then(customer => res.status(201).send(customer))
    .catch(error => res.status(400).send(error));


const getCustomers = (req, res) =>
    Customer
    .findAll({
        include: [{model: Certificate}],
      })
    .then(customers => res.status(200).send(customers))
    .catch(error => res.status(400).send(error));


const getCustomer = (req, res) =>
    Customer
      .findById(req.params.id, {
        include: [{
          model: Certificate,
        }],
      })
      .then(customer => {
        if (!customer) {
          return res.status(404).send({
            message: 'Customer Not Found',
          });
        }
        return res.status(200).send(customer);
      })
      .catch(error => res.status(400).send(error));


const deleteCustomer = (req, res) =>
  Customer
    .findById(req.params.id)
    .then(customer => {
      if (!customer) {
        return res.status(400).send({
          message: 'Customer Not Found',
        });
      }
      customer
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));


export const CustomerController = {
    createCustomer,
    getCustomers,
    getCustomer,
    deleteCustomer
}