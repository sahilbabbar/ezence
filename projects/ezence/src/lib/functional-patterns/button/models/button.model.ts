export type EzButtonType = 'default' | 'filled' | 'outline' | 'icon';

export interface EzButton {
    label: string;
    type?: EzButtonType;
}
