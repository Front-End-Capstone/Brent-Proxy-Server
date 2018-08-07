const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');

const proxy = express();
const PORT = 8080;

proxy.use(parser.json());
proxy.use(parser.urlencoded({ extended: true }));
proxy.use(express.static(path.join(__dirname, '../static')));

proxy.get('/bundle.js/3000', (req, res) => {
  request('http://localhost:3000/bundle.js', (error, response, body) => {
    res.status(200).send(body);
  });
});

proxy.get('/bundle.js/3002', (req, res) => {
  request('http://localhost:3002/bundle.js', (error, response, body) => {
    res.status(200).send(body);
  });
});

proxy.get('/bundle.js/3003', (req, res) => {
  request('http://localhost:3003/bundle.js', (error, response, body) => {
    res.status(200).send(body);
  });
});

proxy.get('/bundle.js/3004', (req, res) => {
  request('http://localhost:3004/bundle.js', (error, response, body) => {
    res.status(200).send(body);
  });
});

proxy.get('/bundle.js/3001', (req, res) => {
  request('http://localhost:3001/bundle.js', (error, response, body) => {
    res.status(200).send(body);
  });
});

// Sidebar ////////////////////////////////////

proxy.use('/sidebar/wolfencounter', (req, res) => {
  request('http://localhost:3000/sidebar/wolfencounter', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

// Tyler-Module-1 ///////////////////////////////

proxy.use('/events', (req, res) => {
  request('http://localhost:3002/events', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

// WhereWhen //////////////////////////////////

proxy.use('/api/where', (req, res) => {
  request('http://localhost:3003/api/where', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

proxy.use('/api/when', (req, res) => {
  request('http://localhost:3003/api/when', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

// Review-Module //////////////////////////////

proxy.use('/api/data/all', (req, res) => {
  request('http://localhost:3004/api/data/all', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

proxy.use('/api/data', (req, res) => {
  request('http://localhost:3004/api/data', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

// SimilarEperiences //////////////////////////

proxy.use('/api/simexp', (req, res) => {
  request('http://localhost:3001/api/simexp?starRating=5', (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  });
});

// ///////////////////////////////////////////

proxy.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Proxy server successfully connected on PORT: ', PORT);
});