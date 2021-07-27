let graylog2 = require("graylog2");

exports.log = () => {
    let logger = new graylog2.graylog({
        servers: [
            { 'host': '10.100.1.4', port: 12111 }
        ],
        hostname: 'server.name', // the name of this host
                                 // (optional, default: os.hostname())
        facility: 'Node.js',     // the facility for these log messages
                                 // (optional, default: "Node.js")
        bufferSize: 1350         // max UDP packet size, should never exceed the
                                 // MTU of your system (optional, default: 1400)
    });
    
    return logger
}