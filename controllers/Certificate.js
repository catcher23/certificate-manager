import {Certificate} from '../models';
import uuid from 'uuid/v4'

const createCertificate = (req, res) =>
    Certificate
    .create({
        privateKey: uuid(),
        body: req.body.body,
        customerId: req.body.customerId
    })
    .then(certificate => res.status(201).send(certificate))
    .catch(error => res.status(400).send(error));

const toggleCertificateActivity = (req, res) =>
    Certificate
        .find({where: {id: req.params.id}})
        .then(certificate => {
            if (!certificate) {
                return res.status(404).send({
                message: 'Certificate Not Found',
            })}
            certificate
              .update({active: !certificate.active})
              .then(updatedCertificate => res.status(200).send(updatedCertificate))
              .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));

const deleteCertificate = (req, res) =>
    Certificate
        .findById(req.params.id)
        .then(certificate => {
        if (!certificate) {
            return res.status(400).send({
                message: 'Certificate Not Found',
            });
        }

        return certificate
            .destroy()
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));

const getCertificates = (req, res) =>
    Certificate
        .all()
        .then(certificates => res.status(200).send(certificates))
        .catch(error => res.status(400).send(error));

export const CertificateController = {
    createCertificate,
    deleteCertificate,
    getCertificates,
    toggleCertificateActivity,
}
