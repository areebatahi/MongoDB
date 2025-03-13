import React from "react";
import { Form, Input, Button, Card, Row, Col, Typography } from "antd";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <>
    <div style={{ width: "100vw", background: "#f9f9f9"}}>
      <br />
      <Title level={1} style={{textAlign:"center"}}>Contact Us</Title>
      <Row justify={"space-around"}>
        <Col xs={24} sm={20} md={12} >
          <Card bordered={true} style={{ textAlign: "center"}}>
            <Title level={2} style={{overflow:"hidden"}}>Get in Touch</Title>
            <Paragraph>
              Feel Free to contact us any time. We will get back to you as soon as we can!
            </Paragraph>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" }
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message!" }]}
              >
                <Input.TextArea rows={4} placeholder="Write your message here" />
              </Form.Item>
              <Form.Item>
                <Button style={{backgroundColor : "#001529", color:"white"}} htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} sm={20} md={8} >
          <Card bordered={false} >
            <div style={{ marginTop: "20px"}}>
              <Title level={4}>Contact Info</Title>
              <p><PhoneOutlined /> +91 8009 054294</p>
              <p><MailOutlined /> info@flightmantra.com</p>
              <p><EnvironmentOutlined /> 1000+ Travel partners and 65+ Service cities across India, USA, Canada & UAE</p>
            </div>
            <div style={{ marginTop: "20px"}}>
              <Title level={4}>Follow Us</Title>
              <FacebookOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
              <InstagramOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
              <TwitterOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Col xs={24}>
          <Card bordered={false}>
            <Title level={4}>Find Us on Google Map</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.
            </Paragraph>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.371937109796!2d67.06367908246082!3d24.919396317100873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f185e69999b%3A0xc0d5600cedb1a12f!2sSMIT%20Aliabad%20Female%20Campus!5e0!3m2!1sen!2s!4v1741808852945!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Contact;