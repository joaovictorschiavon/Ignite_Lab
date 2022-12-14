import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('should be able to create a notfication', () => {
    const notification = new Notification({
      content: new Content('string test'),
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});
