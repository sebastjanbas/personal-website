
export type BlogCategory = "Backend" | "AI/ML" | "Systems" | "Thoughts";

export const BLOG_CATEGORIES: BlogCategory[] = [
    "Backend",
    "AI/ML",
    "Systems",
    "Thoughts",
];

export type BlogStatus = "published" | "draft" | "coming-soon";

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    category: BlogCategory;
    date: string;
    readingTime: string;
    featured: boolean;
    status: BlogStatus;
    content: {
        intro: string;
        sections: { heading: string; body: string }[];
    };
    relatedSlugs: string[];
};

export const BLOG_DATA: BlogPost[] = [
    {
        slug: "websockets-vs-http",
        title: "WebSockets vs HTTP: Real-Time Communication Under the Hood",
        description: "A comprehensive look at HTTP and WebSocket protocols — how they work internally, when to use which, and how to build real-time applications with them.",
        category: "Backend",
        date: "2026-02-08",
        readingTime: "12 min read",
        featured: true,
        status: "coming-soon",
        content: {
            intro: "The web was built on a request-response model. A client sends a request, the server sends a response, and the connection closes. This worked fine for static documents, but modern applications demand more — live notifications, collaborative editing, real-time dashboards, multiplayer games. HTTP has evolved to handle some of these use cases, but WebSockets were purpose-built for persistent, bidirectional communication. Understanding both protocols at a deep level is essential for any backend engineer building real-time systems.",
            sections: [
                {
                    heading: "HTTP Under the Hood: From 1.1 to HTTP/3",
                    body: "HTTP/1.1 introduced persistent connections and pipelining, but each request still waits for its response before the next can be processed — head-of-line blocking at the application layer. HTTP/2 solved this with multiplexing: multiple streams over a single TCP connection, each carrying independent request-response pairs. But TCP itself still suffers from head-of-line blocking at the transport layer — a single lost packet stalls all streams. HTTP/3 moves to QUIC, a UDP-based transport that gives each stream independent loss recovery. Understanding these layers is critical because it determines the real-world latency characteristics of your application.",
                },
                {
                    heading: "The WebSocket Handshake and Frame Protocol",
                    body: "A WebSocket connection starts as an HTTP/1.1 request with an Upgrade header. The server responds with a 101 Switching Protocols status, and from that point on, the connection speaks an entirely different protocol. WebSocket frames are lightweight — a minimum of 2 bytes overhead compared to HTTP headers that can easily exceed 500 bytes. The frame format includes an opcode (text, binary, ping, pong, close), a masking key for client-to-server frames, and the payload. This minimal framing is what makes WebSockets so efficient for high-frequency, small-message communication patterns.",
                },
                {
                    heading: "When to Use Which: Decision Framework",
                    body: "Use HTTP when your communication pattern is request-response: REST APIs, file uploads, form submissions, and any interaction where the client initiates and the server responds once. Use WebSockets when you need the server to push data to the client without being asked, or when messages flow frequently in both directions — chat applications, live sports scores, collaborative tools, financial tickers. Server-Sent Events sit in the middle: they are HTTP-based but allow the server to push a stream of events to the client over a single long-lived connection. The trade-off is that SSE is unidirectional and text-only, but it works with standard HTTP infrastructure without special proxy configuration.",
                },
                {
                    heading: "Building a Real-Time Backend with WebSockets",
                    body: "Implementing a WebSocket server requires thinking differently about state and concurrency. Unlike HTTP where each request is stateless, WebSocket connections are long-lived and stateful — you need to track which clients are connected, manage rooms or channels, handle reconnections gracefully, and deal with backpressure when a slow client cannot keep up with messages. On the server side, libraries like ws for Node.js give you low-level control, while Socket.IO adds automatic reconnection, room management, and fallback transports. The choice depends on whether you need the convenience or prefer the performance and simplicity of raw WebSockets.",
                },
                {
                    heading: "Scaling WebSocket Connections",
                    body: "Scaling HTTP is well-understood — add more servers behind a load balancer. Scaling WebSockets is harder because connections are stateful. If a user connects to server A and their friend connects to server B, messages between them need a way to cross server boundaries. The standard solution is a pub/sub layer — Redis, NATS, or Kafka — that acts as a message bus between your WebSocket servers. Each server subscribes to relevant channels and forwards messages to its local connections. This architecture also helps with horizontal scaling, as you can add or remove WebSocket servers without losing the ability to route messages.",
                },
            ],
        },
        relatedSlugs: [],
    },
];
