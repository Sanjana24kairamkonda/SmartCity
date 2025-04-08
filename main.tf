# Step 1: Provider Configuration
# File: main.tf
# ----------------------------------
provider "google" {
  credentials = file(var.credentials_file)
  project     = var.project_id
  region      = var.region
  zone        = var.zone
}

# ----------------------------------
# Step 2: VPC Network
# ----------------------------------
resource "google_compute_network" "vpc_network" {
  name                    = "react-app-vpc"
  auto_create_subnetworks = true
}

# ----------------------------------
# Step 3: GKE Cluster
# ----------------------------------
resource "google_container_cluster" "primary" {
  name     = "react-gke-cluster"
  location = var.zone

  network    = google_compute_network.vpc_network.name
  remove_default_node_pool = true
  initial_node_count       = 1

  ip_allocation_policy {}
}

# ----------------------------------
# Step 4: GKE Node Pool
# ----------------------------------
resource "google_container_node_pool" "primary_nodes" {
  name       = "react-node-pool"
  cluster    = google_container_cluster.primary.name
  location   = var.zone

  node_config {
    machine_type = "e2-medium"
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }

  initial_node_count = 2
}

# ----------------------------------
# Step 5: Outputs (Optional)
# ----------------------------------
output "cluster_name" {
  value = google_container_cluster.primary.name
}

output "kubernetes_endpoint" {
  value = google_container_cluster.primary.endpoint
}
