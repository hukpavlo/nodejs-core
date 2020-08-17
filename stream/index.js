const os = require('os');
const fs = require('fs');
const zlib = require('zlib');
const https = require('https');
const stream = require('stream');

const fileUrl = 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg';

https.get(fileUrl, (res) => {
  let cat;

  res.on('data', (chunk) => {
    cat = cat ? Buffer.concat([cat, chunk]) : chunk;
  });

  res.on('end', () => {
    fs.writeFile('cat1.jpg', cat, () => {
      console.log('cat1.jpg end');
    });
  });
});

https.get(fileUrl, (res) => {
  res.pipe(fs.createWriteStream('cat2.jpg'));

  res.on('end', () => {
    console.log('cat2.jpg end');
  });
});

https.get(fileUrl, (res) => {
  res.pipe(zlib.createGzip()).pipe(fs.createWriteStream('cat3.gz'));

  res.on('end', () => {
    console.log('cat3.zip end');
  });
});

stream.pipeline(fs.createReadStream('index.js'), fs.createWriteStream('index.copy.js'), (err) => {
  if (err) {
    console.error(err);
  }

  console.log('index copy done');
});

stream.pipeline(fs.createReadStream('index.js'), zlib.createGzip(), fs.createWriteStream('index.copy.gz'), (err) => {
  if (err) {
    console.error(err);
  }

  console.log('index copy gz done');
});

stream.pipeline(
  fs.createReadStream('info.txt'),
  new stream.Transform({
    transform: (chunk, encoding, cb) => {
      const newString = chunk
        .toString()
        .split(os.EOL)
        .map((line) => line.toLowerCase())
        .join(os.EOL);

      cb(null, Buffer.from(newString));
    },
  }),
  fs.createWriteStream('info.transformed.txt'),
  (err) => {
    if (err) {
      console.error(err);
    }

    console.log('info transformation done');
  },
);
