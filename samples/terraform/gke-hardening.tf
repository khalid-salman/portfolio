# Sanitized GKE hardening pattern (non-proprietary excerpt)
# Illustrates private cluster + Workload Identity + Cloud Armor-ready ingress posture.

variable "project_id" {
  type = string
}

variable "region" {
  type    = string
  default = "me-central2"
}

resource "google_container_cluster" "prod" {
  name     = "clinic-prod"
  location = var.region
  project  = var.project_id

  remove_default_node_pool = true
  initial_node_count       = 1

  networking_mode = "VPC_NATIVE"
  private_cluster_config {
    enable_private_nodes    = true
    enable_private_endpoint = false
    master_ipv4_cidr_block  = "172.16.0.0/28"
  }

  workload_identity_config {
    workload_pool = "${var.project_id}.svc.id.goog"
  }

  release_channel {
    channel = "REGULAR"
  }
}

resource "google_container_node_pool" "general" {
  name     = "general"
  cluster  = google_container_cluster.prod.name
  location = var.region
  project  = var.project_id

  autoscaling {
    min_node_count = 2
    max_node_count = 8
  }

  node_config {
    machine_type = "e2-standard-4"
    oauth_scopes = ["https://www.googleapis.com/auth/cloud-platform"]

    workload_metadata_config {
      mode = "GKE_METADATA"
    }

    shielded_instance_config {
      enable_secure_boot          = true
      enable_integrity_monitoring = true
    }
  }
}
