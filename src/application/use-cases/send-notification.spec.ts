import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  test('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'Should be a notification',
      category: 'social',
      recipientId: 'exeample-id',
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
