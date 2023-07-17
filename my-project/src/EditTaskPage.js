import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import tasks from "./tasks";

const EditTaskPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleSave = () => {
    const index = tasks.findIndex((task) => task.id === parseInt(id));
    tasks[index] = { ...task, ...formData };
    history.push("/tasks");
  };

  const handleCancel = () => {
    history.push("/tasks");
  };

  return (
    <div className="container">
      <h1>Edit Task</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            defaultValue={task.name}
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
            defaultValue={task.dueDate.toISOString().split("T")[0]}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: new Date(e.target.value) })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter status"
            defaultValue={task.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default EditTaskPage;