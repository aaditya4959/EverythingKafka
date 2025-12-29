import kafka from "./admin";

const consumer = kafka.consumer();

const runConsumer = async () => {
    console.log("Consuming messages...");
    await consumer.connect();
    await consumer.subscribe({topic: "Users", fromBeginning: true});

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            console.log({
                value: message.value.toString(),
            });
        },
    });

    await consumer.disconnect();
}

runConsumer();