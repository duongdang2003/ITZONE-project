Box = function () {
  //                    nen
  var geom2 = new THREE.SphereGeometry(1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  this.mesh = new THREE.Mesh(geom2, mat2);
  this.mesh.receiveShadow = true;

    //////////////////////-
    var geom3 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
    var mat3 = new THREE.MeshPhongMaterial({
      color: Colors.color,
      transparent: false,
      opacity: 1,
      shading: THREE.FlatShading,
    });
    var vach1 = new THREE.Mesh(geom3, mat3);
    vach1.position.set(-295, -29, 6);
    vach1.rotation.y = 0.07;
    vach1.receiveShadow = true;
    this.mesh.add(vach1);

  //                         vach1
  var geom2 = new THREE.BoxGeometry(139, 30, 28, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(-295, 26, 6);
    vach1.rotation.y = 0.07;
    vach1.rotation.z = Math.PI / 2;
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  //                         vach2
  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
    vach1.rotation.y = 0.07;
    vach1.position.set(-295, 81, 6);
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  //////////////////T
  //                         vach1
  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(-195, 81, 0);
    vach1.rotation.y = 0.045;
    vach1.receiveShadow = true;
  this.mesh.add(vach1);
  ///////////////////////vach 2
  var geom2 = new THREE.BoxGeometry(139, 30, 28, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(-195, 26, 0);
  vach1.rotation.z = Math.PI / 2;
    vach1.rotation.y = 0.045;
    vach1.receiveShadow = true;
  this.mesh.add(vach1);

  //////////////////z
  var geom2 = new THREE.BoxGeometry(96, 30, 28, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(-95, 16, 0);
  vach1.rotation.z = Math.PI / 3.3;
    vach1.rotation.y = 0.03;
    vach1.receiveShadow = true;
  this.mesh.add(vach1);
  //                         vach2
  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(-95, 61, 0);
    vach1.rotation.y = 0.03;
    vach1.receiveShadow = true;
  this.mesh.add(vach1);
  //                         vach3
  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(-95, -29, 0);
    vach1.rotation.y = 0.03;
    vach1.receiveShadow = true;
  this.mesh.add(vach1);


  /////////////////////////n

  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(115, 61, 0);
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  ///////vach2
  var geom2 = new THREE.BoxGeometry(102, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(75, 9, 0);
  vach1.rotation.z = Math.PI / 2;
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  ///////vach3
  var geom2 = new THREE.BoxGeometry(102, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(155, 9, 0);
  vach1.rotation.z = Math.PI / 2;
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  ///////xoay1
  var geom2 = new THREE.CylinderGeometry(15, 15, 29, 100);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(75, 61, 0);
  vach1.rotation.x = Math.PI / 2;
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  ///////xoay2
  var geom2 = new THREE.CylinderGeometry(15, 15, 29, 100);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(155, 61, 0);
  vach1.rotation.x = Math.PI / 2;
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  ///////////////////////////////E
  var geom2 = new THREE.BoxGeometry(120, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(205, 16, 0);
  vach1.rotation.z = Math.PI / 2;
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

  /////////////vach 1-2
  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(230, 61, 0);
  vach1.receiveShadow = true;
  this.mesh.add(vach1);
  //
  var geom2 = new THREE.BoxGeometry(80, 30, 30, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(230, -29, 0);
  vach1.receiveShadow = true;
  this.mesh.add(vach1);
  // vachgiua
  var geom2 = new THREE.BoxGeometry(79, 29, 29, 1, 1, 1);
  var mat2 = new THREE.MeshPhongMaterial({
    color: Colors.color,
    transparent: false,
    opacity: 1,
    shading: THREE.FlatShading,
  });
  var vach1 = new THREE.Mesh(geom2, mat2);
  vach1.position.set(230, 16, 0);
  vach1.receiveShadow = true;
  this.mesh.add(vach1);

};

// Khởi tạo và thêm vào scene
var box;

function createHouse() {
  box = new Box();

  // đặt vị trí phía dưới scene
    box.mesh.position.set(35, 350  ,0);
    // box.mesh.rotation.y  = -Math.PI/2 ;
  box.mesh.rotation.x  = 0.58 ;
  box.mesh.scale.set(0.7, 0.7, 0.7);
  // thêm lưới này vào scene
  scene.add(box.mesh);
}
