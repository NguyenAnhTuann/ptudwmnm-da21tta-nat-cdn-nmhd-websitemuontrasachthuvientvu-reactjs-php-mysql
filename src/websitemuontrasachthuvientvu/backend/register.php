<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$host = "localhost";
$user = "root";
$password = "";
$db = "library_db";

// Kết nối MySQL
$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die(json_encode(["message" => "Kết nối thất bại: " . $conn->connect_error]));
}

// Nhận dữ liệu từ client
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name) &&
    isset($data->password) &&
    isset($data->date) &&
    isset($data->class) &&
    isset($data->major) &&
    isset($data->faculty) &&
    isset($data->school) &&
    isset($data->phone) &&
    isset($data->email) &&
    isset($data->address)
) {
    // Lấy dữ liệu từ client
    $name = $data->name;
    $password = password_hash($data->password, PASSWORD_BCRYPT); // Mã hóa mật khẩu
    $date = $data->date;
    $class = $data->class;
    $major = $data->major;
    $faculty = $data->faculty;
    $school = $data->school;
    $phone = $data->phone;
    $email = $data->email;
    $address = $data->address;

    // Chuẩn bị câu lệnh SQL
    $stmt = $conn->prepare("INSERT INTO Users (name, password, date, class, major, faculty, school, phone, email, address) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $name, $password, $date, $class, $major, $faculty, $school, $phone, $email, $address);

    // Thực thi câu lệnh
    if ($stmt->execute()) {
        echo json_encode(["message" => "Đăng ký thành công"]);
    } else {
        echo json_encode(["message" => "Đăng ký thất bại", "error" => $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Dữ liệu không hợp lệ"]);
}

$conn->close();
?>
