type EzCardType = 'compact' | 'default' | 'large';

export class EzCard {
    body?: string;
    css?: any; // TODO: Is this the right way to check ngStyle type
    heading!: string;
    icon?: string; // TODO: Can it be of type EzIcon?
    image?: string; // TODO: Can we restrict it to accept EzImage component?
    onClick?: Function;
    tag?: string;
    type?: EzCardType;
}
