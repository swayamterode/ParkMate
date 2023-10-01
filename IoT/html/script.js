function log(a) {
    document.querySelector("pre").append("\n\n" + a);
}

async function run() {
    // Localize the License Plate

    const model = await tf.automl.loadObjectDetection(
        "http://raspberrypi.local/app/new-model/model.json"
    );
    const img = document.getElementById("license-plate-image");
    const options = {
        score: 0.5,
        iou: 0.5,
        topk: 20,
    };
    const predictions = await model.detect(img, options);
    // console.log(predictions);

    // Show the resulting object on the page.
    //const pre = document.createElement('pre');
    // pre.textContent = JSON.stringify(predictions, null, 2);
    // document.body.append(pre);

    var img3 = document.getElementById("license-plate-image");
    var width = img3.clientWidth;
    var height = img3.clientHeight;

    //log("Width: " + width);
    //log("Height: " + height);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    var img3 = document.getElementById("license-plate-image");

    /*
    ctx.drawImage(img3, 0, 0, width, height);
    // var canvas = document.getElementById('canvas');
    //  var context = canvas.getContext('2d');

    ctx.beginPath();
    ctx.rect(predictions[0].box.left, predictions[0].box.top, predictions[0].box.width, predictions[0].box
        .height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
*/

    if (!!predictions && !!predictions[0]) {
        var left = predictions[0].box.left - 15;
        var top = predictions[0].box.top - 15;
        var width = predictions[0].box.width + 35;
        var height = predictions[0].box.height + 35;

        ctx.drawImage(
            img3,
            left,
            top,
            width,
            height,
            left,
            top,
            width,
            height
        );
    }

    //        document.querySelector("img").style.display = "none";

    const exampleImage =
        "http://raspberrypi.local:8080/images/realtime.jpg";

    const worker = Tesseract.createWorker({
        logger: (m) => console.log(m),
    });
    Tesseract.setLogging(true);
    work();

    async function work() {
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");

        await worker.setParameters({
            tessedit_pageseg_mode: 13,
        });

        // let result = await worker.detect(exampleImage);
        //  console.log(result.data);
        /*
                    var canvas = document.getElementById("canvas").getContext('2d');
  
                    var ctx = document.getElementById("canvas").getContext('2d');
  
                    let src = ctx.getImageData(0, 0, width, height);
          */

        /*
                      result = await worker.recognize(exampleImage);
                      console.log(result.data);
  
                      await worker.terminate();
          */

        var img = c.toDataURL("image/png");

        // take original
        //  result = await worker.recognize(img3);

        // take cropped
        result = await worker.recognize(img);

        // log(JSON.stringify(result.data.text, null, 2));

        console.log(result);

        document.querySelector(".tesseract").innerHTML = JSON.stringify(
            result.data.text,
            null,
            2
        );

        await worker.terminate();
    }
}
run();
