import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../component/Helmet";
import CommonSection from "../component/CommonSection";
import BlogList from "../component/BlogList";
import Footer from "../component/Footer";

const Blog = () => {
  return (
    <>
      <Helmet title="Blogs">
        <CommonSection title="Blogs" />
        <section>
          <Container>
            <Row>
              <BlogList />
              <BlogList />
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  );
};

export default Blog;
