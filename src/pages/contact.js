import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Contacts from "../components/Contacts";

const ContactPage = () => (
  <Layout>
    <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <SEO title="Contattaci" />
        <Contacts/>
    </div>

  </Layout>
);

export default ContactPage;
