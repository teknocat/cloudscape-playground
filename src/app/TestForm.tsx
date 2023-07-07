import * as React from "react";
import {Input, SpaceBetween, FormField, Header, Container, Form, Button} from "@cloudscape-design/components";

const TestForm = () => {
  const [awsAccountId, setAwsAccountId] = React.useState("");
  const [bucketName, setBucketName] = React.useState("");
  const [errorMessages, setErrorMessages] = React.useState({awsAccountId: "", bucketName: ""});

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const errorMessage = {awsAccountId: "", bucketName: ""};

        /^[0-9]{12}$/.test(awsAccountId) || (errorMessage["awsAccountId"] = "AWSアカウントID は12桁の数値です。");
        awsAccountId || (errorMessage["awsAccountId"] = "必須項目です。");
        /^[a-z0-9.-]{3,63}$/.test(bucketName) || (errorMessage["bucketName"] = "バケット名 のフォーマットが正しくありません。");
        bucketName || (errorMessage["bucketName"] = "必須項目です。");
        setErrorMessages(errorMessage);

        if (!errorMessage["awsAccountId"] && !errorMessage["bucketName"]) {
          console.log('success');
        }
      }}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="primary">Submit</Button>
          </SpaceBetween>
        }
      >
        <Container
          header={
            <Header
              variant="h2"
            >
              Test Form
            </Header>
          }
        >
          <SpaceBetween size="l">
            <FormField
              constraintText="12桁の数字を入力してください。"
              description="設定したいAWSアカウントIDを入力してください。"
              errorText={errorMessages["awsAccountId"]}
              label="AWSアカウントID"
            >
              <Input
                placeholder="123456789012"
                onChange={({ detail }) => setAwsAccountId(detail.value)}
                value={awsAccountId}
                ariaRequired={true}
              />
            </FormField>
            <FormField
              constraintText="3文字以上63文字以下の数字、小文字、ピリオド、ハイフンを入力してください。"
              description="設定したいバケット名を入力してください。"
              errorText={errorMessages["bucketName"]}
              label="バケット名"
            >
              <Input
                placeholder="mybucket"
                onChange={({ detail }) => setBucketName(detail.value)}
                value={bucketName}
                ariaRequired={true}
              />
            </FormField>
          </SpaceBetween>
        </Container>
      </Form>
    </form>
  );
}

export default TestForm;