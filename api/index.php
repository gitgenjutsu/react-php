<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include("connect.php");

// Save data into table
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET') {
    // Prepare the SQL query
    $sql = "SELECT * FROM users";
    try {
        // Prepare the statement
        $stmt = $pdo->prepare($sql);

        // Execute the statement
        $stmt->execute();

        // Fetch all rows as an associative array
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Convert the result to JSON and output it
        echo json_encode($result);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else
    if ($method == 'POST') {
        $user = file_get_contents('php://input'); // to read JSON data

        // Decode JSON data into an associative array
        $userData = json_decode($user, true);

        $name = $userData['name'];
        $email = $userData['email'];

        // Set the current timestamp for created_at and updated_at
        $timestamp = date('Y-m-d H:i:s');

        // Prepare the SQL query
        $sql = "INSERT INTO users (name, email, created_at, updated_at) VALUES (:name, :email, :created_at, :updated_at)";

        try {
            // Prepare the statement
            $stmt = $pdo->prepare($sql);

            // Bind parameters
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':created_at', $timestamp);
            $stmt->bindParam(':updated_at', $timestamp);

            // Execute the statement
            $stmt->execute();
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
?>