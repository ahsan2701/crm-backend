import { Customer } from "../models/customer.model.js";

const addNewCustomer = async (req, res) => {
  try {
    const { name, email, phone, contacts = [] } = req.body;
    const newCustomer = await Customer.create({ name, email, phone, contacts });
    return res.status(201).json({ customer: newCustomer });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const getContacts = async (req, res, next) => {
  const { id } = req.params;
  const customer = await Customer.findById(id);
  let contacts = [];
  for (let index = 0; index < customer.contacts.length; index++) {
    const contactCustomer = await Customer.findById(customer.contacts[index]);
    contacts.push(contactCustomer);
  }

  return res.status(200).json({ contacts });
};
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();

    return res.status(200).json({
      customers,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error while fetching customers, ${error}` });
  }
};
const getCustomerDetail = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findById(id);
  let contacts = [];
  for (let index = 0; index < customer.contacts.length; index++) {
    const contactCustomer = await Customer.findById(customer.contacts[index]);
    contacts.push(contactCustomer);
  }

  return res.status(200).json({ customer, contacts });
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, education, contacts } = req.body;
    const customer = await Customer.findById(id);
    if (!customer) {
      return res
        .status(400)
        .json({ error: "Customer with this id does not exist" });
    }
    if (name) {
      customer.name = name;
    }
    if (email) {
      customer.email = email;
    }
    if (education) {
      customer.education = education;
    }

    customer.contacts = contacts;
    await customer.save();
    return res.status(200).json({ message: "Customer Updated", customer });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error while updating customer, ${error}` });
  }
};
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    return res.status(200).json({ message: "Customer Deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error while deleting customer, ${error}` });
  }
};
export {
  addNewCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
  getContacts,
  getCustomerDetail,
};
