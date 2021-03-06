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
                IT-ZONE l?? c??u l???c b??? h???c thu???t tr???c thu???c CAIT ??? Trung t??m C??ng ngh??? th??ng tin v?? ???ng d???ng, tr?????ng ?????i h???c T??n ?????c Th???ng. C??u l???c b??? IT-ZONE ???????c th??nh l???p v???i m???c ????ch h??? tr??? t???t c??? c??n b??? v?? sinh vi??n c???a tr?????ng v??? v???n ????? li??n quan ?????n IT. ????y c??ng l?? n??i c??c sinh vi??n c?? ni???m ??am m?? v???i c??ng ngh??? th??ng tin t??m ?????n ????? h???c t???p v?? trau d???i th??m nhi???u ki???n th???c. N??m nay, nh??n d???p sinh nh???t c???a IT-ZONE ???????c 5 tu???i, c??u l???c b??? t??? ch???c cu???c thi ??? Thi???t k??? poster m???ng sinh nh???t 5 tu???i IT-ZONE ??? nh???m t???o ra s??n ch??i cho c??c sinh vi??n c?? ni???m ??am m?? v???i ????? ho??? v?? thi???t k???. H??y tham gia c??ng IT-ZONE ????? t???o ra s???n ph???m kh??c bi???t c???a ri??ng b???n nh??! <br/> -------------------------------------------------------------------------------------- 
                <br>
                ??????Th??ng tin cu???c thi:
                <br>
                ????	?????i t?????ng tham gia: T???t c??? sinh vi??n TDTU
                <br>
                ????	C??ch th???c tham gia:
                <br>
                    - B?????c 1: Like fanpage IT-ZONE ??? Tr?????ng ?????i h???c T??n ?????c Th???ng (<a style="color: blue; text-decoration: underline" href="https://www.facebook.com/caitzone"> www.facebook.com/caitzone/</a>).
                    <br>
                    - B?????c 2: Like, share b??i vi???t n??y ??? ch??? ????? c??ng khai v?? tag ??t nh???t 3 ng?????i b???n l?? sinh vi??n c???a TDTU.
                    <br>
                    - B?????c 3: Tham kh???o poster m???u ??? link d?????i ????y ????? l??m ????ng theo y??u c???u c???a BTC.
                    <br>
                ????	Th???i gian di???n ra cu???c thi
                <br>
                + Giai ??o???n 1 (di???n ra t??? ng??y 2/11/2021-5/11/2021): ????ng k?? tham gia v?? n???p b??i thi v??? cho BTC.
                <br>
                + Giai ??o???n 2 (di???n ra t??? ng??y 6/11/2021-8/11/2021): K??u g???i m???i ng?????i b??nh ch???n cho b??i thi c???a m??nh.
                <br>
                ????	C??ch t??nh ??i???m b??nh ch???n: 
                <br>
                + ?????i v???i 1 l?????t LIKE      : 1 ??i???m
                <br>
                + ?????i v???i 1 l?????t TIM        : 2 ??i???m
                <br>
                + ?????i v???i 1 l?????t SHARE  : 3 ??i???m
                       ( ??i???m s??? ???????c t??nh theo thang ??i???m 100 ??? 50% s??? do s??? l?????t b??nh ch???n v?? 50% c??n l???i s??? do BTC ch???m ??i???m.)
                       <br>
                       ????	Quy???n l???i khi tham gia:
                       <br>
                       + ?????i v???i nh???ng sinh vi??n tham gia c?? ??i???m cao s??? ???????c trao gi???i th?????ng theo ?????nh gi?? sau:
                       <br>
                       - Gi???i nh???t : 150.000 VN??
                       <br>
                       - Gi???i nh??   : 100.000 VN??
                       <br>
                       - Gi???i ba    :  50.000 VN??
                       <br>
                       + ?????i v???i nh???ng sinh vi??n tham gia nh??ng c?? ??i???m s??? kh??ng ???????c cao s??? ???????c ghi nh???n ngo???i kho?? theo quy ch??? c???a nh?? tr?????ng v??o HKI ni??n kho?? 2021-2022."`;
                modal.style.display = 'block';
                image.src = 'images/birthdayITzone.png';
                title.innerHTML = 'CU???C THI THI???T K??? POSTER M???NG SINH NH???T 5 TU???I IT-ZONE ';
                comingSoon.style.height = '90%';
                background.style.display = 'block';
                modal.scrollTop = 0;
                break;
            case 'IT02':
                content.innerHTML = `
                IT-ZONE l?? m???t c??u l???c b??? h???c thu???t tr???c thu???c CAIT ??? Trung t??m C??ng ngh??? th??ng tin v?? ???ng d???ng, tr?????ng ?????i h???c T??n ?????c Th???ng. C??u l???c b??? IT-ZONE ???? ?????ng h??nh c??ng sinh vi??n trong ng??i nh?? chung mang t??n b??c T??n ???????c 5 n??m. N??m nay, nh??n d???p k??? ni???m 5 n??m tu???i c???a IT-ZONE, c??u l???c b??? t??? ch???c cu???c thi ???T??m hi???u v??? IT-ZONE v?? C??ng ngh??? xung quanh ta??? nh???m gi??p sinh vi??n tr?????ng ?????i h???c T??n ?????c Th???ng c?? c?? h???i hi???u th??m v??? IT-ZONE c??ng nh?? v??? c??c m??n ????? c??ng ngh???, ??i???n t??? trong cu???c s???ng h???ng ng??y.
    Trong b???i c???nh d???ch b???nh hi???n nay, r???t nhi???u h???c sinh, sinh vi??n v?? c??? c??ng nh??n vi??n ch???c ?????u kh?? c?? c?? h???i tr??? l???i n??i h???c v?? l??m vi???c, v?? v???y nh???ng m??n ????? c??ng ngh??? cao nh?? laptop, m??y t??nh ????? b??n, smartphone, m??y t??nh b???ng???????ng vai tr?? r???t quan tr???ng trong cu???c s???ng hi???n t???i c???a ch??ng ta. V???y b???n ???? th???t s??? hi???u h???t v??? nh???ng m??n ????? ?????y ph???c t???p n??y ch??a? H??y c??ng IT-ZONE kh??m ph?? th??m nh???ng ki???n th???c m???i v??? ch??ng nh??!<br>
    --------------------------------------------------------------------------------------
    <br>
    ????????Th??ng tin cu???c thi:
    <br>
    + Th???i gian t??? ch???c: t??? ng??y 2/11/2021 ?????n 23:59 ng??y 5/11/2021.
    <br>
    + H??nh th???c tham gia: tr???c nghi???m tr??n Google Form.
    <br>
    + ?????i t?????ng tham gia: t???t c??? sinh vi??n tr?????ng ?????i h???c T??n ?????c Th???ng
    <br>
    ????C??ch th???c tham gia:
    <br>
    -	B?????c 1: Like fanpage IT-ZONE ??? Tr?????ng ?????i h???c T??n ?????c Th???ng (<a style="color: blue; text-decoration: underline" href="https://www.facebook.com/caitzone"> www.facebook.com/caitzone/</a> ) 
    <br>
    -	B?????c 2: Like, share b??i vi???t n??y ??? ch??? ????? c??ng khai v?? tag th??m ??t nh???t 3 ng?????i b???n l?? sinh vi??n TDTU.
    <br>
    -	B?????c 3: B???t ?????u l??m b??i thi trong link d?????i ????y:
    <br>
    ????Quy???n l???i khi tham gia:
    <br>
    -	N???u c??c b???n tr??? l???i ????ng 10/20 s??? ???????c ghi nh???n ho???t ?????ng ngo???i kho?? theo quy ch??? c???a nh?? tr?????ng v??o HKI ni??n kho?? 2021-2022.
    <br>
    -	C??c b???n s??? c?? th??m ki???n th???c v??? IT-ZONE v?? C??ng ngh??? th??ng tin.
    <br>
    ??????L??U ??:
    <br>
    + C??c b???n ????ng nh???p b???ng mail sinh vi??n v?? ch??? ???????c l??m b??i 1 l???n duy nh???t.
    <br>
    + Sinh vi??n nh??? ki???m tra k?? th??ng tin c?? nh??n tr?????c khi n???p b??i, n???u c?? sai s??t v??? th??ng tin c?? nh??n BTC s??? kh??ng ch???u tr??ch nhi???m.`;
        modal.style.display = 'block';
        image.src = 'images/banner.png';
        title.innerHTML = 'CU???C THI T??M HI???U V??? IT-ZONE V?? C??NG NGH??? XUNG QUANH TA';
        comingSoon.style.height = '90%';
        background.style.display = 'block';
        modal.scrollTop = 0;
        break;
        case 'IT03':
            content.innerHTML = `
            Xin ch??o c??c b???n sinh vi??n TDTU ????????
IT-Zone nay ???? chi??nh thu????c mo???? ??o????t tuye????n tha??nh vie??n cho na??m ho??c mo????i.
<br>
??????????????????????????????????????????????????????
<br>
M???C TI??U HO???T ?????NG :
<br>
- Nha????m xa??y du????ng mo??i tru??o????ng ho??c ta????p va?? kho??ng gian ho??c thua????t da??nh rie??ng cho sinh vie??n qua??n ly??.
<br>
- Tha??nh la????p mo????t ??o????i ngu?? IT chuye??n nghie????p ho???? tro???? ca??c va????n ??e???? ve???? ma??y ti??nh cho ca??c ba??n sinh vie??n trong Nha?? Tru??o????ng.
<br>
QUYE????N LO????I :
<br>
- Tra??i nghie????m quy tri??nh xin vie????c la??m thu????c te???? tho??ng qua hi??nh thu????c tuye????n cho??n tha??nh vie??n cu??a IT-Zone.
<br>
- Khi tham gia ca??u la??c bo???? ca??c ba??n se?? co?? ??u??o????c training ve???? ca??c ca??ch ca??i Win, Office, cu??ng nhie????u loa??i pha????n me????m hu????u i??ch cho ma??y ti??nh va?? di?? nhie??n ca??c ba??n se?? ??u??o????c tu???? tay mi??nh tra??i nghie????m nhu????ng gi?? ??a?? ho??c ??u??o????c qua vie????c ho???? tro???? ca??c va????n ??e???? ve???? ma??y ti??nh cho ca??c ba??n sinh vie??n trong Nha?? Tru??o????ng.
<br>
- Na??ng cao kha?? na??ng chuye??n mo??n va?? la??m vie????c nho??m, na??ng cao ti??nh ky?? lua????t va?? ta??c phong chuye??n nghie????p.
<br>
- ??u??o????c giao lu??u, ke????t ba??n vo????i nhu????ng ngu??o????i chung nie????m ??am me?? va?? ??u??o????c tham gia ca??c hoa??t ??o????ng ngoa??i kho??a va?? re??n luye????n ky?? na??ng me????m.
<br>
- ??u??o????c co????ng ??ie????m re??n luye????n theo tu????ng ho??c ky?? tu??y va??o mu????c ??o???? ??o??ng go??p cu??a sinh vie??n va??o ban ??ie????u ha??nh.
<br>
- Trau do????i, pha??t trie????n hie????u qua?? ca??c ky?? na??ng cu??a ba??n tha??n, ??e????n ??e???? kha????ng ??i??nh mi??nh va?? giu??p nhau cu??ng tie????n bo????.
H??NH TH???C ????NG K?? V?? TUY???N CH???N:
<br>
????V??ng 1: ??i???n form online v?? n???p CV
<br>
-????Th???i gian: T??? ng??y 5/10/2021 ?????n 23:59 ng??y 11/10/2021 cho c??c b???n ??i???n ?????y ????? th??ng tin v??o form.
<br>
- Ngo??i ra c??c b???n c??ng h??y t???o cho m??nh m???t chi???c CV th???t s??ng t???o ????? ban t??? ch???c hi???u r?? h??n v??? b???n th??n
<br>
????V??ng 2: Teamwork
<br>
-????Th???i gian: T??? 15/10/2021 ?????n 25/10/2021.
<br>
-C??c b???n ???? ??i???n form ??? v??ng 1 s??? c??ng "n???m tay nhau v?? va v??o" v??ng 2 v???i ho???t ?????ng ?????y h???p d???n:
X??y d???ng 1 ph???n thi l??n ?? t?????ng truy???n th??ng cho sinh nh???t l???n th??? 5 c???a IT-ZONE. C??c b???n s??? ???????c chia v??o c??c ?????i kh??c nhau ????? c??ng x??y d???ng m???t d??? ??n truy???n th??ng cho s??? ki???n ho??n to??n chuy??n nghi???p, ?????i c?? d??? ??n xu???t s???c v?? ph?? h???p nh???t s??? ???????c d??ng ????? h??? tr??? t??? ch???c s??? ki???n sinh nh???t IT-ZONE th??ng 11 t???i.
<br>
????V??ng 3: ITZONE Test
<br>
-????Th???i gian: T??? 28/10/2021 v?? k???t th??c trong c??ng ng??y.
<br>
-C??c b???n ti???p t???c tham gia v??o v??ng 3. Trong v??ng n??y, c??c b???n s??? v???n d???ng t???t c??? c??c ki???n th???c v??? c??ng ngh??? m?? b???n bi???t ????? v?????t qua c??c c??u h???i v??? l??nh v???c c??ng ngh??? th??ng tin, m???t l??nh v???c kh?? l?? hot trong th???i ?????i c??ng ngh??? 4.0 nh?? hi???n nay. V?? v???y tr?????c khi tham gia v??ng 3 h??y trang b??? cho m??nh th???t nhi???u ki???n th???c v??? l??nh v???c n??y ????? ?????t k???t qu??? cao c??c b???n nh??.
<br>
????V??ng 4: Ph???ng v???n
<br>
-????Th???i gian: T??? 1/11/2021 ?????n 3/11/2021 di???n ra ho???t ?????ng cho c??c b???n ??i???n form ????ng k?? l???ch ph???ng v???n.
<br>
- T??? 4/11/2021 ?????n 5/11/2021 s??? di???n ra ho???t ?????ng ph???ng v???n, c??c b???n vui l??ng ?????n tr?????c th???i gian ph???ng v???n kho???ng 15p ????? ???n ?????nh.
<br>
- D??? ki???n ng??y 6/11/2021 s??? c??ng b??? k???t qu???.
<br>
Ye??u ca????u chung:
<br>
- Co?? ta??m va?? co?? ta????m.
<br>
- Co?? kha?? na??ng ti??m kie????m tre??n Internet.
<br>
- Co?? ky?? na??ng la??m vie????c nho??m.
<br>
- Ye??u thi??ch co??ng vie????c ve???? Co??ng nghe???? tho??ng tin (CNTT).
<br>
- Sinh vie??n ??ang ho??c ta??i tru??o????ng ??a??i ho??c To??n ??u????c Tha????ng co?? y?? nguye????n tham gia hoa??t ??o????ng va?? ho??c ta????p ta??i IT-Zone.
<br>
- Tha??n thie????n, co?? tinh tha????n tra??ch nhie????m, nhie????t ti??nh, ca????n tha????n, ham ho??c ho??i, sa????n sa??ng trao ??o????i va?? tha??o lua????n.
<br>
Ye??u ca????u team ky?? thua????t:
<br>
- Co?? kie????n thu????c ve???? su????a ma??y ti??nh (chu?? ye????u la?? pha????n me????m) l?? l???i th???.
<br>
- Ky?? na??ng tu???? trao do????i kie????n thu????c tu???? sa??ch, ba??o, ta??p chi??, internet???
<br>
Ye??u ca????u team truye????n tho??ng & su???? kie????n:
<br>
- Nhanh nhe??n, hoa??t ba??t, ho??a ??o????ng, bie????t ve?? la?? mo????t lo????i the????.
<br>
- Bie????t ca??ch qua??n ly??, xa??y du????ng va?? to???? chu????c su???? kie????n, y?? tu??o????ng, ke???? hoa??ch cho team.
<br>
CA??C VI?? TRI?? U????NG TUYE????N :
<br>
Team ky?? thua????t:
<br>
+ Ho???? tro???? ky?? thua????t, su????a chu????a, ca??i ??a????t pha????n me????m, tu?? tro???? ca??c va????n ??e???? lie??n quan ??e????n ma??y ti??nh, co??ng nghe????.
<br>
+ Trao do????i, ho??c ho??i, re??n luye????n ta??ng ky?? na??ng ve???? ma??y ti??nh , kie????n thu????c chuye??n nga??nh, co??ng nghe???? tho??ng tin.
<br>
+ Tham gia to???? chu????c ca??c buo????i Seminar.
<br>
Team PR & s??? ki???n:
<br>
+ Chu??p a??nh, vie????t ba??i ??a??ng, la??m poster.
<br>
+ Truye????n tho??ng cho ca??c chu??o??ng tri??nh, su???? kie????n cu??a CLB.
<br>
+ Le??n y?? tu??o????ng, xa??y du????ng ke???? hoa??ch, to???? chu????c ca??c chu??o??ng tri??nh, ca??c hoa??t ??o????ng cu??a IT-ZONE.
<br>
??????????????????????????????????????????????????????
<br>
LINK ??a??ng ky??: <a style="color: blue; text-decoration: underline" href="https://forms.gle/CsPca2ZVmWRhoyCJA">https://forms.gle/CsPca2ZVmWRhoyCJA</a> 
<br>
Tho??ng tin chi tie????t lie??n he????:
<br>
- Email: clbitzone@gmail.com
<br>
- Fanpage: <a style="color: blue; text-decoration: underline" href="https://www.facebook.com/caitzone">IT-Zone - Tr?????ng ??H T??n ?????c Th???ng</a>
<br>
??????????????????????????????????????????????????????`;
    modal.style.display = 'block';
    image.src = 'images/IMG_202110_105.jpg';
    title.innerHTML = '????NG K?? ???NG TUY???N TH??NH VI??N CLB IT-ZONE 2021';
    comingSoon.style.height = '90%';
    background.style.display = 'block';
    modal.scrollTop = 0;
    break;

    case 'IT04':
    content.innerHTML = `
    Cu???c thi mang ?????n ch??? ????? ??ang hot nh???t hi???n nay: ???C??c gi???i ph??p c??ng ngh??? li??n quan ?????n l??nh v???c Fintech ho???c C??ng ngh??? Blockchain??? d??nh cho c???ng ?????ng l???p tr??nh vi??n, sinh vi??n c??ng ngh??? th??ng v?? b???t k??? ai c?? ni???m ??am m?? v???i c??ng ngh???.
    <br>
??? N???u ?? t?????ng ch???n l??nh v???c Fintech th?? c?? th??? s??? d???ng b???t k??? c??ng ngh??? n??o, bao g???m Blockchain.
<br>
??? N???u ?? t?????ng c?? s??? d???ng c??ng ngh??? Blockchain th?? c?? th??? ???ng d???ng tr??n b???t k??? l??nh v???c n??o.
<br>
??? Th???i gian n???p ????n:
<br>
??? 10/09 - 14/10: ????ng k?? tham gia ?????t 1
<br>
??? 15/10 - 20/10: ????ng k?? tham gia ?????t 2
<br>
???? QUY???N L???I & GI???I TH?????NG CH????NG TR??NH H???P D???N ????
<br>
???? T???ng gi???i th?????ng tr??? gi?? 150 tri???u ?????ng g???m ti???n m???t v?? qu?? t???ng c??ng c?? h???i nh???n ?????u t?? l??n ?????n 3 t??? ?????ng.
<br>
???? Top 4 s??? ???????c k???t n???i ?????u t?? t??? D??? ??n ADB Ventures do Trung t??m ??MST Qu???c gia (NIC) ch??? tr?? v?? h??? tr??? ch??? l??m vi???c mi???n ph?? 3-6 th??ng t???i c??c coworking ?????i t??c c???a NIC t???i H?? N???i.
<br>
???? Top 3 s??? ???????c nh???n h???c b???ng to??n ph???n kh??a Java full stack tr??? gi?? $1800/h???c b???ng t??? FPT Software.
<br>
???? Ngo??i ra, Qu??n Qu??n v?? ?? Qu??n s??? c?? 30 gi??? t?? v???n 1:1 t??? c??c chuy??n gia c???a TAG Ventures.
<br>
???? ?????c bi???t, gi???i Nh???t s??? c?? c?? h???i nh???n ?????u t?? tr??? gi?? $150,000 t??? TAG Ventures v?? ???????c qu???ng b?? tr??n h??? th???ng m??n h??nh LED c???a GoldSun trong 1 tu???n n???u d??? ??n ph??t tri???n th??nh doanh nghi???p.
V?? ?????ng lo khi b???n ch??a c?? ?? t?????ng! ?????i ng?? chuy??n gia t???i GDG Devfest MienTrung 2021 s??? ?????ng h??nh c??ng th?? sinh trong su???t tu???n l??? Hackathon. Tham d??? cu???c thi c??c th?? sinh s??? c?? c?? h???i:
<br>
???? K???t n???i v???i nh???ng Buddy n??ng ?????ng, lu??n h??? tr??? h???t m??nh cho th?? sinh.
<br>
???? Tr???i nghi???m cu???c ??ua ????ng nh??? v???i s??? t?? v???n v?? h?????ng d???n t??? Mentor v?? Guest Mentor.
<br>
???? Ph??t tri???n b???n th??n, tham gia c??c Webinar mi???n ph?? v?? b??? tr??? ki???n th???c t??? Speaker.
<br>
???? Ho??n thi???n d??? ??n v???i nh???ng ?? ki???n ????ng g??p t??? Ban gi??m kh???o.
<br>
???? ???M???nh d???n??? l??m ch??? cu???c ??ua c??ng ?????i ng?? GDG Devfest MienTrung 2021 t???i <a style="color: blue; text-decoration: underline" href="https://bit.ly/devfest21">https://bit.ly/devfest21</a>
<br>
??? Chi ti???t cu???c thi: <a style="color: blue; text-decoration: underline" href="https://www.facebook.com/Gdgmientrung">https://www.facebook.com/Gdgmientrung</a>
<br>
--------------------------------------------------
<br>
???? Ban T??? Ch???c ???? chu???n b??? Webinar "Hi???u v??? Blockchain v?? t??m ki???m ?? t?????ng tham gia ch????ng tr??nh" d??nh cho b???t k?? ai ??ang quan t??m v??? cu???c thi ho???c ch??? ????? Blockchain.
<br>
??? Th???i gian: 18:30 ng??y 13/10/2021.
<br>
???? Link ????ng k??: <a style="color: blue; text-decoration: underline" href="https://bit.ly/webinar-devfest21">https://bit.ly/webinar-devfest21</a>`;
    modal.style.display = 'block';
    image.src = 'images/ho-tro-truyen-thong.jpg';
    title.innerHTML = 'H??? TR??? TRUY???N TH??NG';
    comingSoon.style.height = '90%';
    background.style.display = 'block';
    modal.scrollTop = 0;
    break;
    default:
        content.innerHTML = '??ang c???p nh???t';
        modal.style.display = 'block';
        image.src = 'images/coming-soon.png';
        title.innerHTML = '??ANG C???P NH???T';
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
