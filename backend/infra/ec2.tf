resource "aws_instance" "journify" {
  ami                    = "ami-02a2af70a66af6dfb"
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.journify_tf_ec2_key.key_name
  vpc_security_group_ids = [aws_security_group.journify_ec2_security_group.id]

  tags = {
    Name = "journify-server"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo yum install -y docker",
    ]

    connection {
      type        = "ssh"
      host        = self.public_ip
      user        = "ec2-user"
      private_key = tls_private_key.journify_tf_ec2_key.private_key_pem
    }
  }

  # install docker compose
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker
              service docker start
              usermod -a -G docker ec2-user
              chkconfig docker on
              EOF
}

output "instance_user_data" {
  description = "IP of the EC2 instance"
  value       = aws_instance.journify.user_data
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.journify.public_ip
}

