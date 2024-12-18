<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$host = "localhost";
$user = "root";
$password = "";
$db = "library_db";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die(json_encode(["message" => "Kết nối thất bại: " . $conn->connect_error]));
}

// Nhận dữ liệu từ client
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) && isset($data->password)) {
    $email = $data->email;
    $password = $data->password;

    // Tìm người dùng với email được cung cấp
    $stmt = $conn->prepare("SELECT * FROM Users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Kiểm tra kết quả
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Kiểm tra mật khẩu
        if (password_verify($password, $user['password'])) {
            echo json_encode([
                "message" => "Đăng nhập thành công",
                "user" => [
                    "id" => $user['id'],
                    "name" => $user['name'],
                    "date" => $user['date'],
                    "class" => $user['class'],
                    "major" => $user['major'],
                    "faculty" => $user['faculty'],
                    "school" => $user['school'],
                    "phone" => $user['phone'],
                    "email" => $user['email'],
                    "address" => $user['address']
                ]
            ]);
        } else {
            echo json_encode(["message" => "Mật khẩu không chính xác"]);
        }
    } else {
        echo json_encode(["message" => "Email không tồn tại"]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Dữ liệu không hợp lệ"]);
}

$conn->close();
?>
