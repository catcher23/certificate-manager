import React from 'react';
import {
    Modal,
    Alert,
    Button,
} from 'react-bootstrap';

export const ConfirmationModal = props => {
    const {
        objectState,
        confirmChangeObject,
        hideConfirmationModal,
        page,
    } = props

    return (
        <Modal
            show={objectState.showConfirmationModal}
            onHide={hideConfirmationModal}
            container={page}
            aria-labelledby="contained-modal-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">{objectState.changeType.toUpperCase()}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {objectState.objectToChange && !objectState.error && !objectState.isFetching &&
                    <Alert bsStyle="warning">
                        Are you sure you want to {objectState.changeType} this <strong>{objectState.type}</strong>?
                    </Alert>
                }

                {objectState.objectToChange && objectState.error &&
                    <Alert bsStyle="warning">
                        Failed. <strong>{objectState.error} </strong>
                    </Alert>
                }

                {objectState.objectToChange && !objectState.error && objectState.isFetching &&
                    <Alert bsStyle="success">
                        <strong>Processing ...</strong>
                    </Alert>
                }

                {!objectState.objectToChange && !objectState.error && !objectState.isFetching &&
                    <Alert bsStyle="success">
                        <strong>The {objectState.type} has been {objectState.changeType}d</strong>
                    </Alert>
                }
            </Modal.Body>

            <Modal.Footer>
                {!objectState.successMsg && !objectState.isFetching &&
                    <div>
                        <Button onClick={confirmChangeObject}>Yes</Button>
                        <Button onClick={hideConfirmationModal}>No</Button>
                    </div>
                }
                {objectState.successMsg && !objectState.isFetching &&
                    <Button onClick={hideConfirmationModal}>Close</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}
