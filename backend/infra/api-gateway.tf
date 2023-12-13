
resource "aws_apigatewayv2_api" "journify" {
  name          = "journify-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "staging" {
  name        = "staging"
  api_id      = aws_apigatewayv2_api.journify.id
  auto_deploy = true
}

resource "aws_apigatewayv2_api_mapping" "journify_v1" {
  api_id          = aws_apigatewayv2_api.journify.id
  domain_name     = aws_apigatewayv2_domain_name.journify.id
  stage           = aws_apigatewayv2_stage.staging.id
  api_mapping_key = "v1"
}

output "custom_domain_api_v1" {
  value = "https://${aws_apigatewayv2_api_mapping.journify_v1.domain_name}/${aws_apigatewayv2_api_mapping.journify_v1.api_mapping_key}"
}

resource "aws_apigatewayv2_integration" "journify" {
  api_id           = aws_apigatewayv2_api.journify.id
  integration_type = "HTTP_PROXY"

  integration_method = "ANY"
  integration_uri    = "http://${aws_instance.journify.public_ip}/{proxy}"
}

resource "aws_apigatewayv2_route" "journify" {
  api_id    = aws_apigatewayv2_api.journify.id
  route_key = "ANY /{proxy+}"

  target = "integrations/${aws_apigatewayv2_integration.journify.id}"
}


resource "aws_apigatewayv2_integration" "journify_default" {
  api_id           = aws_apigatewayv2_api.journify.id
  integration_type = "HTTP_PROXY"

  integration_method = "ANY"
  integration_uri    = "http://${aws_instance.journify.public_ip}"
}

resource "aws_apigatewayv2_route" "journify_default" {
  api_id    = aws_apigatewayv2_api.journify.id
  route_key = "$default"

  target = "integrations/${aws_apigatewayv2_integration.journify_default.id}"
}
