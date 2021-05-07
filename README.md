# Create Lambda Functions in a VPC in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-lambda-function-vpc)

## How to Use

1. Clone the repository

2. Install the cdk and lambda dependencies

```bash
npm install && npm install --prefix src/my-lambda
```

3. Create the CDK stack

```bash
npx cdk deploy
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx cdk destroy
```
