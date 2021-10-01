/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "parse": isServer ? "parse/node" : "parse"
      }
    }

    return config
  }
}
