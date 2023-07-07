'use client';
import "@cloudscape-design/global-styles/index.css"
import TestForm from "@/app/TestForm";
import {AppLayout, Container, ContentLayout, Header} from "@cloudscape-design/components";
import * as React from "react";

export default function Home() {
  return (
      <AppLayout
        contentType="form"
        content={
          <ContentLayout
            header={<Header variant="h1">Cloudscape Form Demo</Header>}
          >
            <TestForm />
          </ContentLayout>
        }
        navigationHide={true}
        toolsHide={true}
      />
  )
}
