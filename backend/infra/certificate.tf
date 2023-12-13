data "aws_route53_zone" "journify" {
  name         = "journify.info"
  private_zone = false
}

resource "aws_acm_certificate" "journify" {
  domain_name       = "api.journify.info"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "journify_validation" {
  for_each = {
    for dvo in aws_acm_certificate.journify.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.journify.zone_id
}

resource "aws_acm_certificate_validation" "journify" {
  certificate_arn         = aws_acm_certificate.journify.arn
  validation_record_fqdns = [for record in aws_route53_record.journify_validation : record.fqdn]
}
