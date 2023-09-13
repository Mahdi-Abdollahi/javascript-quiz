const always404Handler = {
  get: function (target, property) {
    return '404';
  },
};

const proxiedObject = new Proxy({}, always404Handler);

console.log(proxiedObject.foo); // Output: "404"
console.log(proxiedObject.bar); // Output: "404"
