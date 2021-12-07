var scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  HEIGHT,
  WIDTH,
  renderer,
  container;

function createScene() {
  // Lấy ra width và height của màn hình,
  // dùng để cài đặt tỉ lệ khung hình (aspect ratio) cho camera
  // và size của renderer.
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  // Tạo scene
  scene = new THREE.Scene();

  // Thêm hiệu ứng sương mù vào scene, cùng màu với
  // màu nền đã style trước đó
  // scene.fog = new THREE.Fog(Colors.LightYellow, 1000, 1500);

  // Tạo camera
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 79.5;
  nearPlane = 1;
  farPlane = 20000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  // Đặt vị trí cho camera
  camera.position.x = 0;
  camera.position.z = 710;
  camera.position.y = 0;
 
  camera.lookAt(0, -90, 0);

  // Tạo renderer
  renderer = new THREE.WebGLRenderer({
    // Cho phép trong suốt để hiển thị màu nền
    // đã định nghĩa trong CSS
    alpha: true,

    // Bật khử răng cưa; hiệu năng sẽ giảm
    // nhưng sẽ ổn thôi vì project này ít đối tượng
    antialias: true,
  });

  // Xác định kích cỡ của renderer; trong trường hợp này,
  // là full toàn màn hình
  renderer.setSize(WIDTH / 1, HEIGHT / 1);

  // Cho phép render bóng đổ
  renderer.shadowMap.enabled = false;

  // Thêm DOM của renderer vào
  // container ta đã tạo trong HTML
  container = document.getElementById("intro");
  container.appendChild(renderer.domElement);
  


  // Nếu người dùng resize trình duyệt
  // cần cập nhật lại camera và size của renderer
  window.addEventListener("resize", handleWindowResize, false);
}

function handleWindowResize() {
  // cập nhật lại kích thước của renderer và camera
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}
