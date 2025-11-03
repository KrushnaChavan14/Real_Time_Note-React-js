import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlert({
        show: true,
        variant: 'danger',
        message: 'All fields are required',
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlert({
        show: true,
        variant: 'danger',
        message: 'Please enter a valid email address',
      });
      setLoading(false);
      return;
    }

    // Simulate API call (non-functional for now)
    setTimeout(() => {
      setAlert({
        show: true,
        variant: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h2 className="mb-2">Contact Us</h2>
                  <p className="text-muted">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond
                    as soon as possible.
                  </p>
                </div>

                {alert.show && (
                  <Alert
                    variant={alert.variant}
                    dismissible
                    onClose={() => setAlert({ ...alert, show: false })}
                    className="mb-4"
                  >
                    {alert.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Form>

                <div className="mt-4 text-center text-muted">
                  <small>
                    Note: This is a demo contact form. Messages are not currently being processed.
                  </small>
                </div>
              </Card.Body>
            </Card>

            <Card className="mt-4 shadow-sm border-0 bg-light">
              <Card.Body className="p-4">
                <h5 className="mb-3">Other Ways to Reach Us</h5>
                <Row>
                  <Col xs={12} sm={4} className="text-center mb-3 mb-sm-0">
                    <div style={{ fontSize: '2rem' }}></div>
                    <strong>Email</strong>
                    <p className="small mb-0">support@noteapp.com</p>
                  </Col>
                  <Col xs={12} sm={4} className="text-center mb-3 mb-sm-0">
                    <div style={{ fontSize: '2rem' }}></div>
                    <strong>Phone</strong>
                    <p className="small mb-0">+91 9545151536</p>
                  </Col>
                  <Col xs={12} sm={4} className="text-center">
                    <div style={{ fontSize: '2rem' }}></div>
                    <strong>Address</strong>
                    <p className="small mb-0">CDAC<br />Khargar</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

