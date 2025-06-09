import { Router } from "express";
import {
  addNewCustomer,
  deleteCustomer,
  getContacts,
  getCustomerDetail,
  getCustomers,
  updateCustomer,
} from "../controllers/customers.controller.js";

const customerRouter = Router();
customerRouter.post("/add-customer", addNewCustomer);
customerRouter.get("/get-customers", getCustomers);
customerRouter.post("/update-customer/:id", updateCustomer);
customerRouter.delete("/delete-customer/:id", deleteCustomer);
customerRouter.get("/get-contacts/:id", getContacts);
customerRouter.get("/get-customer-detail/:id", getCustomerDetail);
export default customerRouter;
