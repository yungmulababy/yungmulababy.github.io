
      $('.money').on('mouseover', function(){
        $('.amilli').get(0).play();
        $('#canvas').css('opacity','1');
      });
      $('.money').on('mouseout',function(){
        $('.amilli').get(0).pause();
        $('#canvas').css('opacity','0');
      });

      var canvas = document.querySelector('#canvas');
      var ctx = canvas.getContext('2d');

      var spawnLineY = 25;
      var spawnRate = 500;
      var spawnRateOfDescent = 3
      var lastSpawn = -1;
      var objects = [];
      var startTime = Date.now();

      var img1 = new Image();
      img1.src = "images/money_wings.png";


      var img2 = new Image();
      img2.src = "images/money_bag.png";

      var img3 = new Image();
      img3.src = "images/money_stacks.png";

      var images = [img1, img2, img3];



      function spawnRandom() {
        var t;

        if (Math.random() < 0.50) {
          t = 'red';
        } else {
          t = 'blue';
        }

        var object = {
          type: 5,
          x: Math.random() * (canvas.width - 30) + 15,
          y: spawnLineY,
          image: images[Math.floor(Math.random() * images.length)
          ]
        }
        objects.push(object);
      }

      window.onload = function() {
        animate();
        ctx.imageSmoothingEnabled = false;
      }


      function animate() {
        var time = Date.now();

        if(time > (lastSpawn + spawnRate)) {
          lastSpawn = time;
          spawnRandom();
        }

        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, spawnLineY);
        ctx.lineTo(canvas.width, spawnLineY);


        for (var i = 0; i < objects.length; i++) {
                var object = objects[i];
                object.y += spawnRateOfDescent;
                ctx.drawImage(object.image, object.x, object.y, 30, 30);
            }


      }
