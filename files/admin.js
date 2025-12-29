const {Kafka} = require("kafkajs");

const kafka = new Kafka({
    clientId: "kafka-app",
    brokers: [
        "192.168.1.9:9092"
    ]
})

const initAdmin = async () => {
    const admin = kafka.admin();

    console.log("Connecting admin...");
    await admin.connect();
    console.log("Creating Topics...");

    await admin.createTopics({
        topics: [
            {topic: "Users", numPartitions: 2}
        ]
    });
    console.log("Topics created successfully.");

    console.log("Disconnecting admin...");
    await admin.disconnect();
}

initAdmin();

module.exports =  kafka;