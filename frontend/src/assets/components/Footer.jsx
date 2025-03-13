import { Layout, Row, Col, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className="footer">
      <div className="topFooter">
        <Row >
          {/* About Us */}
          <Col xs={24}>
            <Title level={4} style={{color: "white"}}>About Us</Title>
            <Text className="gray">
              We provide high-quality products at the best prices.
            </Text>
          </Col>
          
          {/* Quick Links */}
          <Col xs={24} md={6}>
            <Title level={4} style={{color: "white"}}>Quick Links</Title>
            <Space direction="vertical">
              <Link to="/products" className="link">Products</Link>
              <Link to="/about" className="link">About</Link>
              <Link to="/contact" className="link">Contact</Link>
              <Link to="/faq" className="link">FAQ</Link>
            </Space>
          </Col>
          
          {/* Customer Service */}
          <Col xs={24} md={6}>
            <Title level={4} style={{color: "white"}}>Customer Service</Title>
            <Space direction="vertical">
              <Link to="/returns" className="link">Returns</Link>
              <Link to="/shipping" className="link">Shipping</Link>
              <Link to="/terms" className="link">Terms & Conditions</Link>
              <Link to="/privacy" className="link">Privacy Policy</Link>
            </Space>
          </Col>
          
          {/* Follow Us */}
          <Col xs={24} md={6}>
            <Title level={4} style={{color: "white"}}>Follow Us</Title>
            <Space size="large">
              <Link to="https://facebook.com" className="link">
                <FacebookOutlined />
              </Link>
              <Link to="https://twitter.com" className="link">
                <TwitterOutlined />
              </Link>
              <Link to="https://instagram.com" className="link">
                <InstagramOutlined />
              </Link>
              <Link to="https://linkedin.com" className="link">
                <LinkedinOutlined />
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
      {/* Bottom Footer */}
      <div className="bottomFooter">
        © 2025 YourBrand. All Rights Reserved.
      </div>
    </Footer>
  );
}
export default  AppFooter