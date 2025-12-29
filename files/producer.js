import kafka from "./admin";


const producer = kafka.producer();

const runProducer = async () => {

    console.log("Producing messages...");
    await producer.connect();
    await producer.send({
        topic: "Users",
        messages: [
            {value: "Hello KafkaJS user!"},
        ],
    });

    await producer.disconnect();
}

runProducer();