import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import tasks from "./tasks";

const TablePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState(tasks);
  const [formData, setFormData] = useState({ name: "", dueDate: "", status: "" });
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: "", dueDate: "", status: "" });
  };

  const handleSave = () => {
    const newId = Math.max(...tableData.map((task) => task.id)) + 1;
    const newTask = { id: newId, ...formData, dueDate: new Date(formData.dueDate) };
    setTableData([...tableData, newTask]);
    setShowModal(false);
    setFormData({ name: "", dueDate: "", status: "" });
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortedData = tableData.sort((a, b) => {
      if (newOrder === "asc") {
        return a.dueDate - b.dueDate;
      } else {
        return b.dueDate - a.dueDate;
      }
    });
    setTableData([...sortedData]);
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th onClick={handleSort}>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
  {tableData.map((task) => (
    <tr key={task.id} onClick={() => history.push(`/tasks/${task.id}/edit`)}>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.dueDate.toLocaleDateString()}</td>
      <td>{task.status}</td>
    </tr>
  ))}
</tbody>
      </Table>
      <Button variant="primary" onClick={handleAdd}>
        Add Task
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter due date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
```javascript
              <Form.Control
                type="text"
                placeholder="Enter status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TablePage;