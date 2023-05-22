1. install git:

   https://git-scm.com/download/win

   https://git-scm.com/download/mac

   Install xong kiểm tra đã cài đặt thành công bằng cách mở terminal và gõ lệnh:

   `git -v`

2. đăng ký tài khoản tại:

   https://github.com/

3. Config git https:
   Mở terminal và gõ:

   `git config --global user.name <username>`

   `git config --global user.email <mailaddress>`

   ex:
   `git config --global user.name hoangnm.fpt`

   Config xong kiểm tra lại đã thành công chưa bằng lệnh:

   `git config --list`

   hoặc:

   `git config user.name`

   `git config user.email`

4. Cấu hình SSH Key:

- mục đích để sử dụng phương thức xác thực SSH thay vì HTTPS và có thể sử dụng cho nhiều lần sau mà không cần nhập lại mật khẩu trên máy tính cá nhân.

- SSH Key có vai trò như một chìa khoá để remote máy tính cá nhân với tài khoản github của bạn

  4.1. Mở terminal
  4.2. Kiểm tra xem máy của bạn đã có ssh key chưa bằng cách:

  ```
  cd ~/.ssh
  ls
  ```

  4.3. Nếu tồn tại id_dsa và id_dsa.pub thì bạn đã có ssh key. Nếu chưa có, bạn tạo ssh key mới bằng lệnh:

  `ssh-keygen -o`

  Sau đó có thể vào thư mục .ssh/id_dsa.pub để lấy mã hoặc dùng lệnh:

  `cat ~/.ssh/id_rsa.pub`

  Copy đoạn mã hiển thị ra và paste vào kho cấu hình ssh-key của máy chủ git (trong tài khoản github hoặc gitlab của bạn.)

5. Những câu lệnh git cơ bản:
   Đứng tại thư mục gốc của dự án, mở terminal và thực hành một số lệnh cơ bản:

   - Khởi tạo dự án và theo dõi những thay đổi của dự án với git:

     `git init`

   - Thêm các thay đổi vaò khu vực staging:

     `git add .`

   - Chuyển những thay đổi sang khu vực directory:

     `git commit -m "new message"`

   - Đưa những thay đổi lên repo online:

     `git push`

   - Tạo một branch mới và đặt nó làm nhánh chính với tên là "main":

     `git branch -M main`

   - Kiểm tra trạng thái hiện tại của những thay đổi:

     `git status`

   - Liệt kê ra các commit, thời gian và tác giả của những commit đó:

     `git log`

Link youtube: https://www.youtube.com/playlist?list=PLZdbOLxIxNPAmLLQhvslWbe3Li_wEKbWD
