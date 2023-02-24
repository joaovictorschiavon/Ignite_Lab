const { randomUUID } = require("crypto")

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: [],
    sasl: {
      mechanism: 'scram-sha-256',
      username: '',
      password: '',
    },
    ssl: true,
  })

  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: '',
    messages: [
      {
        value: JSON.stringify({
          content: '',
          category: '',
          recipientID: randomUUID(),
        })
      }
    ]
  })

  await producer.disconneect()
}

bootstrap()