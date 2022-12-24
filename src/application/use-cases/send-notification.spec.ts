import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  test('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Should be a notification',
      category: 'social',
      recipientId: 'exeample-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
