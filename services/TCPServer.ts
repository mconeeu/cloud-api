import * as net from 'net'

const EventEmitter = require('events');

export class TCPServer extends EventEmitter {
    private readonly server: net.Server;
    private readonly connections: Array<net.Socket>;
    private readonly port: number;

    constructor(port: number) {
        super();

        this.connections = new Array<net.Socket>();
        this.port = port;

        this.server = net.createServer((socket) => {
            this.connections.push(socket);

            socket.on('data', (data) => {
                console.log("Data: " + data);
                this.sendMessage("Nachricht");
            });

            socket.on('connection', (data) => {
                console.log("new connection");
            });

            socket.on('close', (data: net.Socket) => {
                const index: number = this.connections.indexOf(socket, 0);
                if (index > -1) {
                    this.connections.splice(index, 1);
                }

                console.log("connection closed");
            });

            socket.on('end', () => {
                console.log("end");
            });

            socket.on('timeout', () => {
                console.log("timeout");
            });

        });

        this.server.listen(this.port, function () {
            console.log(`Server listening for connection requests on socket localhost:3000`);
        });
    }

    sendMessage(message: string) {
        let socket: net.Socket;
        for (socket of this.connections) {
            socket.write(message);
        }
    }
}
