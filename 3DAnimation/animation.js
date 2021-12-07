function loop() {
  // render the scene
  renderer.render(scene, camera);

  // gọi hàm lặp lại
  requestAnimationFrame(loop);


    if (box2.mesh.rotation.y < -0.01) {
      box2.mesh.rotation.y += Math.PI / 200;
    }
    if (box.mesh.rotation.x >= 0.5) {
      box.mesh.rotation.x -= Math.PI / 200;
    }

}
