let incomingPush = true;
let recentPush = true;
let featurePush = true;
function pushIncoming() {
    let incoming = document.querySelector('#hoat-dong .bottom .incoming');
    let content = document.querySelector('#hoat-dong .incoming .content');
    let button = document.querySelector('.incoming #more');
    if(incomingPush === true){
    button.className = 'bx bx-up-arrow';
    content.style.height = '250px';
    incoming.style.height = '580px';
    incomingPush = false;
    } else if(incomingPush === false){
        incoming.style.height = '380px';
        content.style.height = '50px';
        button.className = 'bx bx-down-arrow';
        incomingPush = true;
    }
}
function pushRecent() {
    let recent = document.querySelector('#hoat-dong .bottom .recent');
    let button = document.querySelector('.recent #more');
    let content = document.querySelector('#hoat-dong .recent .content');
    if(recentPush === true){
    recent.style.height = '580px';
    content.style.height = '250px';
    button.className = 'bx bx-up-arrow';
    recentPush = false;
    } else if(recentPush === false){
        recent.style.height = '380px';
        content.style.height = '50px';
        button.className = 'bx bx-down-arrow';
        recentPush = true;
    }
}
function pushFeature() {
    let feature = document.querySelector('#hoat-dong .bottom .feature');
    let content = document.querySelector('#hoat-dong .feature .content');
    let button = document.querySelector('.feature #more');
    if(featurePush === true){
    feature.style.height = '580px';
    content.style.height = '250px';
    button.className = 'bx bx-up-arrow';
    featurePush = false;
    } else if(featurePush === false){
        feature.style.height = '380px';
        content.style.height = '50px';
        button.className = 'bx bx-down-arrow';
        featurePush = true;
    }
}
function closeInformation() {
    let modal = document.querySelector('#hoat-dong #information')
    modal.style.display = 'none';
    background.style.display = 'none';
}
let content = document.querySelector('#hoat-dong #infor');
let modal = document.querySelector('#hoat-dong #information');
let image = document.querySelector('#hoat-dong #information img');
let title = document.querySelector('#hoat-dong #information #title');
let background = document.querySelector('#hoat-dong .backgroundInfor');
let comingSoon = document.querySelector('#hoat-dong #information');
let contentTag = document.querySelectorAll('#hoat-dong .content');


for(var i=0; i < contentTag.length; ++i){
    contentTag[i].onclick = function(e) {
        id = e.target.getAttribute('postID');
        
        switch(id){
            case 'IT01':
                content.innerHTML = `
                IT-ZONE là câu lạc bộ học thuật trực thuộc CAIT – Trung tâm Công nghệ thông tin và Ứng dụng, trường Đại học Tôn Đức Thắng. Câu lạc bộ IT-ZONE được thành lập với mục đích hỗ trợ tất cả cán bộ và sinh viên của trường về vấn đề liên quan đến IT. Đây cũng là nơi các sinh viên có niềm đam mê với công nghệ thông tin tìm đến để học tập và trau dồi thêm nhiều kiến thức. Năm nay, nhân dịp sinh nhật của IT-ZONE được 5 tuổi, câu lạc bộ tổ chức cuộc thi “ Thiết kế poster mừng sinh nhật 5 tuổi IT-ZONE ” nhằm tạo ra sân chơi cho các sinh viên có niềm đam mê với đồ hoạ và thiết kế. Hãy tham gia cùng IT-ZONE để tạo ra sản phẩm khác biệt của riêng bạn nhé! <br/> -------------------------------------------------------------------------------------- 
                <br>
                ⚡️Thông tin cuộc thi:
                <br>
                👉	Đối tượng tham gia: Tất cả sinh viên TDTU
                <br>
                👉	Cách thức tham gia:
                <br>
                    - Bước 1: Like fanpage IT-ZONE – Trường Đại học Tôn Đức Thắng (<a style="color: blue; text-decoration: underline" href="https://www.facebook.com/caitzone"> www.facebook.com/caitzone/</a>).
                    <br>
                    - Bước 2: Like, share bài viết này ở chế độ công khai và tag ít nhất 3 người bạn là sinh viên của TDTU.
                    <br>
                    - Bước 3: Tham khảo poster mẫu ở link dưới đây để làm đúng theo yêu cầu của BTC.
                    <br>
                👉	Thời gian diễn ra cuộc thi
                <br>
                + Giai đoạn 1 (diễn ra từ ngày 2/11/2021-5/11/2021): Đăng kí tham gia và nộp bài thi về cho BTC.
                <br>
                + Giai đoạn 2 (diễn ra từ ngày 6/11/2021-8/11/2021): Kêu gọi mọi người bình chọn cho bài thi của mình.
                <br>
                👉	Cách tính điểm bình chọn: 
                <br>
                + Đối với 1 lượt LIKE      : 1 điểm
                <br>
                + Đối với 1 lượt TIM        : 2 điểm
                <br>
                + Đối với 1 lượt SHARE  : 3 điểm
                       ( Điểm sẽ được tính theo thang điểm 100 – 50% sẽ do số lượt bình chọn và 50% còn lại sẽ do BTC chấm điểm.)
                       <br>
                       🏆	Quyền lợi khi tham gia:
                       <br>
                       + Đối với những sinh viên tham gia có điểm cao sẽ được trao giải thưởng theo định giá sau:
                       <br>
                       - Giải nhất : 150.000 VNĐ
                       <br>
                       - Giải nhì   : 100.000 VNĐ
                       <br>
                       - Giải ba    :  50.000 VNĐ
                       <br>
                       + Đối với những sinh viên tham gia nhưng có điểm số không được cao sẽ được ghi nhận ngoại khoá theo quy chế của nhà trường vào HKI niên khoá 2021-2022."`;
                modal.style.display = 'block';
                image.src = 'images/birthdayITzone.png';
                title.innerHTML = 'CUỘC THI THIẾT KẾ POSTER MỪNG SINH NHẬT 5 TUỔI IT-ZONE ';
                comingSoon.style.height = '90%';
                background.style.display = 'block';
                modal.scrollTop = 0;
                break;
            case 'IT02':
                content.innerHTML = `
                IT-ZONE là một câu lạc bộ học thuật trực thuộc CAIT – Trung tâm Công nghệ thông tin và Ứng dụng, trường Đại học Tôn Đức Thắng. Câu lạc bộ IT-ZONE đã đồng hành cùng sinh viên trong ngôi nhà chung mang tên bác Tôn được 5 năm. Năm nay, nhân dịp kỷ niệm 5 năm tuổi của IT-ZONE, câu lạc bộ tổ chức cuộc thi “Tìm hiểu về IT-ZONE và Công nghệ xung quanh ta” nhằm giúp sinh viên trường Đại học Tôn Đức Thắng có cơ hội hiểu thêm về IT-ZONE cũng như về các món đồ công nghệ, điện tử trong cuộc sống hằng ngày.
    Trong bối cảnh dịch bệnh hiện nay, rất nhiều học sinh, sinh viên và cả công nhân viên chức đều khó có cơ hội trở lại nơi học và làm việc, vì vậy những món đồ công nghệ cao như laptop, máy tính để bàn, smartphone, máy tính bảng…đóng vai trò rất quan trọng trong cuộc sống hiện tại của chúng ta. Vậy bạn đã thật sự hiểu hết về những món đồ đầy phức tạp này chưa? Hãy cùng IT-ZONE khám phá thêm những kiến thức mới về chúng nhé!<br>
    --------------------------------------------------------------------------------------
    <br>
    🔥🔥Thông tin cuộc thi:
    <br>
    + Thời gian tổ chức: từ ngày 2/11/2021 đến 23:59 ngày 5/11/2021.
    <br>
    + Hình thức tham gia: trắc nghiệm trên Google Form.
    <br>
    + Đối tượng tham gia: tất cả sinh viên trường Đại học Tôn Đức Thắng
    <br>
    👉Cách thức tham gia:
    <br>
    -	Bước 1: Like fanpage IT-ZONE – Trường Đại học Tôn Đức Thắng (<a style="color: blue; text-decoration: underline" href="https://www.facebook.com/caitzone"> www.facebook.com/caitzone/</a> ) 
    <br>
    -	Bước 2: Like, share bài viết này ở chế độ công khai và tag thêm ít nhất 3 người bạn là sinh viên TDTU.
    <br>
    -	Bước 3: Bắt đầu làm bài thi trong link dưới đây:
    <br>
    🏆Quyền lợi khi tham gia:
    <br>
    -	Nếu các bạn trả lời đúng 10/20 sẽ được ghi nhận hoạt động ngoại khoá theo quy chế của nhà trường vào HKI niên khoá 2021-2022.
    <br>
    -	Các bạn sẽ có thêm kiến thức về IT-ZONE và Công nghệ thông tin.
    <br>
    ⚠️LƯU Ý:
    <br>
    + Các bạn đăng nhập bằng mail sinh viên và chỉ được làm bài 1 lần duy nhất.
    <br>
    + Sinh viên nhớ kiểm tra kĩ thông tin cá nhân trước khi nộp bài, nếu có sai sót về thông tin cá nhân BTC sẽ không chịu trách nhiệm.`;
        modal.style.display = 'block';
        image.src = 'images/banner.png';
        title.innerHTML = 'CUỘC THI TÌM HIỂU VỀ IT-ZONE VÀ CÔNG NGHỆ XUNG QUANH TA';
        comingSoon.style.height = '90%';
        background.style.display = 'block';
        modal.scrollTop = 0;
        break;
        case 'IT03':
            content.innerHTML = `
            Xin chào các bạn sinh viên TDTU 👋👋
IT-Zone nay đã chính thức mở đợt tuyển thành viên cho năm học mới.
<br>
——————————————————
<br>
MỤC TIÊU HOẠT ĐỘNG :
<br>
- Nhằm xây dựng môi trường học tập và không gian học thuật dành riêng cho sinh viên quản lý.
<br>
- Thành lập một đội ngũ IT chuyên nghiệp hỗ trợ các vấn đề về máy tính cho các bạn sinh viên trong Nhà Trường.
<br>
QUYỀN LỢI :
<br>
- Trải nghiệm quy trình xin việc làm thực tế thông qua hình thức tuyển chọn thành viên của IT-Zone.
<br>
- Khi tham gia câu lạc bộ các bạn sẽ có được training về các cách cài Win, Office, cùng nhiều loại phần mềm hữu ích cho máy tính và dĩ nhiên các bạn sẽ được tự tay mình trải nghiệm những gì đã học được qua việc hỗ trợ các vấn đề về máy tính cho các bạn sinh viên trong Nhà Trường.
<br>
- Nâng cao khả năng chuyên môn và làm việc nhóm, nâng cao tính kỷ luật và tác phong chuyên nghiệp.
<br>
- Được giao lưu, kết bạn với những người chung niềm đam mê và được tham gia các hoạt động ngoại khóa và rèn luyện kỹ năng mềm.
<br>
- Được cộng điểm rèn luyện theo từng học kỳ tùy vào mức độ đóng góp của sinh viên vào ban điều hành.
<br>
- Trau dồi, phát triển hiệu quả các kỹ năng của bản thân, đến để khẳng định mình và giúp nhau cùng tiến bộ.
HÌNH THỨC ĐĂNG KÍ VÀ TUYỂN CHỌN:
<br>
👉Vòng 1: Điền form online và nộp CV
<br>
-🕘Thời gian: Từ ngày 5/10/2021 đến 23:59 ngày 11/10/2021 cho các bạn điền đầy đủ thông tin vào form.
<br>
- Ngoài ra các bạn cũng hãy tạo cho mình một chiếc CV thật sáng tạo để ban tổ chức hiểu rõ hơn về bản thân
<br>
👉Vòng 2: Teamwork
<br>
-🕘Thời gian: Từ 15/10/2021 đến 25/10/2021.
<br>
-Các bạn đã điền form ở vòng 1 sẽ cùng "nắm tay nhau và va vào" vòng 2 với hoạt động đầy hấp dẫn:
Xây dựng 1 phần thi lên ý tưởng truyền thông cho sinh nhật lần thứ 5 của IT-ZONE. Các bạn sẽ được chia vào các đội khác nhau để cùng xây dựng một dự án truyền thông cho sự kiện hoàn toàn chuyên nghiệp, đội có dự án xuất sắc và phù hợp nhất sẽ được dùng để hỗ trợ tổ chức sự kiện sinh nhật IT-ZONE tháng 11 tới.
<br>
👉Vòng 3: ITZONE Test
<br>
-🕘Thời gian: Từ 28/10/2021 và kết thúc trong cùng ngày.
<br>
-Các bạn tiếp tục tham gia vào vòng 3. Trong vòng này, các bạn sẽ vận dụng tất cả các kiến thức về công nghệ mà bạn biết để vượt qua các câu hỏi về lĩnh vực công nghệ thông tin, một lĩnh vực khá là hot trong thời đại công nghệ 4.0 như hiện nay. Vì vậy trước khi tham gia vòng 3 hãy trang bị cho mình thật nhiều kiến thức về lĩnh vực này để đạt kết quả cao các bạn nhé.
<br>
👉Vòng 4: Phỏng vấn
<br>
-🕘Thời gian: Từ 1/11/2021 đến 3/11/2021 diễn ra hoạt động cho các bạn điền form đăng kí lịch phỏng vấn.
<br>
- Từ 4/11/2021 đến 5/11/2021 sẽ diễn ra hoạt động phỏng vấn, các bạn vui lòng đến trước thời gian phỏng vấn khoảng 15p để ổn định.
<br>
- Dự kiến ngày 6/11/2021 sẽ công bố kết quả.
<br>
Yêu cầu chung:
<br>
- Có tâm và có tầm.
<br>
- Có khả năng tìm kiếm trên Internet.
<br>
- Có kỹ năng làm việc nhóm.
<br>
- Yêu thích công việc về Công nghệ thông tin (CNTT).
<br>
- Sinh viên đang học tại trường Đại học Tôn Đức Thắng có ý nguyện tham gia hoạt động và học tập tại IT-Zone.
<br>
- Thân thiện, có tinh thần trách nhiệm, nhiệt tình, cẩn thận, ham học hỏi, sẵn sàng trao đổi và thảo luận.
<br>
Yêu cầu team kỹ thuật:
<br>
- Có kiến thức về sửa máy tính (chủ yếu là phần mềm) là lợi thế.
<br>
- Kỹ năng tự trao dồi kiến thức từ sách, báo, tạp chí, internet…
<br>
Yêu cầu team truyền thông & sự kiện:
<br>
- Nhanh nhẹn, hoạt bát, hòa đồng, biết vẽ là một lợi thế.
<br>
- Biết cách quản lý, xây dựng và tổ chức sự kiện, ý tưởng, kế hoạch cho team.
<br>
CÁC VỊ TRÍ ỨNG TUYỂN :
<br>
Team kỹ thuật:
<br>
+ Hỗ trợ kỹ thuật, sửa chữa, cài đặt phần mềm, tư trợ các vấn đề liên quan đến máy tính, công nghệ.
<br>
+ Trao dồi, học hỏi, rèn luyện tăng kỹ năng về máy tính , kiến thức chuyên ngành, công nghệ thông tin.
<br>
+ Tham gia tổ chức các buổi Seminar.
<br>
Team PR & sự kiện:
<br>
+ Chụp ảnh, viết bài đăng, làm poster.
<br>
+ Truyền thông cho các chương trình, sự kiện của CLB.
<br>
+ Lên ý tưởng, xây dựng kế hoạch, tổ chức các chương trình, các hoạt động của IT-ZONE.
<br>
——————————————————
<br>
LINK đăng ký: <a style="color: blue; text-decoration: underline" href="https://forms.gle/CsPca2ZVmWRhoyCJA">https://forms.gle/CsPca2ZVmWRhoyCJA</a> 
<br>
Thông tin chi tiết liên hệ:
<br>
- Email: clbitzone@gmail.com
<br>
- Fanpage: <a style="color: blue; text-decoration: underline" href="https://www.facebook.com/caitzone">IT-Zone - Trường ĐH Tôn Đức Thắng</a>
<br>
——————————————————`;
    modal.style.display = 'block';
    image.src = 'images/IMG_202110_105.jpg';
    title.innerHTML = 'ĐĂNG KÝ ỨNG TUYỂN THÀNH VIÊN CLB IT-ZONE 2021';
    comingSoon.style.height = '90%';
    background.style.display = 'block';
    modal.scrollTop = 0;
    break;

    case 'IT04':
    content.innerHTML = `
    Cuộc thi mang đến chủ đề đang hot nhất hiện nay: “Các giải pháp công nghệ liên quan đến lĩnh vực Fintech hoặc Công nghệ Blockchain” dành cho cộng đồng lập trình viên, sinh viên công nghệ thông và bất kỳ ai có niềm đam mê với công nghệ.
    <br>
⭕ Nếu ý tưởng chọn lĩnh vực Fintech thì có thể sử dụng bất kỳ công nghệ nào, bao gồm Blockchain.
<br>
⭕ Nếu ý tưởng có sử dụng công nghệ Blockchain thì có thể ứng dụng trên bất kỳ lĩnh vực nào.
<br>
► Thời gian nộp đơn:
<br>
⭕ 10/09 - 14/10: Đăng ký tham gia đợt 1
<br>
⭕ 15/10 - 20/10: Đăng ký tham gia đợt 2
<br>
💥 QUYỀN LỢI & GIẢI THƯỞNG CHƯƠNG TRÌNH HẤP DẪN 💥
<br>
📌 Tổng giải thưởng trị giá 150 triệu đồng gồm tiền mặt và quà tặng cùng cơ hội nhận đầu tư lên đến 3 tỷ đồng.
<br>
📌 Top 4 sẽ được kết nối đầu tư từ Dự án ADB Ventures do Trung tâm ĐMST Quốc gia (NIC) chủ trì và hỗ trợ chỗ làm việc miễn phí 3-6 tháng tại các coworking đối tác của NIC tại Hà Nội.
<br>
📌 Top 3 sẽ được nhận học bổng toàn phần khóa Java full stack trị giá $1800/học bổng từ FPT Software.
<br>
📌 Ngoài ra, Quán Quân và Á Quân sẽ có 30 giờ tư vấn 1:1 từ các chuyên gia của TAG Ventures.
<br>
📌 Đặc biệt, giải Nhất sẽ có cơ hội nhận đầu tư trị giá $150,000 từ TAG Ventures và được quảng bá trên hệ thống màn hình LED của GoldSun trong 1 tuần nếu dự án phát triển thành doanh nghiệp.
Và đừng lo khi bạn chưa có ý tưởng! Đội ngũ chuyên gia tại GDG Devfest MienTrung 2021 sẽ đồng hành cùng thí sinh trong suốt tuần lễ Hackathon. Tham dự cuộc thi các thí sinh sẽ có cơ hội:
<br>
🌟 Kết nối với những Buddy năng động, luôn hỗ trợ hết mình cho thí sinh.
<br>
🌟 Trải nghiệm cuộc đua đáng nhớ với sự tư vấn và hướng dẫn từ Mentor và Guest Mentor.
<br>
🌟 Phát triển bản thân, tham gia các Webinar miễn phí và bổ trợ kiến thức từ Speaker.
<br>
🌟 Hoàn thiện dự án với những ý kiến đóng góp từ Ban giám khảo.
<br>
👉 “Mạnh dạn” làm chủ cuộc đua cùng đội ngũ GDG Devfest MienTrung 2021 tại <a style="color: blue; text-decoration: underline" href="https://bit.ly/devfest21">https://bit.ly/devfest21</a>
<br>
⏩ Chi tiết cuộc thi: <a style="color: blue; text-decoration: underline" href="https://www.facebook.com/Gdgmientrung">https://www.facebook.com/Gdgmientrung</a>
<br>
--------------------------------------------------
<br>
🔔 Ban Tổ Chức đã chuẩn bị Webinar "Hiểu về Blockchain và tìm kiếm ý tưởng tham gia chương trình" dành cho bất kì ai đang quan tâm về cuộc thi hoặc chủ đề Blockchain.
<br>
⏰ Thời gian: 18:30 ngày 13/10/2021.
<br>
📍 Link đăng ký: <a style="color: blue; text-decoration: underline" href="https://bit.ly/webinar-devfest21">https://bit.ly/webinar-devfest21</a>`;
    modal.style.display = 'block';
    image.src = 'images/ho-tro-truyen-thong.jpg';
    title.innerHTML = 'HỖ TRỢ TRUYỀN THÔNG';
    comingSoon.style.height = '90%';
    background.style.display = 'block';
    modal.scrollTop = 0;
    break;
    default:
        content.innerHTML = 'Đang cập nhật';
        modal.style.display = 'block';
        image.src = 'images/coming-soon.png';
        title.innerHTML = 'ĐANG CẬP NHẬT';
        comingSoon.style.height = 'fit-content';
        background.style.display = 'block';
    }
    }

}
window.onclick = function(event) {
    if (event.target == background) {
      background.style.display = "none";
    }
  }
