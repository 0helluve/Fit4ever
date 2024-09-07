const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Af1LWJRF0ZmAzvImu49RjUPUP37nHwIGDohi7CjxrGDq-UNSGmbSmS9yWD7rhX2F2bdAIkKsI3q7zbCy",
  client_secret: "EOQRGp8hT-DznWgcdMmjvBF_bMLaAyj_faFe7Y2pml4aiFWFxwDyn8xRlCB79WULdNAQ1xbzcv7LZ3xJ",
});

module.exports = paypal;
