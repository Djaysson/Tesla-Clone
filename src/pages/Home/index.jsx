import React from "react";
import { Section } from "../../components/Section";
import { Container } from "./styles";
export function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        darkBtnText="Custom Order"
        lightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        darkBtnText="Custom Order"
        lightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        darkBtnText="Custom Order"
        lightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        darkBtnText="Custom Order"
        lightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        darkBtnText="Order now"
        lightBtnText="Learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        darkBtnText="Order now"
        lightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        darkBtnText="Shop now"
        lightBtnText=""
      />
    </Container>
  );
}
