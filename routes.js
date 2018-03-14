import express from 'express';
import {
      CertificateController,
      CustomerController
} from './controllers';

const router = express.Router();

router.route('/certificates')
      .get(CertificateController.getCertificates)
      .post(CertificateController.createCertificate)


router.route('/certificates/:id')
      //.get(CertificateController.getCertificate)
      .delete(CertificateController.deleteCertificate)
      .put(CertificateController.toggleCertificateActivity)
      
router.route('/customers')
      .get(CustomerController.getCustomers)
      .post(CustomerController.createCustomer)
      //.put(CertificateController.updateCertificate);

router.route('/customers/:id')
      .get(CustomerController.getCustomer)
      .delete(CustomerController.deleteCustomer);

export default router;