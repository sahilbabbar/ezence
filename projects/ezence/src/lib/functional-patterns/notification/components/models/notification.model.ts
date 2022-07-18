type EzNotificationType = 'default' | 'error';

export class EzNotification {
    type?: EzNotificationType = 'default';
    message!: string;
    sticky?: boolean;
}
