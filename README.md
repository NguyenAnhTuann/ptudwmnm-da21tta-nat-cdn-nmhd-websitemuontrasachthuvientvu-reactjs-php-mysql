# XÂY DỰNG WEBSITE MƯỢN - TRẢ SÁCH THƯ VIỆN TVU
# Nguyễn Anh Tuấn - 110121123 - DA21TTA
# --------------------------------------------------------------
# Mô tả đồ án
 ```bash- Tên đề tài: Xây dựng Website mượn - trả sách thư viện TVU
- Giáo viên hướng dẫn: Phạm Thị Trúc Mai
- Sinh viên thực hiện: Nguyễn Anh Tuấn - 110121123 - DA21TTA
- Thời gian thực hiện: Từ ngày 01/12/2024 đến 11/01/2025
 ```
- Nội dung đề tài:
```bash
- Cung cấp nền tảng hiển thị các sách có trong thư viện và độc giả có thể gửi yêu cầu mượn sách và chờ đến khi admin của thư viện duyệt đơn mượn thì độc giả có thể đến thư viện nhận sách.

```
- Yêu Cầu:
```bash
1. Hiển thị thông tin chi tiết của các sách có trong thư viện
2. Có chức năng gửi yêu cầu mượn dành cho độc giả
3. Khu vực dành riêng để quản lý tài khoản người dùng (đăng nhập, đăng ký, chỉnh sửa thông tin).
4. Hệ thống thông báo qua email khi đơn yêu cầu mượn của độc giả được duyệt
5. Phần quản trị các thông tin về sách, quản trị độc giả và quản trị các đơn yêu cầu mượn của độc giả 
```
-	Phương pháp thực hiện:
```bash
1. Front-end: Sử dụng ReactJS để xây dựng giao diện người dùng và người quản trị, hiển thị thông tin rõ ràng, dễ dàng sử dụng.
2. Back-end: Sử dụng NodeJS (framework ExpressJS) để xử lý logic nghiệp vụ, tương tác với cơ sở dữ liệu MySQL. Triển khai các chức năng chính: đăng nhập, đăng ký, đăng tin tìm đồ thất lạc hoặc đồ nhặt được (kèm theo vị trí sử dụng Api Google Maps), tìm kiếm, gửi thông báo qua email, quản lý thông tin người dùng, thông tin bài đăng.
3. Cơ sở dữ liệu: Thiết kế cơ sở dữ liệu MySQL, các bảng dữ liệu: người dùng, bài đăng, loại đồ vật, vị trí, mối quan hệ giữa các bảng để đảm báo tính toàn viện dữ liệu, các chức năng chính trong cơ sở dữ liệu: thêm, sửa, xóa, tìm kiếm.
4. Kết nối Front-end và Back-end.
5. Tích hợp bản đồ (API Google Maps).
6. Chức năng gửi thông báo qua email khi có tin tức mới về đồ nhặt được hoặc đồ bị thất lạc.
```
- Kết quả đạt được:
```bash
1. Hoàn chỉnh Website theo đúng như phần mô tả ở trên.
2. Giao diện người dùng và người quản trị hiển thị thông tin rõ ràng, dễ dàng sử dụng.
3. Bảo mật và hiệu quả.
4. Đảm bảo tính toàn vẹn dữ liệu trong cơ sở dữ liệu.
5. Website có tích hợp bản đồ, gửi thông báo qua email.
6. Kiểm thử Website trước khi nộp đồ án.

```
## Mục lục
- [Lịch Trình Thực Hiện](#lịch-trình-thực-hiện)
- [Cài Đặt](#cài-đặt)
- [Sử Dụng](#sử-dụng)
- [Liên Hệ](#liên-hệ)

## Lịch Trình Thực Hiện
- Từ ngày 11/11/2024 đến 17/11/2024: Tìm hiểu về ReactJS, NodeJS, MySQL, Google maps API, gửi thông báo qua mail, thiết kế các giao diện cơ bản như đăng nhập, đăng ký, đăng bài viết mới.
- Từ ngày 25/11/2024 đến 01/12/2024: Bắt đầu tạo các bảng bao gồm các thuộc tính trong CSDL, Xây dựng các chức năng đăng nhập, đăng ký, đăng bài viết mới kết hợp kiểm thử CSDL.
- Từ ngày 09/12/2024 đến 15/12/2024:
  + Tiến hành thiết kế các phần giao diện còn lại như hiển thị bài đăng, phần tìm kiếm, thông tin liên lạc, khu vực quản lý người dùng, bài đăng, vị trí.
  + Xây dựng các chức năng còn lại như tìm kiếm đồ thất lạc theo các tiêu chí như ngày mất, địa điểm, loại đồ vật, quản lý tài khoản người dùng (đăng nhập, đăng ký, chỉnh sửa thông tin), quản lý bài đăng (thông tin, địa điểm, số điện thoại người đăng bài viết).
  + Hệ thống thông báo qua mail khi có thông tin mới liên quan đến đồ thất lạc hoặc đồ nhặt được.
- Từ ngày 23/12/2024 đến 29/12/2024: Triển khai Website lên host, nền tảng aws, docker,…
- Từ ngày 30/12/2024 đến 05/01/2025: Kiểm thử toàn bộ dự án, hoàn thành Website, quyển báo cáo, slide thuyết trình, commit lên GitHub(commit mỗi tuần như tiến trình).

1. Cài đặt yêu cầu:
    ```bash
    - Cài đặt NodeJS
    ```
   ```bash
   - Cài đặt ReactJS
   ``` 
   ```bash
   - Cài đặt MySQL
   ```
## Sử Dụng

Sử dụng các ngôn ngữ:

```bash
- ReactJS
```
```bash
- NodeJS
```
```bash
- MySQL
```
## Liên Hệ

- Mail: 110121123@st.tvu.edu.vn or nguyenanhtuan.profile@gmail.com
- Phone/Zalo: 0869094929
- Facebook: https://www.facebook.com/NguyenAnhTuxn
