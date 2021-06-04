import { expect as expectCDK, matchTemplate, MatchStyle, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkDemo1 from '../lib/cdk-demo-1-stack';

test('Check Stack Not Empty', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).notTo(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

test('Check Custom VPC Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::EC2::VPC'))
});

test('Check Subnet Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::Subnet'))
});

test('Check NatGateway Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::NatGateway'))
});

test('Check EIP Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::EIP'))
});

test('Check VPCGatewayAttachment Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::VPCGatewayAttachment'))
});

test('Check InternetGateway Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::InternetGateway'))
});

test('Check SecurityGroup Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::SecurityGroup'))
});

test('Check SecurityGroupIngress Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::SecurityGroupIngress'))
});

test('Check SecurityGroupEgress Exist', () => {
  const app = new cdk.App();
  
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  
  expectCDK(stack).to(haveResource('AWS::EC2::SecurityGroupEgress'))
});

test('Check  ExistCheck ECS Cluster Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::ECS::Cluster'))

});

test('Check ECS Service Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::ECS::Service'))
});

test('Check ECS TaskDefinition Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::ECS::TaskDefinition'))
});

test('Check AutoScaling AutoScalingGroup Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::AutoScaling::AutoScalingGroup'))
});

test('Check ElasticLoadBalancingV2 LoadBalancer Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::LoadBalancer'))
});

test('Check ElasticLoadBalancingV2 TargetGroup Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::TargetGroup'))
});

test('Check ElasticLoadBalancingV2 Listener Exist', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkDemo1.CdkDemo1Stack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::Listener'))
});
